import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getCmsContent } from "@/lib/cms";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cms = await getCmsContent();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[110] focus:rounded-md focus:bg-green-600 focus:px-4 focus:py-2 focus:font-bold focus:text-white"
      >
        Skip to main content
      </a>
      <Header site={cms.site} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer site={cms.site} services={cms.services} />
    </>
  );
}
