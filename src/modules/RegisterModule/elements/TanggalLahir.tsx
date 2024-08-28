"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { tanggalLahirSchema, submitTanggalLahirData } from "../constant";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

export const TanggalLahir = ({
  onSubmit,
}: {
  onSubmit: (data: submitTanggalLahirData) => void;
}) => {
  const form = useForm<submitTanggalLahirData>({
    resolver: zodResolver(tanggalLahirSchema),
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
              src={"/stepper/1.png"}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
          <div className="mx-9">
            <h1 className="text-center font-bold text-grey-900 text-H3">
              Kapan kamu lahir?
            </h1>
            <p className="text-P6 tracking-wide font-normal text-center text-grey-900 mt-4">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum
            </p>
          </div>
          <FormField
            control={form.control}
            name="tanggal_lahir"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Dialog>
                      <DialogTrigger asChild>
                        <FormControl>
                          <Button
                            variant="tertiary"
                            className={cn(
                              "w-[200px] pl-3 text-left font-normal",
                              !field.value &&
                                "text-[#4D4D4D] text-P4 font-[300]",
                              "flex items-center gap-2"
                            )}
                          >
                            <CalendarIcon className="h-4 w-4 text-orange-500" />
                            {field?.value ? (
                              <span>{format(field?.value, "PPP")}</span>
                            ) : (
                              <span>dd/mm/yyyy</span>
                            )}
                          </Button>
                        </FormControl>
                      </DialogTrigger>
                      <DialogContent
                        hideClose
                        className="bg-transparent w-fit border-0 backdrop-blur-lg"
                      >
                        <Calendar
                          captionLayout="dropdown-buttons"
                          mode="single"
                          fromYear={1990}
                          toYear={2024}
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date >= new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </DialogContent>
                    </Dialog>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <Button type="submit" className="w-full">
          Continue
        </Button>
      </form>
    </Form>
  );
};
