import React from 'react'
import Image from 'next/image'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Popular = [
  { id: 1, title: "McDonald’s Pakistan ",  Image: "/PopularResturent/Rectangle_1.png" },
  { id: 2, title: "Popa Jons",  Image: "/PopularResturent/Rectangle_2.png" },
  { id: 3, title: "KFC Pakistan",  Image: "/PopularResturent/Rectangle_3.png" },
  { id: 4, title: "Texas Chicken",  Image: "/PopularResturent/Rectangle_5.png" },
  { id: 5, title: "Burger King",  Image: "/PopularResturent/Rectangle_7.png" },
  { id: 6, title: "Shaurma 1",  Image: "/PopularResturent/Rectangle_8.png" },
]



function PopularCategories() {
  return (
        <section className="w-[85%] mx-auto pt-10">
          <h1 className="md:text-3xl text-xl font-bold sm:text-2xl text-black mb-6">
          Popular Restaurants</h1>
    
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {Popular.map((item, index) => (
                <CarouselItem
                  key={index}
                  className=" sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="p-2">
                    <Card className="md:h-[160px] h-[220px] border-0">
                      <CardContent className="h-full p-0">
            <div className='h-full w-full rounded-lg bg-white  flex flex-col justify-end items-center'
            >
               <Image src={item.Image} height={200} width={300} className='rounded-t-md w-full' />
               <div className='bg-[#FC8A06] w-full flex flex-col justify-center items-center h-12 p-6 sm:p-0 md:p-0 rounded-b-lg '>
                   <h1 className='text-white font-bold tracking-tighter'>{item.title}</h1>
                   <span className='text-white ml-4 text-sm font-light'>{item.resturent}</span>
               </div>
           </div>                        
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block sm:block" />
            <CarouselNext className="hidden md:block sm:block" />
          </Carousel>
        </section>
    
  )
}

export default PopularCategories






























// <div className='h-[200px] w-[200px] rounded-lg bg-amber-600  flex flex-col justify-end items-center'>
//              <div className='mb-16'>hello</div>
//              <div className='bg-[#03081F] w-full flex flex-col h-12'>
//                  <h1 className='text-[#FC8A06] font-bold ml-4 tracking-tighter'>Burger and FastFood</h1>
//                  <span className='text-white ml-4 text-sm font-light'>Resturent</span>
//              </div>
//          </div>