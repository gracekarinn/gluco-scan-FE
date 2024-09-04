import React from "react";
import { ChevronLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Star, Clock, Banknote } from "lucide-react";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { CalendarIcon } from "@heroicons/react/16/solid";

export const RincianJanji = () => {
  return (
    <section className="flex flex-col pt-4 gap-y-4 px-4">
      <div className="flex gap-3">
        <ChevronLeft />
        <p className="font-bold">Rincian Janji Temu</p>
      </div>
      <div>
        <Card className="overflow-hidden">
          <CardContent className="p-4 flex items-center space-x-4">
            <Image
              src="/dokter/dokter-1.png"
              alt="test"
              width={100}
              height={146}
              className="object-cover"
            />
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">Dr. Maya Puspita Sari</h3>
              <p className="text-sm text-gray-500">
                Dokter Spesialis Penyakit Dalam
              </p>
              <div className="flex max-md:flex-col max-md:items-start items-center md:space-x-4 mt-2 text-sm gap-y-2">
                <div className="flex items-center max-md:justify-start  bg-orange-50 p-1 rounded-lg">
                  <Star className="w-4 h-4 text-orange-500 mr-1" />
                  <span className="text-orange-500 text-[12px]">4.7</span>
                </div>
                <div className="flex items-center max-md:justify-start  bg-orange-50 p-1 rounded-lg">
                  <Clock className="w-4 h-4 text-orange-500 mr-1" />
                  <span className="text-orange-500 text-[12px]">8 tahun</span>
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm p-1 rounded-lg bg-neutral-50 max-w-[180px]">
                <Banknote className="w-4 h-4 max-sm:w-10 text-orange-500 mr-1" />
                <span className="text-neutral-500 text-[12px]">
                  Rp. 55.000 - Rp. 300.000
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col pb-4">
        <div className="flex items-center gap-2">
          Tanggal Temu <PencilSquareIcon width={16} height={16} />
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon width={16} height={16} className="text-orange-500" />{" "}
          Rabu, 23 Juni 2024 | 02.00 PM
        </div>
      </div>
      <div className="gap-y-4 border-y-2 border-b-[#E8F3F1] border-t-[#E8F3F1]">
        <div className="flex flex-col">
          <p className="mt-4">Detail Pembayaran</p>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
