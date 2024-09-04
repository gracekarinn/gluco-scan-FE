import React from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Star, Clock, Banknote } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HARI_DOKTER } from "../constant";
import { JAM_DOKTER } from "../constant";
import { ChatBubbleLeftIcon } from "@heroicons/react/16/solid";

export const IsiDokter = () => {
  return (
    <section className="flex flex-col pt-4 gap-y-4 px-4">
      <div className="flex gap-3">
        <ChevronLeft />
        <p className="font-bold">Deskripsi Dokter</p>
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
      <div>
        <h3 className="font-semibold text-lg">Tentang Dokter</h3>
        <p className="text-sm text-[#101623] mt-2">
          dr. Maya Puspita Sari Sp.PD, AIFO merupakan alumnus Fakultas
          Kedokteran Universitas Sriwijaya pada 2015 dan 2023. Dokter Maya
          Puspita Sari Sp.PD,....
        </p>
      </div>
      <div>
        <Tabs defaultValue="online" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="online">Daring</TabsTrigger>
            <TabsTrigger value="offline">Tatap Muka</TabsTrigger>
          </TabsList>
          <TabsContent value="online">
            <div className=""></div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" className="p-2">
          <ChatBubbleLeftIcon width={30} height={30} />
        </Button>
        <Button className="w-full">Reservasi</Button>
      </div>
    </section>
  );
};
