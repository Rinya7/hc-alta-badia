import Image from 'next/image'
import React from 'react'
 

function Section() {
  return (

<section>
  <div className="w-full    bg-hockey-bg bg-cover bg-center border-t-4 pt-[40px] border-green-800 flexCenter text-white text-center aspect-[4/3] min-h-[320px] md:aspect-auto md:h-screen">
    <div className='container h-full'>
        <div className='h-full flex flex-col justify-around items-center   '>
        
                <Image
                    src="/logo.png"
                    alt="Логотип"
                    priority={true}
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]     mx-auto    "
                />
                <h3 className='w-full text-blue-700 text-center font-bold text-xl md:text-2xl xl:text-4xl'>Nati per vincere, forgiati dal ghiaccio!  </h3>
        </div>
    </div>
  </div>
</section>

     
  )
}

export default Section