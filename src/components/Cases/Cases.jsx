import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

import { useMediaQuery } from "react-responsive";

import Container from "../../shared/Container/Container";
import Title from "../../shared/Title/Title";
import Card from "../../shared/Card/Card";

import Case1 from "../../images/slider/case1.jpg";
import Case2 from "../../images/slider/case2.jpg";
import Case3 from "../../images/slider/case3.jpg";
import Case4 from "../../images/slider/case4.jpg";
import Case5 from "../../images/slider/case5.jpg";

import { ReactComponent as ArrowL } from "../../images/icons/arrow-left.svg";
import { ReactComponent as ArrowR } from "../../images/icons/arrow-right.svg";

import css from "./cases.module.css";

const Cases = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const isBigScreen = useMediaQuery({ minWidth: 1280 });

  const slidesPerView = isSmallScreen ? 1 : 2;
  const margSlider = isBigScreen ? 48 : 24;

  const [activeSlide, setActiveSlide] = useState(null);

  const handleSlideChange = (swiper) => {
    const activeSlideData = swiper.slides[swiper.activeIndex].dataset;
    setActiveSlide(activeSlideData);
  };

  return (
    <Container id="cases">
      <div className={css.container__cases}>
        <div className={css.container__info}>
          <div className={css.container__title}>
            <div className={css.text__size}>
              <Title text="Successful cases of our company" />
            </div>
          </div>
          <div className={css.container__buttons}>
            <div className={css.numbers}>
              <p className={css.number__first}>
                {activeSlide ? activeSlide.id : ""}
              </p>
              <p>/</p>
              <p className={css.number__second}>5</p>
            </div>
            <div className={css.buttons}>
              <button className={`row__p ${css.row}`}>
                <ArrowL />
              </button>
              <button className={`row__n ${css.row}`}>
                <ArrowR />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          className={css.container__card}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={margSlider}
          slidesPerView={slidesPerView}
          navigation={{
            nextEl: ".row__n",
            prevEl: ".row__p",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide data-id="1">
            <Card
              image={Case1}
              text="Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”"
              location="Wind Power for auto field irrigation"
              date="July 2023"
            />
          </SwiperSlide>
          <SwiperSlide data-id="2">
            <Card
              image={Case2}
              text="Zhytomyr city Private Enterprise “Bosch”"
              location="Solar Panels for industrial use"
              date="November 2023"
            />
          </SwiperSlide>
          <SwiperSlide data-id="3">
            <Card
              image={Case3}
              text="Rivne city Private Enterprise “Biotech”"
              location="Thermal modules"
              date="July 2023"
            />
          </SwiperSlide>
          <SwiperSlide data-id="4">
            <Card
              image={Case4}
              text="Kherson city
              Private Enterprise “HealthyFarm”"
              location="Wind power"
              date="September 2021"
            />
          </SwiperSlide>
          <SwiperSlide data-id="5">
            <Card
              image={Case5}
              text="Zaporizhia city
              Private Enterprise “Biotech”"
              location="Mini nuclear stations"
              date="May 2021"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Cases;
