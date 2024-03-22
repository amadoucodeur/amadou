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
import {
  TbBrandCss3,
  TbBrandDjango,
  TbBrandFirebase,
  TbBrandGit,
  TbBrandGithub,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandSupabase,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVercel,
} from "react-icons/tb";
import Home from "@/components/Home";
import Separator from "@/components/Separator";
import Expertises from "@/components/Expertises";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Pricing from "@/components/Princing";
import Nave from "@/components/Nave";
import Experiances from "@/components/Experiances";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-20">
      <Nave />
      <Home />
      <Separator />
      <Experiances/>
      <Separator />
      <Expertises />
      <Separator /> 
      <Services />
      <Separator />
      <ContactForm />
    </main>
  );
}
