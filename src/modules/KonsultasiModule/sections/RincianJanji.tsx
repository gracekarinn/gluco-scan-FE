"use client";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star, Clock, Banknote } from "lucide-react";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { CalendarIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export const RincianJanji = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <section className="flex flex-col pt-4 gap-y-4 px-4">
      <Link href="/isi">
        <div className="flex gap-3">
          <ChevronLeft />
          <p className="font-bold">Rincian Janji Temu</p>
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
      <div className="flex flex-col pb-4">
        <div className="flex items-center gap-2">
          Tanggal Temu <PencilSquareIcon width={16} height={16} />
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon width={16} height={16} className="text-orange-500" />{" "}
          Rabu, 23 Juni 2024 | 02.00 PM
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Detail Pembayaran</h2>
        <div className="flex justify-between mb-1">
          <span>Konsultasi Daring</span>
          <span>Rp60.000,00</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Biaya Admin</span>
          <span>Rp8.000,00</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>Rp68.000,00</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
        <button className="w-full border-2 p-3 hover:bg-neutral-200 hover:border-neutral-500 rounded-lg text-left mb-2">
          OVO
        </button>
        <button className="w-full hover:bg-neutral-200 hover:border-neutral-500 border-2 p-3 rounded-lg text-left mb-2 flex items-center">
          <Image src="/logo-bca.png" width={58} height={18} alt="bca" />
        </button>
        <button className="w-full  border-2 p-3 text-gray-500 rounded-lg hover:bg-neutral-200 hover:border-neutral-500 flex items-center">
          <CreditCard className="mr-2 h-5 w-5" /> Other payment methods
        </button>
      </div>
      <div className="flex justify-between gap-3 items-center mb-10">
        <div>
          <p className="text-sm text-gray-600">Total</p>
          <p className="text-lg font-semibold">Rp68.000,00</p>
        </div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button className="max-w-[150px] w-full">Bayar</Button>
          </DialogTrigger>
          <DialogContent
            className="border border-[#EEF0F2] rounded-[8px] p-6 bg-[#f7f7f7] w-[300px] flex flex-col gap-2"
            hideClose
          >
            <div className="mx-auto size-[80px] relative">
              <Image
                src="/check-circle.png"
                alt="food"
                className="object-contain"
                fill
              />
            </div>
            <h2 className="text-H4 font-bold text-center text-grey-900 whitespace-nowrap">
              Pembayaran Berhasil
            </h2>
            <p className="text-P5 text-[#737373] text-center">
              Janji temu dengan telah dibuat
            </p>
            <div className="grid grid-cols-2 gap-1 mt-4">
              <Button
                variant={"secondary"}
                onClick={() => setOpenDialog(false)}
              >
                Kembali
              </Button>
              <Link href="/chat">
                <Button className="w-full">Chat Dokter</Button>
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
