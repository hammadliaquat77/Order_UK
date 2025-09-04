import React from 'react'
import Image from 'next/image'

function Ordering_App() {
  return (
    <section className='w-[85%] mx-auto pt-10'>
       <div className='flex flex-col justify-center items-center gap-10'>
          <Image src={"/Ordering_app/Ordering_app.png"} height={1200} width={1200} className='h-[150px] sm:h-[300px] md:h-[400px]' />

      <div className='flex flex-col md:flex-row gap-10'>
      <Image src={"/Ordering_app/Group_2.png"} height={550} width={550} />        
      <Image src={"/Ordering_app/Group_1.png"} height={550} width={550} />        
      </div>

       </div>
    </section>
  )
}

export default Ordering_App