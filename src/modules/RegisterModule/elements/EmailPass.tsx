"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputForm from "@/components/ui/inputform";
import React, { useState } from "react";
import { registerSchema, submitRegisterData } from "../constant";
import { User, Lock, AtSign, Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export const EmailPass = ({
  onSubmit,
}: {
  onSubmit: (data: submitRegisterData) => void;
}) => {
  const [checked, setChecked] = useState<boolean>(false);

  const form = useForm<submitRegisterData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-8 flex flex-col my-8"
      >
        <h1 className="text-center font-bold text-grey-900 text-H3">
          Account Detail
        </h1>
        <div className="flex flex-col gap-3">
          <InputForm
            form={form}
            label="Nama Lengkap"
            name="fullName"
            placeholder="Ex : John Doe"
            icon={<User />}
          />
          <InputForm
            form={form}
            label="Username"
            name="username"
            placeholder="Username"
            icon={<AtSign />}
          />
          <InputForm
            form={form}
            label="Email"
            name="email"
            placeholder="Email"
            icon={<Mail />}
          />
          <InputForm
            form={form}
            label="Password"
            name="password"
            placeholder="Password"
            type="password"
            icon={<Lock />}
          />
          <Checkbox
            active={false}
            onCheckedChange={() => setChecked((pre) => !pre)}
            checked={checked}
          >
            I agree to the GlucoScan{" "}
            <span className="text-orange-500">Terms of Service</span> and{" "}
            <span className="text-orange-500">Privacy Policy</span>
          </Checkbox>
        </div>
        <Button type="submit" disabled={!checked} className="w-full">
          Continue
        </Button>
      </form>
    </Form>
  );
};
