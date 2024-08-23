import React from "react";
import Image from "next/image";
import { LoginForm } from "./sections/LoginForm";

export const LoginModule = () => {
  return (
    <main className="py-12 flex flex-col justify-center gap-[52px] items-center">
      <div className="relative w-[81px] h-[98px]">
        <Image
          alt="contoh"
          src={'/GlucoScanLogo.png'}
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
      <LoginForm />
    </main>
  );
};
