import Image from "next/image";
import React from "react";
import { MapPinned } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white w-full flex justify-center">
      <div className="px-5 py-10 flex flex-col items-center min-[320px]:w-[300px] min-[390px]:w-[375px] lg:w-[750px]">
        <div className="flex flex-row gap-5 mb-5">
          <div className="relative w-[50px] h-[60px]">
            <Image
              alt="GlucoScan Logo"
              src={"/GlucoScanLogo.png"}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
          <div className="relative w-[60px] h-[60px]">
            <Image
              alt="Gemasik Logo"
              src={"/Gemastik.png"}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex gap-1 mb-4">
          <MapPinned size={24} />
          <p className="text-center text-M3 text-black font-medium">
            Depok, Indonesia
          </p>
        </div>
        <p className="text-center text-slate-900 text-P4 tracking-wide mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-P4 mb-1">
          Contact us {"("}Via Email{")"}
        </p>
        <p className="text-M3 font-medium text-orange-500 mb-6">
          glucoscan@gmail.com
        </p>
        <p className="text-M3 font-medium mb-3">{"©2024 GlucoScan"}</p>
        <div className="flex gap-4">
          <div className="relative w-[24px] h-[24px]">
            <Image
              alt="instagram Logo"
              src={"/instagram.png"}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
          <div className="relative w-[24px] h-[24px]">
            <Image
              alt="Twitter Logo"
              src={"/Twitter.png"}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
          <div className="relative w-[24px] h-[24px]">
            <Image
              alt="Linkedin Logo"
              src={"/Linkedin.png"}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
          <div className="relative w-[24px] h-[24px]">
            <Image
              alt="LINE Logo"
              src={"/LINE.png"}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
