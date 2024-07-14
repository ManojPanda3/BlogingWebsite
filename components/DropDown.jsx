"use client";
import React, { useRef, useState } from "react";
import Button from "./Buttons";
import { dropDownIcon } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DropDown = () => {
  const [isDown, setDown] = useState(false);
  const dropDownRef = useRef(null);

  const handleDropDown = () => {
    setDown((n) => !n);
  };

  useGSAP(() => {
    if (isDown) {
      gsap.fromTo(
        dropDownRef.current,
        {
          y: -10,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        }
      );
      gsap.to(
        "#dropDown-icon",
        {
         rotate:-180,
        }
      );
    } else {
      gsap.to(dropDownRef.current, {
        y: -10,
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        ease: "power3.in",
      });
      gsap.to(
        "#dropDown-icon",
        {
         rotate:0,
        }
      );
    }
  }, [isDown]); 

  return (
    <div className="p-2 relative flex gap-4 items-center bg-white">
      <p>sort by:</p>
      <Button
        onClick={handleDropDown}
        className="relative flex gap-2 font-semibold"
      >
        Newest <i className="text-xl aspect-square" id="dropDown-icon">{dropDownIcon}</i>
      </Button>
      <ul
        ref={dropDownRef}
        className="absolute top-8 left-14 shadow-lg scale-0 shadow-black transition-all z-10 bg-white duration-300 ease-in-out"
      >
        <li className="border-solid border-black border-0 text-start p-3 hover:bg-blue-300">
          Popular
        </li>
        <li className="border-solid border-black border-0 text-start p-3 hover:bg-blue-300">
          Newest
        </li>
        <li className="border-solid border-black border-0 text-start p-3 hover:bg-blue-300">
          Alphabetical
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
