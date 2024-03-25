import React from "react";
import { PiEarDuotone } from "react-icons/pi";

export default function Educations() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Educations & Certifications
        </h2>
        <p>Here are some of the schools and certifications I have attended.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex gap-4 flex-row">
          <PiEarDuotone className="text-3xl bg-white text-[#06152c] rounded-full" />
          <div className="">
            <p>2015 - 2023</p>
            <p className="font-bold">University of Seychelles</p>
            <p className="text-sm text-gray-100">
              Bachelor Degree in Computer Science.{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-4 flex-row">
          <PiEarDuotone className="text-3xl bg-white text-[#06152c] rounded-full" />
          <div className="">
            <p>2015 - 2023</p>
            <p className="font-bold">University of Seychelles</p>
            <p className="text-sm text-gray-100">
              Bachelor Degree in Computer Science.{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-4 flex-row">
          <PiEarDuotone className="text-3xl bg-white text-[#06152c] rounded-full" />
          <div className="">
            <p>2015 - 2023</p>
            <p className="font-bold">University of Seychelles</p>
            <p className="text-sm text-gray-100">
              Bachelor Degree in Computer Science.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
