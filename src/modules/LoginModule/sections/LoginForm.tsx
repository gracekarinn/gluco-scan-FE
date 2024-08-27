"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputForm from "@/components/ui/inputform";
import React from "react";
import { loginSchema, submitLoginData } from "../constant";
import { CircleUser, Lock } from "lucide-react";
import Link from "next/link";

export const LoginForm = () => {
  const form = useForm<submitLoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: submitLoginData) => {
    console.log(data);
  };

  return (
    <section className="w-full flex flex-col gap-8">
      <h1 className="text-H3 font-bold text-[#303030] text-center">Log In</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <InputForm
            icon={<CircleUser />}
            placeholder="Email"
            name="email"
            form={form}
          />
          <InputForm
            icon={<Lock />}
            placeholder="Password"
            name="password"
            type="password"
            form={form}
          />
          <h2 className="text-end font-medium text-sm text-neutral-200">
            Forget Password?
          </h2>
          <Button type="submit" className="w-full">
            Log In
          </Button>
          <h3 className="pt-1 text-center font-normal text-P6 text-neutral-200">
            Don&apos;t have an account?
          </h3>
          <Link href={"/register"} className="text-sm text-orange-500 text-center font-medium">Sign Up Here</Link>
        </form>
      </Form>
    </section>
  );
};
