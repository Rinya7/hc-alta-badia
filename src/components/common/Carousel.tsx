'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

export default function Carousel() {
  return (
    <div className="md:w-1/2 w-full">
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
        <Image src="/img/about/img_5.jpg" alt="Hockey moment 1" width={300} height={200}
        className="w-full h-full object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
        <Image src="/img/about/img_4.jpg" alt="Hockey moment 1" width={300} height={200}
        className="w-full h-full object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
        <Image src="/img/about/img_3.jpg" alt="Hockey moment 1" width={300} height={200}
        className="w-full h-full object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
        <Image src="/img/about/img_2.jpg" alt="Hockey moment 1" width={300} height={200}
        className="w-full h-full object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
        <Image src="/img/about/img_1.jpg" alt="Hockey moment 1" width={300} height={200}
        className="w-full h-full object-cover" />
        </div>
      </SwiperSlide>
     
    </Swiper>
  </div>
      
    
  );
}
