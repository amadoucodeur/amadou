import Image from "next/image";
import React from "react";

export default function Experiances() {
  return (
    <div className="gap-10">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experiances</h2>
      <div className="w-full">
        <div className="w-[300px] bg-[#ffffff16] hover:bg-[#ffffff1d]">
          <Image
            src="/"
            width={300}
            height={300}
            alt="Illustration"
            className="w-full border-red-500 border-b-4"
          />
          <div className="gap-4 p-2">
            <h3 className="font-bold">Title</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati molestiae cumque quidem quos consequatur illo soluta
              animi saepe hic nisi minima eius quis quaerat, repellat quod. Nemo
              facilis id impedit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
