import React from "react";
import { FaHandPaper } from "react-icons/fa";
import Image from "next/image";
import memoji from "./img/4a230a1f7f6b0f0abaaaaae657c03872-sticker-removebg-preview.png";
import figma from "./img/Figma_s-new-icon-_-Figma-Blog-removebg-preview.png";
import Tailwind from "./img/Tailwind CSS.png";
import Affinity from "./img/pixelcut-export.png";
import react from "./img/react.new.png";
import Typescript from "./img/TypeScript-Logo-PNG-Logo-Vector-Brand-Downloads-_SVG_-EPS_-removebg-preview.png";
import Html from "./img/Html_free_icons_designed_by_Freepik-removebg-preview (1).png";
import CSS from "./img/css.png";
import GitHub from "./img/Download_GitHub_Logo__Git_Hub_Icon_On_White_Background-removebg-preview.png";
import "./Intro.css";
export const Intro = () => {
  return (
    <div className="w-full h-[500px] my-2 ">
      <div className="flex">
        <div className="bg-blue-300 w-[50%] h-[500px] text-xl flex flex-col justify-center p-10 ">
          <h1 className="mb-10 ml-[45%] w-[15%] rounded-full border-2 border-black pl-3">
            {" "}
            Hey there!{" "}
          </h1>
          <p className="text-5xl ml-10 text-center font-serif text-white">
            {" "}
            I am Emma 
          </p>
          <p className="text-3xl font-sans text-center text-black ml-10 pt-5">
            {" "}
            UI/UX Designer & Software Developer
          </p>
        </div>
        <div className="w-[50%] h-[500px] flex justify-center relative ">
          <Image
            src={memoji}
            alt="memoji"
            width={250}
            height={250}
            className="absolute left-[350px] top-[80px]" 
          />
          <div className="circle-wrapper">
            <div className="icon-wrapper">
              <div className="icon icon-2">
                <Image
                  src={figma}
                  alt="figma" 
                />
              </div>
              <div className="icon icon-3">
                <Image
                  src={Typescript}
                  alt="typescript" 
                />
              </div>
              <div className="icon icon-4">
                <Image
                  src={react}
                  alt="react" 
                />
              </div>
              <div className="icon icon-5">
                <Image
                  src={Affinity}
                  alt="affinity" 
                />
              </div>
              <div className="icon icon-6">
                <Image
                  src={Html}
                  alt="Html" 
                />
              </div>
              <div className="icon icon-7">
                <Image
                  src={CSS}
                  alt="CSS"  
                />
              </div>
              <div className="icon icon-8">
                <Image src={Tailwind} alt="tailwind"
                />
              </div>
              <div className="icon icon-9">
                <Image src={GitHub} alt="Github"  
                />
              </div>
            </div>  
            </div>
        </div>
      </div>
    </div>
  );
};
