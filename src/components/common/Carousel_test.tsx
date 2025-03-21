"use client";
import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    "/img/about/img_1.jpg",
    "/img/about/img_2.jpg",
    "/img/about/img_3.jpg",
    "/img/about/img_4.jpg",
    "/img/about/img_5.jpg",
  ];

function Carousel_test() {
  return (
    <Swiper
    spaceBetween={20}
    slidesPerView={1}
    loop={true}
    autoplay={{ delay: 3000 }}
    navigation  // ✅ Добавляет стрелки
    pagination={{ clickable: true }}  // ✅ Добавляет точки
    modules={[Navigation, Pagination]}  // ✅ Подключаем модули
>
  {slides.map((image, index) => (
            <SwiperSlide key={index} className="   ">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image}
                  alt={`Hockey moment ${index + 1}`}
                  width={400}
                  height={300}
                  
                  className="w-full   "
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                  <h3 className="text-lg font-semibold">foto {index + 1}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
</Swiper>

  )
}

export default Carousel_test