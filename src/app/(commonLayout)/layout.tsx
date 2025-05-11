import Navbar from "@/components/shared/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="md:max-w-[90%] xl:max-w-[75%] mx-7 md:mx-auto mt-10 lg:mt-0">{children}</div>
    </div>
  );
};

export default CommonLayout;
