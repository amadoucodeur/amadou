import React from "react";
import style from "@/components/styles/nave.module.css";
import clsx from "clsx";
import { HiHome } from "react-icons/hi";
import { CiHome } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { TbUserFilled } from "react-icons/tb";
import { MdBusinessCenter } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaStar, FaTools } from "react-icons/fa";

export default function Nave() {
  return (
    <div className="fixed flex h-screen top-0 right-10 z-10 items-center">
      <div
        className={clsx(
          style.buttonContainer,
          "flex items-center justify-center bg-slate-900 p-2 rounded-full"
        )}
      >
        <div className={style.button}>
          <TbUserFilled size={30} />
          <p className="hidden hover:block text-white">Home</p>
        </div>
        <div className={style.button}>
          <FaStar size={30} />
          <p className="hidden hover:block text-white">Home</p>
        </div>
        <div className={style.button}>
          <IoMdSchool size={30} />
          <p className="hidden hover:block text-white">Home</p>
        </div>
        <div className={style.button}>
          <MdBusinessCenter size={30} />
          <p className="hidden hover:block text-white">Home</p>
        </div>
        <div className={style.button}>
          <FaTools size={30} />
          <p className="hidden hover:block text-white">Home</p>
        </div>
        <div className={style.button}>
          <BsTelephoneFill size={30} />
          <p className="hidden hover:block text-white">Home</p>
        </div>
      </div>
    </div>
  );
}
