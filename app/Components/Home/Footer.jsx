import React from 'react'
import Image from 'next/image'
import { Facebook, Instagram, Github, Linkedin } from 'lucide-react'

function Footer() {
    return (
//         <section className="bg-[#E8E8E8] md:h-[300px] h-[700px]">
//             <div className="w-[80%] mx-auto">
//                 <div className="flex md:flex-row flex-col gap-16 pt-10 justify-between">
// {/* First */}
//                     <div className="flex gap-5 flex-col">
//                         <Image src={"/Footer/LOGO.png"} height={150} width={150} />
//                         <Image src={"/Footer/Badges.png"} height={150} width={200} />
//                         <span className="text-[10px]">Company # 490039-445, Registered with <br /> House of companies.</span>
//                     </div>
// {/*second  */}
//                     <div className="flex gap-5 flex-col">
//                         <h2 className="font-bold text-sm tracking-tighter">Get Exclusive Deals in your Inbox</h2>
//                         <div className="relative">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email address"
//                                 className="w-full p-2 pr-24 text-[10px] py-3 rounded-full outline-none bg-[#D9D9D9]"
//                             />
//                             <button
//                                 className="bg-[#FC8A06] rounded-full px-4 py-2 text-sm text-white absolute top-1/2 left-40 transform -translate-y-1/2">
//                                 Subscribe
//                             </button>
//                         </div>
//                         <span className="text-[10px] pl-5">
//                             we wont spam, read our email policy
//                         </span>
//                         <div className="flex gap-3 pl-5">
//                              <Facebook />
//                              <Linkedin />
//                              <Github />
//                              <Instagram />
//                         </div>
//                     </div>

// {/* Third */}
//                       <div className="flex gap-5 flex-col">
//                         <h2 className="font-bold text-sm tracking-tighter">Legal Pages</h2>
//                         <ul className="text-[11px] font-sans flex flex-col gap-2 underline">
//                             <li>Terms and conditions</li>
//                             <li>Privacy</li>
//                             <li>Cookies</li>
//                             <li>Modern Slavery Statement</li>
//                         </ul>
//                     </div>

// {/* Four */}
//                       <div className="flex gap-5 flex-col">
//                         <h2 className="font-bold text-sm tracking-tighter">Legal Pages</h2>
//                         <ul className="text-[11px] font-sans flex flex-col gap-2 underline">
//                             <li>Get help</li>
//                             <li>Add your restaurant</li>
//                             <li>Sign up to deliver</li>
//                             <li>Create a business account</li>
//                         </ul>
//                     </div>


//                 </div>
//             </div>
//         </section>






<section className="bg-[#E8E8E8] md:h-[300px] h-[900px]">
            <div className="w-[80%] mx-auto">
                <div className="md:flex md:flex-row flex-col grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-16 pt-10 justify-between">
{/* First */}
                    <div className="flex gap-5 flex-col">
                        <Image src={"/Footer/LOGO.png"} height={150} width={150} />
                        <Image src={"/Footer/Badges.png"} height={150} width={200} />
                        <span className="text-[10px]">Company # 490039-445, Registered with <br /> House of companies.</span>
                    </div>
{/*second  */}
                    <div className="flex gap-5 flex-col">
                        <h2 className="font-bold text-sm tracking-tighter">Get Exclusive Deals in your Inbox</h2>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="md:w-[250px] w-[150px] p-2 pr-24 text-[10px] py-3 rounded-full outline-none bg-[#D9D9D9]"
                            />
                            <button
                                className="bg-[#FC8A06] rounded-full md:px-4 px-2 py-2 text-sm text-white absolute top-1/2 md:left-40 left-24 transform -translate-y-1/2">
                                Subscribe
                            </button>
                        </div>
                        <span className="text-[10px] pl-5">
                            we wont spam, read our email policy
                        </span>
                        <div className="flex gap-3 pl-5">
                             <Facebook />
                             <Linkedin />
                             <Github />
                             <Instagram />
                        </div>
                    </div>

{/* Third */}
                      <div className="flex gap-5 flex-col">
                        <h2 className="font-bold text-sm tracking-tighter">Legal Pages</h2>
                        <ul className="text-[11px] font-sans flex flex-col gap-2 underline">
                            <li>Terms and conditions</li>
                            <li>Privacy</li>
                            <li>Cookies</li>
                            <li>Modern Slavery Statement</li>
                        </ul>
                    </div>

{/* Four */}
                      <div className="flex gap-5 flex-col">
                        <h2 className="font-bold text-sm tracking-tighter">Legal Pages</h2>
                        <ul className="text-[11px] font-sans flex flex-col gap-2 underline">
                            <li>Get help</li>
                            <li>Add your restaurant</li>
                            <li>Sign up to deliver</li>
                            <li>Create a business account</li>
                        </ul>
                    </div>


                </div>
            </div>

        <section className="bg-[#03081F] w-full md:h-16 h-48 mt-10 flex justify-center">
            <div className="w-[80%] mx-auto flex md:flex-row flex-col md:justify-between gap-5 md:items-center">
                <div className="flex gap-5 items-center ">
                 <span className="md:text-[12px] pt-10 md:pt-0 text-[11px] text-white">©Order.uk Copyright {new Date().getFullYear()}, All Rights Reserved.</span>
                </div>

                <div className="flex text-white">
                    <ul className="flex md:flex-row flex-col md:gap-5 gap-2 text-[10px]">
                        <li>Privacy Policy</li>
                        <li>Terms</li>
                        <li>Pricing</li>
                        <li>Do not sell or share my personal information</li>
                    </ul>
                </div>

            </div>
        </section>

        </section>


    )
}

export default Footer