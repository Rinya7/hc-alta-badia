import React from 'react'
import Carousel from './common/Carousel'

function Section() {
  return (
    <section>
    <div className="w-full bg-hockey-bg bg-cover bg-center border-t-4 border-green-800 flexCenter text-white text-center aspect-[4/3] min-h-[320px] md:aspect-auto md:h-screen">
      <div className='container'>
       <div className='h-full py-[100px]'>
        <Carousel /> </div>
      </div>
    </div>
  </section>
  )
}

export default Section