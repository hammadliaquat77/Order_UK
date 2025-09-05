// import React from 'react'

// function Count() {
//   return (
//     <section className='w-[85%] mx-auto pt-10 mb-12'>
//         <div className="w-full md:h-[100px] h-[400px] bg-[#FC8A06] rounded-md md:flex flex-col grid md:grid-cols-4 grid-cols-2 md:flex-row md:justify-between justify-center items-center md:p-14 p-10 gap-10">
           
//            <div className="flex md:gap-20 gap-12">
//             <div className="flex flex-col justify-center items-center">
//                 <h1 className="md:text-4xl text-xl sm:text-2xl text-white">546+</h1>
//                 <span className="md:text-md text-[10px] text-white font-semibold">Register Riders</span>
//             </div>
//                 <div className="h-16 w-[1px] bg-white"></div>
//            </div>

//           <div className="flex md:gap-20">
//             <div className="flex flex-col justify-center items-center">
//                 <h1 className="md:text-4xl text-xl text-white">546+</h1>
//                 <span className="md:text-md text-[10px] text-white font-semibold">Register Riders</span>
//             </div>
//                 <div className="hidden md:block h-16 w-[1px] bg-white"></div>
//            </div>

//            <div className="flex md:gap-20">
//             <div className="flex flex-col justify-center items-center">
//                 <h1 className="text-4xl text-white">546+</h1>
//                 <span className="text-md text-white font-semibold">Register Riders</span>
//             </div>
//                 <div className="h-16 w-[1px] bg-white"></div>
//            </div>

//            <div className="flex md:gap-20">
//             <div className="flex flex-col justify-center items-center">
//                 <h1 className="text-4xl text-white">546+</h1>
//                 <span className="text-md text-white font-semibold">Register Riders</span>
//             </div>
//            </div>

//         </div>
//     </section>
//   )
// }

// export default Count

















"use client"
import React from 'react';
import CountUp from 'react-countup';

function Count() {
  return (
    <section className='w-[85%] mx-auto pt-10 mb-12'>
      <div className="w-full md:h-[150px] h-auto bg-[#FC8A06] rounded-md grid md:grid-cols-4 grid-cols-2 md:flex-row justify-center items-center md:p-10 p-10 gap-y-10">
        
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl text-white">
            <CountUp start={0} end={546} duration={10} />+
          </h1>
          <span className="text-[10px] sm:text-sm md:text-md text-white font-semibold text-center">Register Riders</span>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl text-white">
             <CountUp start={0} end={789900} duration={10} />+
            </h1>
          <span className="text-[10px] sm:text-sm md:text-md text-white font-semibold text-center">Orders Delivered</span>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl text-white">
             <CountUp start={0} end={690} duration={10} />+
            </h1>
          <span className="text-[10px] sm:text-sm md:text-md text-white font-semibold text-center">Restaurants Partnered</span>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl text-white">
            <CountUp start={0} end={17457} duration={10} />+
            </h1>
          <span className="text-[10px] sm:text-sm md:text-md text-white font-semibold text-center">Food items</span>
        </div>

      </div>
    </section>
  );
}

export default Count;