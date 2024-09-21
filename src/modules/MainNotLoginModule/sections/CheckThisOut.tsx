import React from "react";
import { PlayCircleIcon } from "@heroicons/react/16/solid";

const CheckThisOut = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3">
      <h1 className="font-semibold justify-center">Check this out!</h1>
      <div className="w-full h-[350px] bg-orange-50 flex flex-col rounded-2xl">
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/SiNI2XZqAe8"
        ></iframe>
      </div>
    </div>
  );
};

export default CheckThisOut;
