import Head from 'next/head';
import React, { useState } from 'react';

// Components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import RoadmapItemUp from '../components/RoadmapItemUp';
import RoadmapItemDown from '../components/RoadmapItemDown';
import RoadmapItemMobile from '../components/RoadmapItemMobile';
import ServiceItem from '../components/ServiceItem';
import Separator from '../components/Separator';
import MoreButton from '../components/MoreButton';
import HeadlineMd from '../components/HeadlineMd';
import CaseCard from '../components/CaseCard';
import TeamCard from '../components/TeamCard';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';

// Data
import HomeContent from '../content/HomeContent';
import Roadmap from '../content/RoadmapContent';
import Servies from '../content/ServicesContent';
import Cases from '../content/CasesContent';
import Team from '../content/TeamContent';
import FaqContent from '../content/FaqContent';
import TestimonialsContent from '../content/TestimonialsContent';

export default function Home() {
  const [faqIsActive, setFaqIsActive] = useState(0);
  const [testimonialOverlay, setTestimonialOverlay] = useState(0);
  const [testimonialLastSlide, setTestimonialLastSlide] = useState(false);

  const toggleFaq = (index) => {
    if (index === faqIsActive) {
      setFaqIsActive(-1);
    } else {
      setFaqIsActive(index);
    }
  };

  const FaqItems = FaqContent.map((item, index) => {
    return (
      <Faq
        key={index}
        title={item.title}
        index={index + 1}
        content={item.content}
        active={index === faqIsActive ? true : false}
        onClick={() => toggleFaq(index)}
      />
    );
  });

  const handleTestimonialSlides = (index) => {
    setTestimonialOverlay(index);
  };

  const handleTestimonialLastSlide = () => {
    setTestimonialLastSlide(true);
  };

  return (
    <div>
      <Head>
        <title>heyio</title>
        <meta name="description" content="heyio web agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header content={HomeContent} />

      <div className="container mx-auto px-4">
        {/* service START */}
        <section>
          <HeadlineMd attr={'h3'} title={'service'} />
          <div className="grid md:grid-cols-2 gap-16 mt-8 relative z-30">
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

        {/* workflow START */}
        <section>
          <HeadlineMd attr={'h3'} title={'workflow'} />
          {/* Row TOP */}
          <div className="hidden md:block">
            <div className="grid grid-cols-6 justify-between items-end mt-8">
              {Roadmap.map((el, index) => {
                if (index < 3) {
                  return (
                    <div key={index} className="col-span-2">
                      <RoadmapItemUp item={el} />
                    </div>
                  );
                }
              })}
            </div>
            {/* Separator Dashed */}
            <div className="hidden md:block w-full relative">
              <div className="dashed-separator"></div>
            </div>
            {/* Row Bottom */}
            <div className="grid grid-cols-6 justify-between">
              {Roadmap.map((el, index) => {
                if (index >= 3) {
                  return (
                    <div
                      key={index}
                      className={`${
                        index == Roadmap.length - 1 ? '' : 'col-span-2'
                      }
                    ${index == 3 ? 'lg:col-start-2' : ''}`}
                    >
                      <RoadmapItemDown item={el} />
                    </div>
                  );
                }
              })}
            </div>
          </div>
          {/* Mobile */}
          <div className="md:hidden">
            {Roadmap.map((el, index) => {
              return (
                <div key={index}>
                  <RoadmapItemMobile item={el} />
                </div>
              );
            })}
          </div>
        </section>
        {/* workflow END */}
        <Separator />
        {/* cases START */}
        {/*<section>
          <HeadlineMd attr={'h3'} title={'cases'} />
          <div className="md:grid md:grid-cols-2 gap-16 mt-8">
            {Cases.map((el, index) => {
              return <CaseCard item={el} key={index} />;
            })}
          </div>
          <div className="flex justify-end mt-16">
            <MoreButton />
          </div>
        </section>
        <Separator />*/}
        {/* cases END */}
      </div>
      {/* Testimonials START */}
      <section className="gradient-gray px-4 mb-8">
        <div className="container mx-auto">
          <HeadlineMd attr={'h3'} title={'customers'} />
        </div>

        <div className=" mx-auto">
          <div className="relative">
            <div
              className={`absolute top-0 right-0 w-60 h-full z-10 bg-gradient-to-l from-[#f8f8f8]`}
            ></div>
            <div
              className={`absolute top-0 left-0 w-60 h-full z-10 bg-gradient-to-r from-[#f8f8f8]`}
            ></div>
            {
              <Testimonials
                slides={TestimonialsContent}
                onSlide={handleTestimonialSlides}
                onLastSlide={handleTestimonialLastSlide}
              />
            }
          </div>
        </div>
      </section>
      {/* Testimonials END */}
      <Separator />
      {/* Team START */}
      <section className="gradient-gray px-4">
        <div className="container mx-auto">
          <HeadlineMd attr={'h3'} title={'team'} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-8">
            {Team.map((el, index) => {
              return <TeamCard item={el} key={index} />;
            })}
          </div>
        </div>
      </section>
      <div className="gradient-gray-inverse w-full h-32"> </div>
      {/* Team END */}
      {/* FAQ START */}
      <section className="gradient-gray px-4">
        <div className="container mx-auto">
          <HeadlineMd attr={'h3'} title={'faq'} />
          <div className="container mx-auto px-4">
            <div className="border-b border-black">{FaqItems}</div>
          </div>
        </div>
      </section>
      {/* FAQ END */}
      <Footer />
    </div>
  );
}
