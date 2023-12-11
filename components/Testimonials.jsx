import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const Testimonials = ({ slides, onSlide, onLastSlide }) => {
  const handleSlideChange = (swiper) => {
    onSlide(swiper.activeIndex);
  };

  const handleReachEnd = () => {
    onLastSlide();
  };

  const autoplaySetup = {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  };

  const BREAKPOINTS = {
    320: {
      slidesPerView: 1.2,
      slidesOffsetBefore: 16,
      //slidesOffsetAfter: 50,
    },
    1024: {
      slidesPerView: 2.4,
      //slidesOffsetBefore: 150,
      slidesOffsetAfter: 100,
    },
  };

  const childContent = slides.map((el, index) => {
    return (
      <SwiperSlide
        key={index}
        className="bg-white min-h-[350px] md:min-h-[450px] rounded-2xl leading-10 tracking-wide relative"
      >
        <div className="h-full w-full absolute top-0 left-0 p-8 md:p-12">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="text-xl pb-2">{el.title}</div>
              <div className="montserrat-italic text-2xl md:text-3xl">
                {el.copy}
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div>{el.author}</div>
              </div>
              <div>{el.date}</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={16}
      slidesPerView={2}
      pagination={{ clickable: true }}
      autoplay={false}
      loop={true}
      breakpoints={BREAKPOINTS}
      onSlideChange={handleSlideChange}
      onReachEnd={handleReachEnd}
    >
      {childContent}
    </Swiper>
  );
};

export default Testimonials;
