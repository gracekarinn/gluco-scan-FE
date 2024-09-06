"use client";
import React, { useState } from "react";
import useUserData from "@/components/hooks/userData";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRight, UserRound, LockOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PilihPaketLangganan } from "./sections/PilihPaketLangganan";
import { Pembayaran } from "./sections/Pembayaran";

export const ProfileModule = () => {
  const { userData, isLoading } = useUserData();
  const [page, setPage] = useState(1);

  const dateToString = (date: Date) => {
    return new Date(date).toLocaleString();
  };

  if (isLoading) return <Skeleton className="w-full h-[160px]" />;

  return (
    <main className="mt-5">
      {page === 1 && (
        <div className="bg-orange-500 w-full rounded-[20px] px-5 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-M3">
              <span className="font-medium">{userData?.username}</span>
              <br />
              {userData?.email}
            </h1>
            <ChevronRight size={24} className="text-white" />
          </div>
          <hr className="border-white border-opacity-80 my-2" />
          {userData?.isPro ? (
            <div className="flex items-center">
              <div className="bg-white size-[40px] flex items-center justify-center rounded-full border-4 border-orange-400">
                <LockOpen size={20} className="text-orange-500 " />
              </div>
              <div className="flex flex-col ml-2 gap-1">
                <h2 className="text-white text-M3 font-semibold">
                  GlucoScan Pro
                </h2>
                <h3 className="text-white text-M3">
                  until {userData?.proUntil && dateToString(userData.proUntil)}
                </h3>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center">
                <div className="bg-white size-[40px] flex items-center justify-center rounded-full border-4 border-orange-400">
                  <UserRound size={20} className="text-orange-500 " />
                </div>
                <span className="text-white text-M3 ml-2 font-semibold">
                  Akun Reguler
                </span>
              </div>
              <Button
                variant={"secondary"}
                onClick={() => setPage((prev) => prev + 1)}
                className="mt-3 w-full"
              >
                Gabung dengan GlucoScan Pro
              </Button>
            </div>
          )}
        </div>
      )}
      {page === 2 && (
        <PilihPaketLangganan
          onClick={() => setPage((prev) => prev - 1)}
          onNext={() => setPage((prev) => prev + 1)}
        />
      )}
      {page === 3 && <Pembayaran onBack={() => setPage((prev) => prev - 1)} />}
    </main>
  );
};
