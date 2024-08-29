"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
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
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-[85vh] my-8"
      >
        <div className="gap-8 flex flex-col items-center">
          <div className="relative w-full h-[12px]">
            <Image
              alt="1"
              src={"/stepper/2.png"}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
          <div className="mx-9">
            <h1 className="text-center font-bold text-grey-900 text-H3">
              Pilih Jenis Kelamin
            </h1>
            <p className="text-P6 tracking-wide font-normal text-center text-grey-900 mt-4">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum
            </p>
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <div className="flex flex-col w-full gap-4">
                        <Button
                          onClick={() =>
                            field.onChange({ target: { value: "Laki-laki" } })
                          }
                          variant="tertiary"
                          className="justify-start text-P4 h-[56px] px-6 py-4 rounded-[20px] border-0 shadow-xl text-black"
                        >
                          <Image
                            src="/laki.png"
                            alt="laki"
                            width={20}
                            height={21}
                            className="mr-6"
                          />
                          Laki-laki
                        </Button>
                        <Button
                          onClick={() =>
                            field.onChange({ target: { value: "Perempuan" } })
                          }
                          variant="tertiary"
                          className="justify-start text-P4 h-[56px] px-6 py-4 rounded-[20px] border-0 shadow-xl text-black"
                        >
                          <Image
                            src="/perempuan.png"
                            alt="perempuan"
                            width={14}
                            height={21}
                            className="mr-6"
                          />
                          Perempuan
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
        </div>
        <Button type="submit" className="w-full my-8">
          Continue
        </Button>
      </form>
    </Form>
  );
};
