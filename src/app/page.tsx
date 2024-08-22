import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mt-[30vh] flex flex-col gap-5">
      <Input type="text" placeholder="Enter your name" />
      <Button disabled>Submit</Button>
    </main>
  );
}
