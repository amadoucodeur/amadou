import Image from "next/image";
import React from "react";

export default function Experiances() {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:text-left gap-4">
      <div className="max-w-[280px]">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Experiances
        </h2>
        <p className="text-lg">
          Here are some of the projects I have worked on.
        </p>
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="w-[280px] bg-[#ffffff16] hover:bg-[#ffffff1d]">
      <Image
        src="/project1.png"
        width={300}
        height={300}
        alt="Illustration"
        className="w-full border-red-500 border-b-4"
      />
      <div className="gap-4 p-2">
        <h3 className="font-bold">Title</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          molestiae cumque quidem quos consequatur illo soluta animi saepe hic
          nisi minima eius quis quaerat, repellat quod. Nemo facilis id impedit?
        </p>
      </div>
    </div>
  );
}
