// import Image from "next/image";
// import Link from "next/link";
import Navbar from "../app/Components/Navbar"
import Hero from "./Components/Home/Hero";
import Deal from "./Components/Home/Deals";
import PopularCategories from "./Components/Home/PopularCategories";
import PopularResturent from "./Components/Home/PopularResturent";
import Ordering_App from "./Components/Home/Ordering_App";
import About from "./Components/Home/About";
import Count from "./Components/Home/Count";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <div className="min-h-screen w-[100%] mx-auto bg-white">
    <Navbar/>
    <Hero/>
    <Deal/>
    <PopularCategories/>
    <PopularResturent/>
    <Ordering_App/>
    <About/>
    <Count/>
    <Footer/>

   </div>
  );
}


