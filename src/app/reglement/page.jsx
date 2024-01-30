"use client";

import Base from "@/components/reglement/Base";
import Braquages from "@/components/reglement/Braquages";
import Coma from "@/components/reglement/Coma";
import Definitionrp from "@/components/reglement/Definitionrp";
import Discord from "@/components/reglement/Discord";
import Drogues from "@/components/reglement/Drogues";
import Groupes from "@/components/reglement/Groupes";
import Gunfight from "@/components/reglement/Gunfight";
import Lexique from "@/components/reglement/Lexique";
import Mortrp from "@/components/reglement/Mortrp";
import Sapd from "@/components/reglement/Sapd";
import { useState } from "react";

export default function Reglement() {
  const [selectedCategory, setSelectedCategory] = useState("discord");
  return (
    <section className="flex flex-col items-center w-full gap-5">
      <h2 className="text-4xl font-bold text-orange-600">Règlement</h2>
      <div className="w-1/3 h-1 m-2 bg-orange-600 rounded-full"></div>
      <div className="flex-col items-start justify-between hidden w-full gap-5 md:flex lg:flex-row">
        <aside className="sticky left-0 flex flex-col items-center justify-center w-1/4 gap-2 p-2 bg-orange-200 shadow-md top-20 h-fit rounded-xl">
          <h2 className="text-lg font-bold text-center">Sommaire</h2>
          <div className="w-1/2 h-1 bg-orange-600 rounded-full"></div>
          <ul className="flex flex-col w-full gap-1">
            <li
              className={`p-2 font-semibold transition duration-300 ease-in-out rounded-lg cursor-pointer text-md hover:bg-orange-600 hover:text-white ${
                selectedCategory == "discord"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-300"
              }`}
              onClick={() => {
                setSelectedCategory("discord");
              }}>
              Discord
            </li>
            <li
              className={`p-2 font-semibold transition duration-300 ease-in-out rounded-lg cursor-pointer text-md hover:bg-orange-600 hover:text-white ${
                selectedCategory == "definitionrp"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-300"
              }`}
              onClick={() => {
                setSelectedCategory("definitionrp");
              }}>
              Définition RP
            </li>
            <li
              className={`p-2 font-semibold transition duration-300 ease-in-out rounded-lg cursor-pointer text-md hover:bg-orange-600 hover:text-white ${
                selectedCategory == "lexique"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-300"
              }`}
              onClick={() => {
                setSelectedCategory("lexique");
              }}>
              Lexique du Roleplay
            </li>
            <li
              className={`p-2 font-semibold transition duration-300 ease-in-out rounded-lg cursor-pointer text-md hover:bg-orange-600 hover:text-white ${
                selectedCategory == "base"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-300"
              }`}
              onClick={() => {
                setSelectedCategory("base");
              }}>
              Règles de base
            </li>
            <li
              className={`p-2 font-semibold transition duration-300 ease-in-out rounded-lg cursor-pointer text-md hover:bg-orange-600 hover:text-white ${
                selectedCategory == "sapd"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-300"
              }`}
              onClick={() => {
                setSelectedCategory("sapd");
              }}>
              SAPD
            </li>
            <li
              className={`p-2 font-semibold transition duration-300 ease-in-out rounded-lg cursor-pointer text-md hover:bg-orange-600 hover:text-white ${
                selectedCategory == "coma"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-300"
              }`}
              onClick={() => {
                setSelectedCategory("coma");
              }}>
              Règles de COMA
            </li>
            <li
              className={`p-2 font-semibold transition duration-300 ease-in-out rounded-lg cursor-pointer text-md hover:bg-orange-600 hover:text-white ${
                selectedCategory == "mortrp"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-300"
              }`}
              onClick={() => {
                setSelectedCategory("mortrp");
              }}>
              Règles de MORT RP
            </li>
            <li
              className={`p-2 font-semibold transition duration-300 ease-in-out rounded-lg cursor-pointer text-md hover:bg-orange-600 hover:text-white ${
                selectedCategory == "drogues"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-300"
              }`}
              onClick={() => {
                setSelectedCategory("drogues");
              }}>
              Règles liées aux Drogues
            </li>
            <li
              className={`p-2 font-semibold transition duration-300 ease-in-out rounded-lg cursor-pointer text-md hover:bg-orange-600 hover:text-white ${
                selectedCategory == "groupes"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-300"
              }`}
              onClick={() => {
                setSelectedCategory("groupes");
              }}>
              Règles liées aux Groupes
            </li>
            <li
              className={`p-2 font-semibold transition duration-300 ease-in-out rounded-lg cursor-pointer text-md hover:bg-orange-600 hover:text-white ${
                selectedCategory == "gunfight"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-300"
              }`}
              onClick={() => {
                setSelectedCategory("gunfight");
              }}>
              Règles liées aux GUNFIGHT
            </li>
            <li
              className={`p-2 font-semibold transition duration-300 ease-in-out rounded-lg cursor-pointer text-md hover:bg-orange-600 hover:text-white ${
                selectedCategory == "braquages"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-300"
              }`}
              onClick={() => {
                setSelectedCategory("braquages");
              }}>
              Règles liées aux BRAQUAGES
            </li>
          </ul>
        </aside>
        <aside className="w-3/4 p-2 pb-10 bg-orange-200 shadow-md h-fit rounded-xl">
          {selectedCategory == "discord" ? <Discord /> : <></>}
          {selectedCategory == "definitionrp" ? <Definitionrp /> : <></>}
          {selectedCategory == "lexique" ? <Lexique /> : <></>}
          {selectedCategory == "base" ? <Base /> : <></>}
          {selectedCategory == "sapd" ? <Sapd /> : <></>}
          {selectedCategory == "coma" ? <Coma /> : <></>}
          {selectedCategory == "mortrp" ? <Mortrp /> : <></>}
          {selectedCategory == "drogues" ? <Drogues /> : <></>}
          {selectedCategory == "groupes" ? <Groupes /> : <></>}
          {selectedCategory == "gunfight" ? <Gunfight /> : <></>}
          {selectedCategory == "braquages" ? <Braquages /> : <></>}
        </aside>
      </div>

      <div className="flex flex-col items-start justify-between w-full gap-5 md:hidden lg:hidden">
        <Discord />
        <Definitionrp />
        <Lexique />
        <Base />
        <Sapd />
        <Coma />
        <Mortrp />
        <Drogues />
        <Groupes />
        <Gunfight />
        <Braquages />
      </div>
    </section>
  );
}
