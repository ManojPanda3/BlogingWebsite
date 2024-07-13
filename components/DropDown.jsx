"use client"
import React, { useRef, useState } from "react";
import Button from "./Buttons";

const DropDown = () => {
  const [isDown,setDown]=useState(true);
  const dropDownRef=useRef(null);
  const handleDropDown=()=>{
    dropDownRef.current.style.transform=isDown?"scale(1)":"scale(0)";
    setDown(n=>!n);
  }

  return (
    <div className="px-2">
      <p>sort by:</p>
      <Button onClick={handleDropDown}>Newest</Button>
      <ul id="sortby-list" ref={dropDownRef} className={"shadow-lg scale-0 shadow-black"}>
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
