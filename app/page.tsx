/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiGithubLogoFill } from "react-icons/pi";
import {
  Anton,
  Orbitron,
  Quicksand,
  Maven_Pro,
  Archivo_Black,
} from "next/font/google";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";
import { TbBrandNextjs } from "react-icons/tb";

const anton = Anton({ subsets: ["latin"], weight: "400" });
const orbitron = Orbitron({ subsets: ["latin"], weight: "500" });
const archivo_Black = Archivo_Black({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-wrap items-center justify-center gap-6 min-h-screen">
        <div className="p-0 bg-white rounded-full coeur">
          <Image
            alt="/profile.png"
            className="h-[5%] w-auto"
            src="/profile.png"
            width={300}
            height={300}
          />
        </div>

        <div className="flex flex-col justify-start gap-6">
          <h1 className="text-xl">
            Hello, Je suis{" "}
            <span
              className={clsx(
                archivo_Black.className,
                "font-bold text-6xl md:text-8xl block text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-white to-red-500 py-4"
              )}
            >
              Amadou Coulibaly
            </span>{" "}
            <span className={orbitron.className}>
              Développeur Full Stack Web / Mobile
            </span>
          </h1>

          <p className="max-w-[400px]">
            Je suis Amadou Coulibaly, développeur web fullstack et mobile
            passionné par la technologie, toujours en quête d'apprentissage et
            d'amélioration.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="">
              Blog
            </Button>
            <Button variant="outline" className="">
              Utils IA
            </Button>
            <Button className="">TÉLÉCHARGER CV</Button>
          </div>
          <div className="flex gap-2">
            <Link
              href={"#"}
              className="p-4 rounded-full bg-[#06152c] text-white hover:bg-white hover:text-black  transition-colors ease-in-out duration-300"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={"#"}
              className="p-4 rounded-full bg-[#06152c] text-white hover:bg-white hover:text-black  transition-colors ease-in-out duration-300"
            >
              <FaFacebookF />
            </Link>

            <Link
              href={"#"}
              className="p-4 rounded-full bg-[#06152c] text-white hover:bg-white hover:text-black  transition-colors ease-in-out duration-300"
            >
              <PiGithubLogoFill />
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 ">
            <p className="flex items-center gap-2 pr-4 rounded-full border border-solid border-white h-10">
              <BsTelephoneFill
                size={50}
                className="p-4 rounded-full bg-white text-black"
              />
              (+225) 0500026690
            </p>
            <p className="flex items-center gap-2 pr-4 rounded-full border border-solid border-white h-10">
              <MdEmail
                size={50}
                className="p-4 rounded-full bg-white text-black"
              />
              amadoucodeur@gmail.com
            </p>
          </div>
        </div>
        <p>---------------------------------</p>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-4">
        <div className="">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Expertises
          </h2>
          <p>Here are some of the skills I possess.</p>
        </div>

        <div className="container">
          <div className="box">
            <span className="title">Next.JS</span>
            <div>
              <strong>FrontEnd</strong>
              <p>BAckend</p>
              <span>VALID</span> <span>01/28</span>
              <TbBrandNextjs size={70} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">React.JS</span>
            <div>
              <strong>JOE WATSON SBF</strong>
              <p>0000 000 000 0000</p>
              <span>VALID</span> <span>01/28</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">JavaScript</span>
            <div>
              <strong>JOE WATSON SBF</strong>
              <p>0000 000 000 0000</p>
              <span>VALID</span> <span>01/28</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">Python</span>
            <div>
              <strong>JOE WATSON SBF</strong>
              <p>0000 000 000 0000</p>
              <span>VALID</span> <span>01/28</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">HTML CSS</span>
            <div>
              <strong>JOE WATSON SBF</strong>
              <p>0000 000 000 0000</p>
              <span>VALID</span> <span>01/28</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">GLASS EFFECT</span>
            <div>
              <strong>JOE WATSON SBF</strong>
              <p>0000 000 000 0000</p>
              <span>VALID</span> <span>01/28</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
