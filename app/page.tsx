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
import Home from "@/components/Home"


export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Home/>
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
            <span className="title">JS</span>
            <div>
              <strong>JAVASCRIPT</strong>
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
