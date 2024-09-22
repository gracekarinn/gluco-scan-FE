"use client";
import React, { useState } from "react";
import {
  ProductDetailProps,
  sajianSchema,
  submitSajianData,
} from "../interface";
import Image from "next/image";
import { Zap, EggFried, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import useUserData from "@/components/hooks/userData";
import { Skeleton } from "@/components/ui/skeleton";
import { ModalPro } from "@/components/ui/ModalPro";
import { Takaran } from "../elements/Takaran";
import { Rekomendasi } from "../elements/Rekomendasi";
import { getCookies } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import InputForm from "@/components/ui/inputform";

export const DetailProduct: React.FC<ProductDetailProps> = ({
  productId,
  namaProduk,
  servingSize,
  kadarGula,
  image,
  takaran,
  energyKcal,
  proteins,
  fats,
  carbohydrates,
}) => {
  const { userData, isLoading } = useUserData();
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [page, setPage] = useState(1);

  const form = useForm<submitSajianData>({
    resolver: zodResolver(sajianSchema),
  });

  if (isLoading) {
    return <Skeleton className="min-h-screen w-full" />;
  }

  if (!userData) {
    router.push("/welcome");
    return;
  }

  const onSubmit = async (data: submitSajianData) => {
    const gula = await fetch(
      "https://gluco-scan-be-production.up.railway.app/product/gula",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookies().accessToken}`,
        },
      }
    );

    if (gula.status === 200) {
      const gulaArr = await gula.json();
      const isMaxGula = gulaArr.at(-1) >= (userData?.batasGula ?? 9999);
      return isMaxGula ? setOpenDialog(true) : onSubmitDb(data);
    }
  };

  const onSubmitDb = async (data: submitSajianData) => {
    await fetch(
      "https://gluco-scan-be-production.up.railway.app/product/submit",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookies().accessToken}`,
        },
        method: "POST",
        body: JSON.stringify({
          productId,
          namaProduct: namaProduk,
          kadarGula: kadarGula * (data.sajian as unknown as number),
          image,
          takaran:
            (
              (servingSize.split(" ")[0] as unknown as number) *
              (data.sajian as unknown as number)
            ).toString() +
            " " +
            servingSize.split(" ")[1],
          userId: userData?.id,
        }),
      }
    ).then(() => {
      router.push("/monitor");
      toast.success("Berhasil menambahkan asupan");
    });
  };
  if (page === 1) {
    return (
      <section className="flex flex-col">
        <div className="flex items-center justify-start gap-4 my-4">
          <Link href="/produk/scan">
            <ChevronLeft size={24} className="cursor-pointer" />
          </Link>
          <h1 className="text-M2 font-medium lg:ml-[250px] ml-[67px] text-[#101623]">
            Scan Product
          </h1>
        </div>
        <div className="relative max-[340px]:w-[158px] w-[188px] mx-auto max-[340px]:h-[150px] h-[188px] mb-3">
          <Image
            alt={namaProduk}
            src={image}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
        <h1 className="font-medium text-[#101623] text-M3 text-center">{`${namaProduk} (${takaran})`}</h1>
        <h2 className="text-M3 text-[#101623] font-medium mt-5">
          Dalam satu sajian {`(${servingSize}):`}
        </h2>
        <div className="my-5 flex justify-between items-center">
          <p className="text-M3 text-[#101623] font-medium">Kandungan Gula</p>
          <div className="flex items-center">
            <div
              className={cn("p-2 px-3 rounded-l-[20px] border", {
                "bg-green-200 border-green-400": kadarGula < 10,
                "bg-yellow-200 border-yellow-400":
                  kadarGula >= 10 && kadarGula < 15,
                "bg-red-200 border-[#CB0707]": kadarGula >= 15,
              })}
            >
              <p className="text-M4 text-[#101623] font-medium">
                {kadarGula >= 15
                  ? "Berbahaya"
                  : kadarGula >= 10
                  ? "Berisiko"
                  : "Aman"}
              </p>
            </div>
            <p
              className={cn(
                "text-[12px] text-[#101623] font-bold border border-l-0 p-2 px-3 rounded-r-[20px]",
                {
                  "border-green-400": kadarGula < 10,
                  "border-yellow-400": kadarGula >= 10 && kadarGula < 15,
                  "border-[#CB0707]": kadarGula >= 15,
                }
              )}
            >
              {kadarGula}g
            </p>
          </div>
        </div>
        <h2 className="text-M3 text-[#101623] font-medium mb-2">
          Ringkasan Gizi
        </h2>
        <div className="grid-cols-4 grid gap-2 lg:mx-24 mb-5">
          <div className="border border-neutral-200 rounded-[4px]">
            <div className="py-1 rounded-t-[4px] bg-[#E3FBEC] flex flex-col justify-center items-center">
              <Zap size={28} className="text-neutral-950" />
              <p className="text-P4 text-[#101623] font-medium text-center">
                Energi <br />
                <span className="text-P6 font-normal text-neutral-300 text-center">
                  {"(kkal)"}
                </span>
              </p>
            </div>
            <hr className="border-neutral-200" />
            <p className="text-M2 text-[#101623] font-medium text-center p-2">
              {energyKcal}
            </p>
          </div>
          <div className="border border-neutral-200 rounded-[4px]">
            <div className="py-1 rounded-t-[4px] bg-[#FEFDE6] flex flex-col justify-center items-center">
              <EggFried size={28} className="text-neutral-950" />
              <p className="text-P4 text-[#101623] font-medium text-center">
                Protein <br />
                <span className="text-P6 font-normal text-neutral-300 text-center">
                  {"(g)"}
                </span>
              </p>
            </div>
            <hr className="border-neutral-200" />
            <p className="text-M2 text-[#101623] font-medium text-center p-2">
              {proteins}
            </p>
          </div>
          <div className="border border-neutral-200 rounded-[4px]">
            <div className="py-1 rounded-t-[4px] bg-[#FFF2E6] flex flex-col justify-center items-center">
              <Image width={28} height={28} src={"/cheese.svg"} alt="cheese" />
              <p className="text-P4 text-[#101623] font-medium text-center">
                Lemak <br />
                <span className="text-P6 font-normal text-neutral-300 text-center">
                  {"(g)"}
                </span>
              </p>
            </div>
            <hr className="border-neutral-200" />
            <p className="text-M2 text-[#101623] font-medium text-center p-2">
              {fats}
            </p>
          </div>
          <div className="border border-neutral-200 rounded-[4px]">
            <div className="py-1 rounded-t-[4px] bg-[#FEE6E6] flex flex-col justify-center items-center">
              <Image width={28} height={28} src={"/loaf.svg"} alt="loaf" />
              <p className="text-P4 text-[#101623] font-medium text-center">
                Karbo <br />
                <span className="text-P6 font-normal text-neutral-300 text-center">
                  {"(g)"}
                </span>
              </p>
            </div>
            <hr className="border-neutral-200" />
            <p className="text-M2 text-[#101623] font-medium text-center p-2">
              {carbohydrates}
            </p>
          </div>
        </div>
        <h4 className="text-M3 text-[#101623] font-medium mb-2">
          Batasan Takaran Konsumsi (per sajian)
        </h4>
        {userData?.isPro && (
          <Takaran
            isPro={userData?.isPro}
            servingSize={servingSize.split(" ")[0] as unknown as number}
            kadarGula={kadarGula}
          />
        )}
        {!userData?.isPro && (
          <ModalPro>
            <div>
              <Takaran
                isPro={userData?.isPro}
                servingSize={servingSize.split(" ")[0] as unknown as number}
                kadarGula={kadarGula}
              />
            </div>
          </ModalPro>
        )}
        <h5 className="text-M3 text-[#101623] font-medium mb-2">
          Rekomendasi Makanan yang Lebih Sehat
        </h5>
        {userData?.isPro && <Rekomendasi isPro={userData?.isPro} />}
        {!userData?.isPro && (
          <ModalPro>
            <div>
              <Rekomendasi isPro={userData?.isPro} />
            </div>
          </ModalPro>
        )}
        <div className="bg-white shadow-md lg:translate-y-[105%] max-lg:translate-y-[60%] -translate-x-4 py-4 px-[10px] min-[320px]:w-[300px] min-[390px]:w-[375px] lg:w-[750px]">
          <Button onClick={() => setPage(2)} className="w-full mt-[10px]">
            Tambah Asupan
          </Button>
        </div>
      </section>
    );
  }
  if (page === 2) {
    return (
      <section className="flex flex-col">
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent
            className="border border-[#EEF0F2] rounded-[8px] p-6 bg-[#f7f7f7] w-[300px] flex flex-col gap-2"
            hideClose
          >
            <div className="mx-auto size-[80px] relative">
              <Image
                src="/exclamation-triangle-fill.png"
                alt="food"
                className="object-contain"
                fill
              />
            </div>
            <h2 className="text-H5 font-bold text-center text-grey-900 whitespace-nowrap">
              Telah melewati batas harian
            </h2>
            <p className="text-P5 text-[#737373] text-center">
              Konsumsi gula harian Anda telah melebihi batas yang Anda tetapkan.
            </p>
            <div className="grid grid-cols-2 gap-1 mt-4">
              <Button
                variant={"secondary"}
                onClick={() => setOpenDialog(false)}
              >
                Kembali
              </Button>
              <Button
                onClick={() => onSubmitDb(form.getValues())}
                className="w-full"
              >
                Lanjutkan
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <div className="flex items-center justify-start gap-4 my-4">
          <ChevronLeft onClick={() => setPage(1)} size={24} className="cursor-pointer" />
          <h1 className="text-M2 font-medium lg:ml-[250px] ml-[67px] text-[#101623]">
            Tambah Asupan
          </h1>
        </div>
        <div className="relative max-[340px]:w-[158px] w-[188px] mx-auto max-[340px]:h-[150px] h-[188px] mb-3">
          <Image
            alt={namaProduk}
            src={image}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
        <h1 className="font-medium text-[#101623] text-M3 text-center">{`${namaProduk} (${takaran})`}</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 justify-between min-h-[55vh] my-5"
          >
            <InputForm
              label="Jumlah sajian yang dikonsumsi"
              placeholder="5"
              name="sajian"
              form={form}
            />
            <Button type="submit" className="w-full">
              Tetapkan
            </Button>
          </form>
        </Form>
      </section>
    );
  }
};
