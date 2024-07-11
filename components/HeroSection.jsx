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
      className="opacity-0 flex justify-between p-24 my-10 min-w-[350px]"
    >
      <div className="flex items-start flex-col justify-center max-md:w-full max-md:items-center max-md:w-full">
        <h2 className="font-bold text-[3.5rem] max-md:text-[2.5rem]">Blog Love</h2>
        <p className="text-gray-500" style={{transform:"translateY(-0.4rem)"}}>
          Stories worth sharing.
        </p>
        <SingUp className="my-3">Get Started</SingUp>
      </div>
      <div className="max-md:scale-0 max-md:absolute w-[50%] w-[560px] rounded-[1rem] overflow-hidden ">
        <Image
          src={heroImage}
          height={720}
          width={1201}
          className="h-[auto] w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
