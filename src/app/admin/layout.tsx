import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Pest Warriors",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-base-950 text-white">{children}</div>
  );
}
