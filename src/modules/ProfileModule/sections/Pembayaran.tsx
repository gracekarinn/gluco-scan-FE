"use client";
import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { pembayaran } from "../constant";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { getCookies } from "cookies-next";

export const Pembayaran = () => {
  const [selected, setSelected] = useState<number>(0);
  const [openDialog, setOpenDialog] = useState(false);

  const onBayar = async () => {
    const response = await fetch("/api/users/update/membership", {
      headers: {
        Authorization: `Bearer ${getCookies().accessToken}`,
      },
    });

    if (response.ok) {
      return setOpenDialog(true);
    }

    return console.log("Error");
  };
  return (
    <section>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent
          className="border border-[#EEF0F2] rounded-[8px] p-6 bg-[#f7f7f7] w-[300px] flex flex-col gap-2"
          hideClose
        >
          <div className="mx-auto size-[80px] relative">
            <Image
              src="/check-circle.png"
              alt="check"
              className="object-contain"
              fill
            />
          </div>
          <h2 className="text-H4 font-bold text-center text-grey-900 whitespace-nowrap">
            Pembayaran Berhasil
          </h2>
          <p className="text-P5 text-[#737373] text-center">
            Anda sudah dapat menikmati fitur GlucoScan Pro!
          </p>
          <div className="mt-4">
            <Button onClick={() => window.location.reload()} className="w-full">
              Ya, keluar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex gap-2 items-center">
        <ChevronLeft size={24} />
        <h1 className="text-M2 font-medium text-[#101623]">Pembayaran</h1>
      </div>
      <h2 className="mt-5 mb-3 text-M3 font-medium">
        Pilih metode pembayaran {"(E-wallet)"}
      </h2>
      <div className="flex flex-col gap-3 mb-4">
        {pembayaran.map((item, index) => (
          <div
            key={index}
            className="flex flex-row flex-nowrap justify-between gap-4 items-center rounded-[8px] bg-white py-4 pl-4 shadow-md"
          >
            <div className="flex gap-4 items-center">
              <div className="relative size-9">
                <Image
                  alt={item.title}
                  src={item.image}
                  fill
                  sizes="none"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-M3 font-medium">{item.title}</h2>
                <h3 className="text-P5 text-[#333333]/50">
                  {item.description}
                </h3>
              </div>
            </div>
            <div
              onClick={() => setSelected(index)}
              className={cn(
                "w-5 h-5 bg-white border cursor-pointer border-[#333333]/50 rounded-full mr-4",
                selected === index &&
                  "bg-[#0760A5]  border-white border-2 ring-2 ring-[#0760A5]"
              )}
            />
          </div>
        ))}
      </div>
      <h1 className="text-M3 font-bold mb-2 text-[#333333]">
        Rincian Pembayaran
      </h1>
      <div className="flex justify-between">
        <p className="text-P4 text-[#333333]">
          GlucoScan Pro Monthly <br />
          Subscription
        </p>
        <p className="text-M3 font-medium">Rp60.000,00</p>
      </div>
      <div className="bg-white shadow-md absolute bottom-0 lg:translate-y-[80%] max-lg:translate-y-[60%] -translate-x-4 py-4 px-[10px] min-[320px]:w-[300px] min-[390px]:w-[375px] lg:w-[750px]">
        <div className="flex justify-between">
          <p className="text-P5 text-[#333333]/75">Total pembayaran:</p>
          <p className="text-M3 font-medium">Rp60.000,00</p>
        </div>
        <Button onClick={() => onBayar()} className="w-full mt-[10px]">
          Bayar Sekarang
        </Button>
      </div>
    </section>
  );
};
