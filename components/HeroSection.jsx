"use client"
import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import { SingUp } from "./Buttons";
import { heroImage } from "@/utils";
import gsap from "gsap";

const HeroSection = () => {
  useGSAP(() => {
    gsap.to('#hero-section', {
      y: 0,
      opacity: 1,
      duration:0.5,
      ease: 'power3.inOut',
    });
  }, []);
  return (
    <section
      id="hero-section"
      className="opacity-0 flex justify-between md:p-28  my-2 min-w-[350px] gap-6 relative overflow-x-hidden h-[75vh] md:translate-y-2"
    >
      <div className="flex items-start flex-col justify-center max-md:w-full max-md:items-center max-md:h-full md:min-w-[200px]">
        <h2 className="font-bold text-[3.5rem] max-md:text-[2.5rem]">Blog Love</h2>
        <p className="max-md:text-gray-800 text-gray-500" style={{transform:"translateY(-0.4rem)"}}>
          Stories worth sharing.
        </p>
        <SingUp className="my-3">Get Started</SingUp>
      </div>
      <div className="top-0 left-0  max-md:absolute max-md:-z-10  max-md:opacity-50 max-md:rounded-none max-md:h-full h-[fit-content] md:max-w-[545px] rounded-[1rem] overflow-hidden ">
        <Image
          src={heroImage}
          height={720}
          width={1201}
          className="h-full w-full "
        />
      </div>
    </section>
  );
};

export default HeroSection;
