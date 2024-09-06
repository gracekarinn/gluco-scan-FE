import React from "react";
import { ChevronLeft } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";
import { ISI_DOKTER } from "../constant";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Banknote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const CariDokter = () => {
  return (
    <section className="flex flex-col gap-y-4 mt-4">
      <div className="flex justify-between items-center">
        <Link href="/main">
          <div className="flex gap-3 items-center">
            <ChevronLeft />
            <p className="font-semibold text-[20px]">Konsultasi Dokter</p>
          </div>
        </Link>
        <Button variant="secondary" className="p-2">
          <MessageSquare className="text-orange-500" />
        </Button>
      </div>
      <div className="flex flex-row gap-2 justify-between w-full">
        <div className="flex-grow">
          <Input type="text" placeholder="Cari dokter" className="w-full" />
        </div>
        <Button variant="ghost" className="p-2">
          <AdjustmentsHorizontalIcon className="h-6 w-6" />
        </Button>
      </div>
      <Link href="/isi">
        <div className="space-y-4">
          {ISI_DOKTER.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden">
              <CardContent className="p-4 flex items-center space-x-4">
                <Image
                  src={doctor.foto}
                  alt={doctor.nama}
                  width={100}
                  height={146}
                  className="object-cover"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{doctor.nama}</h3>
                  <p className="text-sm text-gray-500">{doctor.spesialis}</p>
                  <div className="flex max-md:flex-col max-md:items-start items-center md:space-x-4 mt-2 text-sm gap-y-2">
                    <div className="flex items-center max-md:justify-start  bg-orange-50 p-1 rounded-lg">
                      <Star className="w-4 h-4 text-orange-500 mr-1" />
                      <span className="text-orange-500 text-[12px]">
                        {doctor.rating}
                      </span>
                    </div>
                    <div className="flex items-center max-md:justify-start  bg-orange-50 p-1 rounded-lg">
                      <Clock className="w-4 h-4 text-orange-500 mr-1" />
                      <span className="text-orange-500 text-[12px]">
                        {doctor.pengalaman}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-sm p-1 rounded-lg bg-neutral-50 max-w-[170px]">
                    <Banknote className="w-4 h-4 max-sm:w-10 text-orange-500 mr-1" />
                    <span className="text-neutral-500 text-[12px] max-lg:text-[11px] max-md:text-[9px]">
                      {doctor.harga}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Link>
    </section>
  );
};
