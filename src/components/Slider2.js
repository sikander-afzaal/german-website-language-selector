import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SwiperCore, { Navigation, Autoplay } from "swiper";

const Slider2 = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={Navigation}
        className=" mySwiper-review"
      >
        <SwiperSlide className="review">
          <div>
            <a
              className="review-logo"
              href="https://www.globalsign.com/"
              target="__blank"
            >
              <img src="./img/img1.png" alt="Please click to see profile." />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="review">
          <div>
            <a
              className="review-logo"
              href="https://www.it-recht-kanzlei.de/"
              target="__blank"
            >
              <img
                src="./img/img2.png"
                alt="Vertreten durch die IT-Recht Kanzlei"
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="review">
          <div>
            <a
              className="review-logo"
              href="https://www.fairness-im-handel.de/"
              target="__blank"
            >
              <img src="/img/fairness_handle.png" alt="fairness im handel" />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="review">
          <div>
            <a
              className="review-logo"
              href="https://www.german-ma.de/"
              target="__blank"
            >
              <img src="/img/made_in_germany.png" alt="made in germany" />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="review">
          <div>
            <a
              className="review-logo"
              href="https://www.lvm.de/"
              target="__blank"
            >
              <img src="/img/lvm.png" alt="lvn" />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider2;
