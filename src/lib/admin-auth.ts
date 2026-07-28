import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "pw_admin_session";
const SESSION_DAYS = 7;

function getSecret() {
  return process.env.ADMIN_SECRET || "pest-warriors-dev-secret-change-me";
}

export function getAdminCredentials() {
  return {
    username: process.env.ADMIN_USERNAME || "admin",
    password: process.env.ADMIN_PASSWORD || "PestWarriors2026!",
  };
}

function sign(payload: string) {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

export function createSessionToken(username: string) {
  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const payload = `${username}:${exp}`;
  return `${payload}:${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined | null) {
  if (!token) return null;
  const parts = token.split(":");
  if (parts.length !== 3) return null;
  const [username, expRaw, signature] = parts;
  const payload = `${username}:${expRaw}`;
  const expected = sign(payload);
  try {
    const a = Buffer.from(signature);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  } catch {
    return null;
  }
  const exp = Number(expRaw);
  if (!Number.isFinite(exp) || Date.now() > exp) return null;
  const { username: expectedUser } = getAdminCredentials();
  if (username !== expectedUser) return null;
  return { username };
}

export function validateLogin(username: string, password: string) {
  const creds = getAdminCredentials();
  const userOk =
    username.length === creds.username.length &&
    timingSafeEqual(Buffer.from(username), Buffer.from(creds.username));
  const passOk =
    password.length === creds.password.length &&
    timingSafeEqual(Buffer.from(password), Buffer.from(creds.password));
  return userOk && passOk;
}

export async function getAdminSession() {
  const jar = await cookies();
  return verifySessionToken(jar.get(ADMIN_COOKIE)?.value);
}

export function sessionCookieOptions(token: string) {
  return {
    name: ADMIN_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  };
}
