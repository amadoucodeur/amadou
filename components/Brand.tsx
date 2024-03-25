import Image from "next/image";
import React from "react";

export default function Brand() {
  return <Image src="/logo.png" alt="logo" width={50} height={50} className="rounded-r-full w-[20px] md:w-[50px] fixed top-10 left-0 " />;
}
