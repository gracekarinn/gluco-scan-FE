import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const WelcomePageModule = () => {
  return (
    <div className="pt-7 flex flex-col items-center">
      <Image src="/logo-welcome.png" alt="logo" width={200} height={700} />
      <Image
        src="/darah-full.png"
        alt="darah"
        width={317}
        height={371}
        className="pt-[51px]"
      />
      <h1 className="pt-5 font-bold text-[32px]">Selamat Datang!</h1>
      <p className="text-[14px] text-center">
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum
      </p>
      <div className="flex flex-col gap-y-2 mt-5 mb-10 w-[327px]">
        <Link href="/login">
          <Button variant="primary" className="w-full">
            Log In
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="secondary" className="w-full">
            Create Account
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePageModule;
