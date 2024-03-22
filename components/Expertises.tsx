"use client";
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import {
  TbBrandCss3,
  TbBrandDjango,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";

export default function Expertises() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      id="expertises"
      className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:text-left gap-4"
    >
      <div className="">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Expertises
        </h2>
        <p>Here are some of the areas of expertise I possess.</p>
        <button onClick={() => setIsOpen(!isOpen)} className="bg-[#06152c] p-3 px-5 rounded-md mt-5 text-white hover:bg-white hover:text-black  transition-colors ease-in-out duration-300">
          Voire {isOpen ? "Moins" : "Plus"}
        </button>
      </div>

      <div className="container">
        <div className="box">
          <span className="title">Next.JS</span>
          <div>
            <strong>FRAMEWORK WEB</strong>
            {/* <p>Site Web / Web App / SaaS</p> */}
            <span>Productif, Universel</span>
            <TbBrandNextjs size={70} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <span className="title">React.JS</span>
          <div>
            <strong>UI COMPOSABLE</strong>
            <span>Adaptable, Performant</span>
            <TbBrandReact size={70} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <span className="title">Ract Native</span>
          <div>
            <strong>APPS MOBILES</strong>
            <span>Multi-plateforme, Réutilisable</span>
            <TbBrandReactNative size={70} />
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <div className="container">
            <div className="box">
              <span className="title small-title">JavaScript TypeScript</span>
              <div>
                <strong>LANGAGE WEB, TYPÉ</strong>
                <span>Interactif, Dynamique, Sécurité</span>
                <div className="flex">
                  <TbBrandJavascript size={70} />
                  <TbBrandTypescript size={70} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="box">
              <span className="title">Python</span>
              <div>
                <strong>LANGAGE POLYVALENT</strong>
                <span>Complet, Robuste</span>
                <TbBrandPython size={70} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="box">
              <span className="title">HTML/ CSS</span>
              <div>
                <strong>STRUCTURE & STYLE WEB</strong>
                <span>Fondamental, Structuré</span>
                <div className="flex">
                  <TbBrandHtml5 size={70} />
                  <TbBrandCss3 size={70} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="box">
              <span className="title">Tailwind CSS</span>
              <div>
                <strong>DESIGN CSS</strong>
                <span>Flexible, Expressif</span>
                <TbBrandTailwind size={70} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="box">
              <span className="title">Node.JS</span>
              <div>
                <strong>JAVASCRIPT SERVEUR</strong>
                <span>Rapide, Scala</span>
                <TbBrandNodejs size={70} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="box">
              <span className="title">Django</span>
              <div>
                <strong>FRAMEWORK PYTHON</strong>
                <span>Complet, Robuste</span>
                <TbBrandDjango size={70} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
