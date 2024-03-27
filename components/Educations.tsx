import React from "react";
import { PiCertificateBold, PiCertificateFill, PiEarDuotone } from "react-icons/pi";

export default function Educations() {
  return (
    <div className="flex flex-col">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:text-left gap-4">
        <div className="max-w-[400px] m-4 md:col-span-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Educations <br /> & Certifications
          </h2>
          <p>
            Here are some of the schools and certifications I have attended.
          </p>
        </div>
        <EducationCard
          date="2023"
          title="SImplon Côte d’Ivoire"
          text="Cloud AWS / DevOps"
        />
        <EducationCard date="2021-2022" title="Coursera" text="React.js" />
        <EducationCard date="2020-2021" title="Udemy" text="React Native" />
        <EducationCard date="2019" title="OpenClassroom" text="OpenClassroom" />
        <EducationCard date="18 February, 2020" title="Solo Learn" text="CSS" />
        <EducationCard
          date="21 May, 2020"
          title="Solo Learn"
          text="Python Core"
        />
        <EducationCard date="21 May, 2020" title="Solo Learn" text="SQL" />
        <EducationCard
          date="16 August, 2022, 2020"
          title="Solo Learn"
          text="JavaScript"
        />
        <EducationCard
          date="01 February, 2020"
          title="Solo Learn"
          text="HTML"
        />
        <EducationCard
          date="11 January, 2024"
          title="Solo Learn"
          text="Kotlin"
        />
      </div>
    </div>
  );
}

function EducationCard({
  date,
  title,
  text,
}: {
  date: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 flex-row flex-wrap items-end border-red-400 border-b-2 rounded-md">
      <PiCertificateFill size={32} className="bg-[#06152c] text-white rounded-full p-1" />
      <div className="flex flex-col">
        <p>{date}</p>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-gray-100">{text}</p>
      </div>
    </div>
  );
}
