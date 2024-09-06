import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MulaiSekarang = () => {
  return (
    <section className="flex flex-row pt-7 items-center justify-center">
      <div className="flex flex-col gap-y-4 w-full">
        <h1 className="font-bold text-2xl max-md:text-lg">
          Kendalikan Gula, <br className="md:hidden" /> Kendalikan Hidup
        </h1>
        <p className="max-md:text-sm">
          Bersama
          <span className="bg-orange-200 text-white mx-1 rounded italic">
            GlucoScan,
          </span>
          menuju hidup yang lebih sehat dan terkendali
        </p>
        <Link href={"/welcome"}>
          <Button variant="primary" className="w-[189px]">
            Mulai Sekarang
          </Button>
        </Link>
      </div>
      <div>
        <Image src="/darah-keren.png" alt="darah" width={145} height={186} />
      </div>
    </section>
  );
};

export default MulaiSekarang;
