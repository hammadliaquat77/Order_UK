
import React from 'react'
import Image from 'next/image';

function About() {
  return (
    <section className='w-[85%] mx-auto md:pt-10 pt-10'>
       <div className=' w-full bg-[#F4F4F4] rounded-md md:p-16 p-6'>
          <h1 className='md:text-2xl text-md font-bold md:mb-10 hidden md:block lg:block'>Know more about us!</h1>
          <h1 className='md:text-2xl text-md font-bold mb-5 md:hidden lg:hidden'>about us!</h1>

          <div className='w-full md:h-[400px] h-[1080px] flex md:flex-row flex-col bg-[#03081F] rounded-lg'>
            <div className='md:w-[40%] flex flex-col justify-center items-center  w-full pt-6 md:p-8  md:pt-2 md:pl-4'>
              <button className='bg-[#FC8A06] rounded-full md:px-12 md:py-4  px-4 py-2 md:text-md  text-[12px] font-bold'>How does Order.UK work?</button>
                <div className='flex flex-col w-full'>
                    <h1 className='md:text-[14px] text-[11px] text-white font-bold pt-6 text-center'>What payment methods are accepted?</h1>
                    <h1 className='md:text-[14px] text-[11px] text-white font-bold pt-6 text-center'>Can I track my order in real-time?</h1>
                    <h1 className='md:text-[14px] text-[11px] text-white font-bold pt-6 text-center'>Are there any special discounts or promotions available?</h1>
                    <h1 className='md:text-[14px] text-[11px] text-white font-bold pt-6 text-center'>Is Order.UK available in my area?</h1>
                </div>
            </div>
            <div className='w-[1px] h-[400px] bg-white'></div>

             {/* section 2 */}
            <div className='md:w-[60%] w-full md:pt-14'>

                   <div className='flex flex-col gap-7 md:flex-row justify-between p-5'>
                      <div className='md:w-[31%] w-full rounded-lg bg-[#D9D9D9]'> 
                        <div className='flex flex-col justify-center items-center p-4'>
                         <h1 className='text-sm font-bold mb-3'>Place an Order!</h1>
                         <div> <Image src={"/About/order-food.png"} height={80} width={80}></Image> </div>
                         <p className='text-[11px] mt-2 font-semibold text-center'>Place order through our website or Mobile app</p>
                        </div>
                      </div>

                      <div className='md:w-[31%] w-full rounded-lg bg-[#D9D9D9]'> 
                        <div className='flex flex-col justify-center items-center p-4'>
                         <h1 className='text-sm font-bold mb-3'>Place an Order!</h1>
                         <div> <Image src={"/About/food.png"} height={80} width={80}></Image> </div>
                         <p className='text-[11px] mt-2 font-semibold text-center'>Place order through our website or Mobile app</p>
                        </div>
                      </div>

                      <div className='md:w-[31%] w-full rounded-lg bg-[#D9D9D9]'> 
                        <div className='flex flex-col justify-center items-center p-4'>
                         <h1 className='text-sm font-bold mb-3'>Place an Order!</h1>
                          <div> <Image src={"/About/order.png"} height={80} width={80}></Image> </div>
                          <p className='text-[11px] mt-2 font-semibold text-center'>Place order through our website or Mobile app</p>
                          </div>
                      </div>
                   </div>

                    <div className='w-[80%] mx-auto text-white md:pt-2 mb-6'>
                        <p className='text-center text-[12px]'>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
                      </div>

            </div>

          </div>

       </div>
    </section>
  )
}

export default About;









