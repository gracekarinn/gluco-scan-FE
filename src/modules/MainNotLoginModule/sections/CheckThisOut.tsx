import React from "react";
import { PlayCircleIcon } from "@heroicons/react/16/solid";

const CheckThisOut = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3">
      <h1 className="font-semibold justify-center">Check this out!</h1>
      <div className="w-[303px] h-[153px] bg-orange-50 flex flex-col rounded-2xl">
        <PlayCircleIcon
          width={60}
          height={60}
          className="mx-auto my-auto text-orange-500"
        />
      </div>
    </div>
  );
};

export default CheckThisOut;
