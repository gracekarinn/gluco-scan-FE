import React from "react";
import { Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { MENU_ITEMS } from "../constant";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomeCard from "../components/HomeCard";
import { ISI_ARTIKEL } from "@/modules/ArtikelModule/constant";

const HomeSection = () => {
  return (
    <section className="flex flex-col">
      <div className="flex justify-between pt-6 items-center">
        <h3 className="font-bold text-2xl">Home Page</h3>
        <Bell className="text-orange-500" />
      </div>
      <div className="mt-4 relative gap-3">
        <Input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 border rounded-md w-full"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500"
          size={20}
        />
      </div>
      <div className="flex justify-between items-start gap-3 pt-4">
        {MENU_ITEMS.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="flex flex-col items-center w-1/4 no-underline"
          >
            <Button
              variant="secondary"
              size="lg"
              className="w-fit aspect-square mb-2"
            >
              <item.icon className="w-[14px] h-[14px]" />
            </Button>
            <span className="text-xs text-center">{item.title}</span>
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <HomeCard />
      </div>
      <div className="pt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Rekomendasi Media</h2>
          <span className="text[#828282] text-sm">More</span>
        </div>
        <div className="overflow-x-auto">
          <div className="flex space-x-4 pb-4">
            {ISI_ARTIKEL.map((artikel) => (
              <div key={artikel.id} className="flex-none w-48">
                <img
                  src={artikel.img}
                  alt={artikel.title}
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="font-semibold text-sm line-clamp-2">
                  {artikel.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
