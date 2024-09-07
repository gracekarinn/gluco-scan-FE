import React from "react";
import Image from "next/image";
import { ProductCardProps } from "../interface";

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  gula,
  weight,
}) => {
  return (
    <div className="p-2 pr-5 flex justify-between items-center rounded-[16px] border border-orange-100">
      <div className="flex gap-4 items-center">
        <div className="aspect-square bg-white rounded-md min-w-[60px] shadow-lg relative">
          <Image src={image} alt="food" className="object-contain" fill />
        </div>
        <div>
          <h1 className="text-H5 font-bold text-[#101623]">{name}</h1>
          <p className="text-M4 text-[#ADADAD] font-medium">{weight}</p>
        </div>
      </div>
      <div className="lg:size-[60px] size-[50px] bg-orange-500 p-2 rounded-full justify-center flex items-center text-white-100 font-bold text-H6 lg:text-H5">
        <p className="text-center">{gula}</p>
      </div>
    </div>
  );
};
