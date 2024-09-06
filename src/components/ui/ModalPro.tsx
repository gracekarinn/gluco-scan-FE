"use client";
import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "./dialog";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import { useState } from "react";

export const ModalPro = ({ children }: { children: React.ReactNode }) => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="border border-[#EEF0F2] rounded-[8px] p-6 bg-[#f7f7f7] w-[300px] flex flex-col gap-2"
        hideClose
      >
        <div className="mx-auto size-[80px] relative">
          <Image
            src="/lock-fill.png"
            alt="food"
            className="object-contain"
            fill
          />
        </div>
        <h2 className="text-H4 font-bold text-center text-grey-900 whitespace-nowrap">
          Fitur Terkunci
        </h2>
        <p className="text-P5 text-[#737373] text-center">
          Upgrade akun Anda jadi GlucoScan Pro untuk membuka fitur ini
        </p>
        <div className="grid grid-cols-2 gap-1 mt-4">
          <Button variant={"secondary"} onClick={() => setOpenDialog(false)}>
            Kembali
          </Button>
          <Link href="/profile">
            <Button className="w-full">Daftar Sekarang</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};
