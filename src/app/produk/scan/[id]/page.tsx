import React from "react";
import { DetailProductModule } from "@/modules/DetailProductModule";
import { NextPage } from "next";

const page: NextPage<{ params: { id: string } }> = ({ params }) => {
  return <DetailProductModule id={params.id} />;
};

export default page;
