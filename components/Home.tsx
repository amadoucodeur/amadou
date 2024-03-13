/* eslint-disable react/no-unescaped-entities */

import clsx from 'clsx'
import { Anton, Archivo_Black, Orbitron } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { PiGithubLogoFill } from 'react-icons/pi';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const anton = Anton({ subsets: ["latin"], weight: "400" });
const orbitron = Orbitron({ subsets: ["latin"], weight: "500" });
const archivo_Black = Archivo_Black({ subsets: ["latin"], weight: "400" });


export default function Home() {
  return (
    <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_2fr] gap-10">
        <div className="p-0 w-full h-auto coeur flex justify-center items-center">
          <Image
            alt="/profile.png"
            className="w-full max-w-[70%] lg:max-w-[100%] lg:min-w-[300px] h-auto rounded-full bg-white"
            src="/profile.png"
            width={300}
            height={300}
          />
        </div>

        <div className="flex h-min flex-col justify-start gap-6 mb-10">
          <h1 className="text-xl">
            Hello, Je suis{" "}
            <span
              className={clsx(
                archivo_Black.className,
                "font-bold text-6xl md:text-7xl lg:text-8xl block text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-white to-red-500 py-4"
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
            <Button variant="outline" className="hover:bg-[#06152c] hover:text-white  transition-colors ease-in-out duration-300">
              Blog
            </Button>
            <Button variant="outline" className="hover:bg-[#06152c] hover:text-white  transition-colors ease-in-out duration-300">
              Utils IA
            </Button>
            <Button className="hover:bg-white hover:text-black  transition-colors ease-in-out duration-300">TÉLÉCHARGER CV</Button>
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
                className="p-4 rounded-full bg-white text-black hover:bg-[#06152c] hover:text-white  transition-colors ease-in-out duration-300"
              />
              (+225) 0500026690
            </p>
            <p className="flex items-center gap-2 pr-4 rounded-full border border-solid border-white h-10">
              <MdEmail
                size={50}
                className="p-4 rounded-full bg-white text-black hover:bg-[#06152c] hover:text-white  transition-colors ease-in-out duration-300"
              />
              amadoucodeur@gmail.com
            </p>
          </div>
        </div>

        <p className="col-span-1 lg:col-span-2 text-center my-20">-----------------------------------------------------------------</p>
    </div>
  )
}
