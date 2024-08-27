"use client";
import { Form } from "@/components/ui/form";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { jenisKelaminSchema, submitJenisKelaminData } from "../constant";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const JenisKelamin = ({
  onSubmit,
}: {
  onSubmit: (data: submitJenisKelaminData) => void;
}) => {
  const form = useForm<submitJenisKelaminData>({
    resolver: zodResolver(jenisKelaminSchema),
    defaultValues: {
      jenis_kelamin: "",
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center my-8"
      >
        <div className="relative w-full h-[12px]">
          <Image
            alt="1"
            src={"/stepper/2.png"}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-[24px] text-center font-bold">
            Pilih jenis kelamin
          </h1>
          <p className="text-[12px] text-center">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </div>
        <div className="flex flex-col gap-y-5 mt-8 w-[271px]">
          <Button
            onClick={() => form.setValue("jenis_kelamin", "Laki-laki")}
            variant="ghost"
            className="w-full"
          >
            <Image
              src="/laki.png"
              alt="laki"
              width={20}
              height={21}
              className="mx-3"
            />
            Laki-laki
          </Button>
          <Button
            onClick={() => form.setValue("jenis_kelamin", "Perempuan")}
            variant="ghost"
            className="w-full"
          >
            <Image
              src="/perempuan.png"
              alt="laki"
              width={20}
              height={21}
              className="mx-3"
            />
            Perempuan
          </Button>
        </div>
        <Button
          type="submit"
          disabled={!form.watch("jenis_kelamin")}
          className="w-full my-8"
        >
          Continue
        </Button>
      </form>
    </Form>
  );
};
