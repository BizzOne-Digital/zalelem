import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_COOKIE = "pw_admin_session";

function getSecret() {
  return process.env.ADMIN_SECRET || "pest-warriors-dev-secret-change-me";
}

async function hmacHex(payload: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payload),
  );
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

async function verifySessionToken(token: string | undefined) {
  if (!token) return false;
  const parts = token.split(":");
  if (parts.length !== 3) return false;
  const [username, expRaw, signature] = parts;
  const payload = `${username}:${expRaw}`;
  const expected = await hmacHex(payload);
  if (!timingSafeEqual(signature, expected)) return false;
  const exp = Number(expRaw);
  if (!Number.isFinite(exp) || Date.now() > exp) return false;
  const expectedUser = process.env.ADMIN_USERNAME || "admin";
  return username === expectedUser;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  const loggedIn = await verifySessionToken(token);

  const isLoginPage = pathname === "/admin/login";
  const isAdminPage = pathname.startsWith("/admin");
  const isAdminApi =
    pathname.startsWith("/api/admin") && pathname !== "/api/admin/login";
  const isUploadApi = pathname === "/api/upload";

  if (isLoginPage && loggedIn) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (isAdminPage && !isLoginPage && !loggedIn) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if ((isAdminApi || isUploadApi) && !loggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*", "/api/upload"],
};
