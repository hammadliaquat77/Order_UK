import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Deal = [
  { id: 1, title: "Deal 1", Image: "../DealImages/Rectangle_8.png" },
  { id: 2, title: "Deal 2", Image: "../DealImages/Rectangle_9.png" },
  { id: 3, title: "Deal 3", Image: "../DealImages/Rectangle_8.png" },
  { id: 3, title: "Deal 4", Image: "../DealImages/Rectangle_8.png" },
]

function Deals() {
  return (
    <section className="w-[85%] mx-auto pt-10">
      <h1 className="md:text-3xl text-xl font-bold sm:text-2xl text-blue-950 mb-6">
        Up to -40% 🎊 Order.uk exclusive deals
      </h1>

      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {Deal.map((item, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
            >
              <div className="p-2">
                <Card className="h-[220px] border-0 ">
                  <CardContent className="h-full p-0">
                    <div
                      className="h-full w-full flex flex-col justify-between p-4 relative rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: `url(${item.Image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black/50 "></div>

                      {/* Top-right Blue Box */}
                      <div className="absolute -top-0 right-6 bg-[#030815] text-white h-10 w-12 flex items-center justify-center rounded-md text-sm z-10">
                        -40%
                      </div>

                      {/* Bottom Content */}
                      <div className="pt-32 relative z-10 text-white">
                        <span className="block text-[#FC8A06] font-semibold">Restaurant</span>
                        <h1 className="text-lg font-bold">Chicken Burger</h1>
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

export default Deals
