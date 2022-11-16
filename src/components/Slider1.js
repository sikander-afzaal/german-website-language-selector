import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SwiperCore, { Navigation, Autoplay} from "swiper";


const Slider1 = () => {

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
            slidesPerView: 6,
            spaceBetween: 50,
          },
      }}

    spaceBetween={10}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false
       }}       
        modules={Navigation}
        className="w-full"
      >

     <SwiperSlide  className="" >
     <div className="logo">
       <a href="https://www.backs-it.de" target="_blank" rel="noreferrer">
       <img src="/img/backs-it-logo-claim.svg" width="180px" alt=""/></a>
     </div>
     </SwiperSlide>

     <SwiperSlide  className="" >
     <div className="logo">
       <a href="https://kfo-exner-wenzel.de/" target="_blank" rel="noreferrer">
       <img width="180px" src="/img/logo_wenzel.png" alt=""/></a>
     </div>
     </SwiperSlide>

     <SwiperSlide  className="" >
     <div className="logo">
        <a href="https://3raum-architekten.de/" width="180px" target="_blank" rel="noreferrer">
        <img src="/img/3raum_logo.png" width="180px" alt=""/></a>
     </div>
     </SwiperSlide>



     <SwiperSlide  className="" >
     <div className="logo">
        <a href="https://www.aktuell-verein.de/lohnsteuerhilfe/ladewig-loehne" target="_blank" rel="noreferrer">
        <img src="/img/logo_alh.png" width="180px" alt=""/></a>
     </div>
     </SwiperSlide>


     <SwiperSlide  className="" >
     <div className="logo">
        <a href="http://www.kremer-vt.de" target="_blank" rel="noreferrer">
        <img src="/img/kremer-veranstaltungstechnik-logo.gif" width="180px" alt=""/></a>
     </div>
     </SwiperSlide>


     <SwiperSlide  className="" >
     <div className="logo">
     <a href="/#" target="_blank" rel="noreferrer"><img src="/img/Logofoxhub.png" width="180px" alt=""/></a>
     </div>
     </SwiperSlide>


   


     </Swiper>
    </>
  )
}

export default Slider1