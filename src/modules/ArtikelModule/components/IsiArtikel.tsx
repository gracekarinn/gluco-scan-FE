import React from "react";
import { ISI_ARTIKEL } from "../constant";
import Image from "next/image";

const IsiArtikel = () => {
  return (
    <div className="mt-3 w-full h-[182px] border-2 border-neutral-50 rounded-xl">
      <div className="space-y-4">
        {ISI_ARTIKEL.map((artikel) => (
          <div
            key={artikel.id}
            className="w-full border border-gray-200 rounded-xl p-4"
          >
            <div className="flex justify-between mb-2">
              <div className="flex-grow pr-4 overflow-hidden">
                <h2 className="font-bold text-lg mb-2 line-clamp-2">
                  {artikel.title}
                </h2>
                <p className="text-sm text-gray-600">{artikel.time}</p>
              </div>
              <div className="flex-shrink-0 w-[100px] h-[90px] relative">
                <Image
                  src={artikel.img}
                  alt={artikel.title}
                  fill
                  sizes="100px"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
            <p className="text-sm w-[309px] line-clamp-2">{artikel.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IsiArtikel;
