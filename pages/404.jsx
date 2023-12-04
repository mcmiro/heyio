import Head from "next/head";

// Components
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import CtaButton from "../components/CtaButton";

export default function Home() {
  return (
    <div>
      <Head>
        <title>heyio</title>
        <meta name="description" content="heyio web agency 404" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4">
      <Navigation />
        {/* service START */}
        <section className="flex items-center justify-center min-h-[600px]">
          <div className="text-center">
            <h1 className="text-5xl md:text-5xl font-extrabold py-8 md:pt-16 tracking-wide">seite nicht gefunden.</h1>
            <p className="text-2xl font-bold pt-8 tracking-wide">fehler 404</p>
            <div className="pt-16">
            <CtaButton title="zur startseite" href="/" />

            </div>

          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
