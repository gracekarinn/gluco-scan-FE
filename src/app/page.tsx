import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <main className="mt-[30vh] flex flex-col gap-5">
      <Input type="text" placeholder="Enter your name" />
      <Button disabled>Submit</Button>
      <Checkbox id="terms">Accept Terms and Conditions</Checkbox>
    </main>
  );
}
