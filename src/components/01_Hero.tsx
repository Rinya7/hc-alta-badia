 
import React from 'react'

function Hero() {
  return (
    <section>
  <div className="w-full bg-hero bg-cover bg-center border-t-4 border-green-800 flexCenter text-white text-center aspect-[4/3] min-h-[320px] md:aspect-auto md:h-screen">
    <div className="relative z-10 bg-black/50 p-6 rounded-2xl max-w-5xl mx-auto">
      <h1 className="m-0 text-4xl md:text-6xl font-bold mb-4">Hockey Club Alta Badia</h1>
      <p className="text-lg md:text-xl">Passion. Teamwork. Excellence.</p>
    </div>
  </div>
</section>
  )
}

export default Hero