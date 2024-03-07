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

const anton = Anton({ subsets: ["latin"], weight: "400" });
const orbitron = Orbitron({ subsets: ["latin"], weight: "500" });
const archivo_Black = Archivo_Black({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center gap-6 min-h-screen">
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
                "font-bold text-8xl block text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-white to-red-500 py-4"
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
          <div className="flex gap-2">
            <Button className="">
              TÉLÉCHARGER CV
            </Button>
            <Button variant="outline" className="">
              Blog
            </Button>
            <Button variant="outline" className="">
              Utils IA
            </Button>
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
          <div className="flex gap-2 ">
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
      </div>
    </main>
  );
}
