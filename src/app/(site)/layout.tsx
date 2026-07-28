import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntroLoader } from "@/components/IntroLoader";
import { getCmsContent } from "@/lib/cms";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cms = await getCmsContent();

  return (
    <>
      <IntroLoader />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[110] focus:rounded-md focus:bg-gold-500 focus:px-4 focus:py-2 focus:font-bold focus:text-base-950"
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
