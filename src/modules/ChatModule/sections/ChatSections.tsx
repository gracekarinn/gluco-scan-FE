import { ChevronLeft } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ChatSections = () => {
  return (
    <section className="flex flex-col gap-y-4 mt-4">
      <Link href="/main">
        <div className="flex gap-3 gap-y-4">
          <ChevronLeft />
          <p className="font-medium text-M3">Message</p>
        </div>
      </Link>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 flex items-start space-x-4">
          <Image
            src="/dokter/dokter-1.png"
            alt="dokter"
            width={60}
            height={88}
            className="rounded-full"
          />
          <div className="flex-1">
            <h2 className="text-M# font-bold text-gray-800">
              Dr. Maya Puspita Sari
            </h2>
            <p className="text-[12px] text-gray-500 mt-1 line-clamp-2">
              Saya sendiri berumur 21 tahun dan terakhir kali saya mengecek
              gula....
            </p>
          </div>
          <span className="text-sm text-gray-500">3hr</span>
        </div>
      </div>
    </section>
  );
};

export default ChatSections;
