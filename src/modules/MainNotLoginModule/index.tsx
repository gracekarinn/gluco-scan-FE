import React from "react";
import MulaiSekarang from "./sections/MulaiSekarang";
import CheckThisOut from "./sections/CheckThisOut";
import FiturKami from "./sections/FiturKami";

const MainNotLoginModule = () => {
  return (
    <div className="flex flex-col gap-y-20">
      <MulaiSekarang />
      <CheckThisOut />
      <FiturKami />
    </div>
  );
};

export default MainNotLoginModule;
