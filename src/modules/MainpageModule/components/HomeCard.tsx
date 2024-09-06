import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const HomeCard = () => {
  return (
    <div className="bg-white border-2 overflow-hidden border-orange-400 rounded-xl h-[140px] relative">
      <div className="relative z-0">
        <Image
          width={197}
          height={151}
          src="/kiri-card.png"
          alt="Kiri"
          className="absolute pt-2 -translate-x-[20px]"
        />
        <Image
          width={16}
          height={16}
          src="/GlucoScanLogo.png"
          alt="Logo"
          className="absolute pt-4 left-4"
        />
        <Image
          width={197}
          height={151}
          src="/kanan-card.png"
          alt="Kanan"
          className="absolute right-0 translate-x-1/2"
        />
      </div>
      <div className="flex justify-center items-center pt-3 z-10 relative">
        <Image
          src="/darah.png"
          alt="Blood drop mascot"
          width={74}
          height={100}
        />
        <div className="flex flex-col ml-4 w-[144px]">
          <p className="text-[14px] mb-2">
            Jangan lupa untuk melakukan monitor asupan gula hari ini!
          </p>
          <Link href="/monitor">
            <Button
              variant="primary"
              className="flex items-center justify-center rounded-3xl bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600"
            >
              <PencilSquareIcon className="w-8 h-8 mr-2" />
              <span className="text-xs">Kontrol Harian</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
