import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
// import Header from "@/components/globals/Header";
import Header from "@/components/globals/Header2";
import Herosection from "@/components/home/Herosection";
import BelowHero from "@/components/home/BelowHero";
import LandScapeSeen from "@/components/home/LandScapeSeen";
import Footer from "@/components/globals/Footer";
import Xyz from "@/components/home/xyz";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header/>
      <Herosection/>
      <Xyz/>
      {/* <BelowHero/>
      <LandScapeSeen/> */}
      <Footer/>
    </main>
  );
}
