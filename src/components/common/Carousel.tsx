"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const slides = [
  "/img/about/img_1.jpg",
  "/img/about/img_2.jpg",
  "/img/about/img_3.jpg",
  "/img/about/img_4.jpg",
  "/img/about/img_5.jpg",
];

export default function Carousel() {
  return (
    <div className="w-full  mx-auto py-10">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        coverflowEffect={{
          rotate: 80, // Без поворота
          stretch: 80, // Расстояние между слайдами
          depth: 10, // Глубина эффекта
          modifier: 1, // Сила 3D-эффекта
          slideShadows: true, // Тени
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 }, // 📱 Мобилки - 1 слайд
          640: { slidesPerView: 2,   }, // 💻 Планшеты - 2 слайда
        //  1024: { slidesPerView: 2 },// 🖥 Десктоп - 3 слайда
        }}
        className="swiper-container"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index} className="   ">
            <div className="relative   rounded-lg shadow-lg  ">
              <Image
                src={image}
                alt={`Hockey moment ${index + 1}`}
                width={1600}
                height={1200}
                
                className="w-auto h-auto   "
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="text-lg font-semibold">foto {index + 1}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
