import Head from "next/head";
import React, { useState } from "react";

// Components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ServiceItem from "../components/ServiceItem";
import Separator from "../components/Separator";
import MoreButton from "../components/MoreButton";
import HeadlineMd from "../components/HeadlineMd";
import CaseCard from "../components/CaseCard";

// Data
import DevContent from "../content/DevContent";
import Servies from "../content/ServicesContent";
import Cases from "../content/CasesContent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>seo agentur wien - heyio</title>
        <meta name="description" content="seo agentur wien" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header content={DevContent} />
      <div className="container mx-auto px-4">
        {/* service START */}
        <section>
          <HeadlineMd attr={"h3"} title={"service"} />
          <div className="grid md:grid-cols-2 gap-16 mt-8">
            {Servies.map((el, index) => {
              return <ServiceItem item={el} index={index + 1} key={index} />;
            })}
          </div>
          <div className="flex justify-end mt-16">
            <MoreButton />
          </div>
        </section>
        {/* service END */}
        <Separator />

        {/* cases START */}
        <section>
          <HeadlineMd attr={"h3"} title={"cases"} />
          <div className="md:grid md:grid-cols-2 gap-16 mt-8">
            {Cases.map((el, index) => {
              return <CaseCard item={el} key={index} />;
            })}
          </div>
          <div className="flex justify-end mt-16">
            <MoreButton />
          </div>
        </section>
        <Separator />
        {/* cases END */}
      </div>
      <Footer />
    </div>
  );
}
