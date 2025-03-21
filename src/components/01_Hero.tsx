import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className="container h-[400px] md:h-screen relative flex items-center justify-center text-white text-center px-4">
    <Image 
      src="/images/hero.jpg" 
      alt="Hockey Club Alta Badia" 
      layout="fill" 
      objectFit="cover" 
      className="absolute z-0 h-full"
    />
    <div className="relative z-10 bg-black/50 p-6 rounded-2xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hockey Club Alta Badia</h1>
      <p className="text-lg md:text-xl">Passion. Teamwork. Excellence.</p>
    </div>
  </section>
  )
}

export default Hero