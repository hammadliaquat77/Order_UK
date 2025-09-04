
"use client"
import React from 'react'
import Image from "next/image";

function Hero() {
  return (
    <section className='w-[90%] mx-auto pt-20'>
      <div className='w-full md:h-[500px] h-full rounded-md flex  items-center' style={{ backgroundImage: "url('/HomeImages/Rectangle_2.png')" }}>
        <div className='flex flex-col md:flex-row items-center justify-between '>
          {/* section 1 */}
          <div className='text-white md:p-12 p-6 md:w-[70%] pt-24'>
            <p className="md:text-sm text-[11px]">
              Order Restaurant food, takeaway and groceries.
            </p>
            <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold pt-4">Feast Your Senses,</h1>
            <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold text-[#FC8A06] mb-8">Fast and Fresh</h1>

            <span className="text-[10px] md:pl-6 ">
              Enter a postcode to see what we deliver
            </span>

            <div className="flex pt-2">
              <input
                type="text"
                className="md:w-[70%] md:h-[50px] w-[100%] h-[40px] pl-6 bg-white outline-none text-black rounded-full"
                placeholder="hello"
                disabled
              />
              <button className="md:px-[40px] px-[16px] text-sm -ml-12 h-[40px] md:h-[50px] bg-[#FC8A06] rounded-full">
                Search
              </button>
            </div>
          </div>

   {/* Section 2 + Section 3 (Images overlapped correctly) */}
          <div className="md:w-[100%] w-full flex items-center justify-center pt-12 md:pt-16 md:-ml-[300px] mr-10 relative">
            {/* Image 1 */}
            <Image
              src={"/HomeImages/Untitled-1 1.png"}
              height={740}
              width={700}
              className="md:w-[85%] w-[80%] md:-mb-[50px] -ml-10 md:-ml-0  object-contain relative z-10"
              alt="Dish 1"
            />

            {/* Image 2 (overlapping) */}
            <Image
              src={"/HomeImages/Untitled-2.png"}
              height={400}
              width={400}
              className="md:w-[50%] w-[50%] md:-mb-[38px] object-contain absolute bottom-0 right-10 z-20"
              alt="Dish 2"
            />
          </div>

    {/* Section 4 (Floating Image) */}
       <div className='hidden absolute md:right-[68px] md:top-[152px] top-[650px] md:flex items-end justify-end'>
          <Image src={"/HomeImages/image_1.png"} width={300} height={300} 
          className='object-contain md:-mt-6 md:w-[500px] w-[200px]' />

          <Image src="/HomeImages/Group_2.png" alt="" height={300} width={300} className='absolute top-2 right-32' />
          <Image src="/HomeImages/Group_2.png" alt="" height={300} width={300} className='absolute top-32 right-6' />
          <Image src="/HomeImages/Group_2.png" alt="" height={300} width={300} className='absolute bottom-10 right-16' />
       </div>
      
        </div>
      </div>
    </section>
  )
}

export default Hero







