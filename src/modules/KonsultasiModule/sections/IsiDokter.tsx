"use client";
import React from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Star, Clock, Banknote } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HARI_DOKTER } from "../constant";
import { JAM_DOKTER } from "../constant";
import { ChatBubbleLeftIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Link from "next/link";

export const IsiDokter = () => {
  const [selectedDate, setSelectedDate] = useState(HARI_DOKTER[2].tanggal);
  const [selectedTime, setSelectedTime] = useState(JAM_DOKTER[4].jam);

  return (
    <section className="flex flex-col pt-4 gap-y-4 px-4">
      <Link href="/konsultasi">
        <div className="flex gap-3">
          <ChevronLeft />
          <p className="font-bold">Deskripsi Dokter</p>
        </div>
      </Link>
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
      <div>
        <h3 className="font-semibold text-lg">Tentang Dokter</h3>
        <p className="text-sm text-[#101623] mt-2">
          dr. Maya Puspita Sari Sp.PD, AIFO merupakan alumnus Fakultas
          Kedokteran Universitas Sriwijaya pada 2015 dan 2023. Dokter Maya
          Puspita Sari Sp.PD,{" "}
          <span className="text-blue-500">Read More....</span>
        </p>
      </div>
      <div>
        <Tabs defaultValue="online" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="online">Daring</TabsTrigger>
            <TabsTrigger value="offline">Tatap Muka</TabsTrigger>
          </TabsList>
          <TabsContent value="online">
            <div className="p-4 w-full rounded-lg mx-auto">
              <div className="flex justify-between mb-4">
                {HARI_DOKTER.map((item) => (
                  <button
                    key={item.hari}
                    onClick={() => setSelectedDate(item.tanggal)}
                    className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                      selectedDate === item.tanggal
                        ? "bg-orange-100 border border-orange-500"
                        : "bg-white hover:bg-gray-200"
                    }`}
                  >
                    <span className="text-sm text-gray-600">{item.hari}</span>
                    <span className="font-bold">{item.tanggal}</span>
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {JAM_DOKTER.map((item) => (
                  <button
                    key={item.jam}
                    onClick={() => setSelectedTime(item.jam)}
                    className={`py-2 px-4 rounded-lg text-sm transition-colors ${
                      selectedTime === item.jam
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {item.jam}
                  </button>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="offline">
            <div className="p-4 w-full rounded-lg mx-auto">
              <div className="flex justify-between mb-4">
                {HARI_DOKTER.map((item) => (
                  <button
                    key={item.hari}
                    onClick={() => setSelectedDate(item.tanggal)}
                    className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                      selectedDate === item.tanggal
                        ? "bg-orange-100 border border-orange-500"
                        : "bg-white hover:bg-gray-200"
                    }`}
                  >
                    <span className="text-sm text-gray-600">{item.hari}</span>
                    <span className="font-bold">{item.tanggal}</span>
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {JAM_DOKTER.map((item) => (
                  <button
                    key={item.jam}
                    onClick={() => setSelectedTime(item.jam)}
                    className={`py-2 px-4 rounded-lg text-sm transition-colors ${
                      selectedTime === item.jam
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {item.jam}
                  </button>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex gap-2 w-full">
        <Button variant="secondary" className="p-2">
          <ChatBubbleLeftIcon width={30} height={30} />
        </Button>
        <Link href="/reservasi" className="mb-10 w-full">
          <Button className="w-full">Reservasi</Button>
        </Link>
      </div>
    </section>
  );
};
