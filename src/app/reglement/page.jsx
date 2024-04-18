"use client";

import { BackArrow } from "@/components/Icons/BackArrow";
import { ForwardArrow } from "@/components/Icons/ForwardArrow";
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
import { useEffect, useState } from "react";

export default function Reglement() {
  const Category = [
    { id: "discord", label: "Discord", component: <Discord /> },
    { id: "definitionrp", label: "Définition RP", component: <Definitionrp /> },
    { id: "lexique", label: "Lexique", component: <Lexique /> },
    { id: "base", label: "Base", component: <Base /> },
    { id: "sapd", label: "SAPD", component: <Sapd /> },
    { id: "coma", label: "Coma", component: <Coma /> },
    { id: "mortrp", label: "Mort RP", component: <Mortrp /> },
    { id: "drogues", label: "Drogues", component: <Drogues /> },
    { id: "groupes", label: "Groupes", component: <Groupes /> },
    { id: "gunfight", label: "Gunfight", component: <Gunfight /> },
    { id: "braquages", label: "Braquages", component: <Braquages /> },
  ];

  const [selectedCategory, setSelectedCategory] = useState("discord");
  const selectedIndex = Category.findIndex(({ id }) => id === selectedCategory);
  const prevCategory = Category[selectedIndex - 1];
  const nextCategory = Category[selectedIndex + 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  return (
    <section className="flex flex-col items-center w-full gap-5">
      <div className="items-center justify-center hidden w-3/4 grid-cols-1 lg:grid">
        <div className="absolute top-[50%] left-0 flex flex-row-reverse items-center justify-center gap-2 p-2 bg-orange-100 bg-opacity-50 shadow-md h-fit backdrop-blur-md rounded-r-xl translate-y-[-50%]">
          <h2 className="text-lg font-bold text-vertical gradient-text">
            Catégories
          </h2>
          <ul className="flex flex-col justify-start w-full gap-1 px-2">
            {Category.map(({ id, label }) => (
              <CatElement
                key={id}
                id={id}
                label={label}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            ))}
          </ul>
        </div>

        <div className="w-full h-full p-2 pb-10 bg-orange-100 bg-opacity-50 shadow-md backdrop-blur-md rounded-xl">
          {Category.find(({ id }) => id === selectedCategory)?.component || (
            <></>
          )}
        </div>

        <div className="flex items-center justify-between my-4">
          <button
            disabled={!prevCategory}
            className={`flex items-center justify-center gap-2 px-6 py-4 font-semibold transition duration-300 ease-in-out bg-orange-100 bg-opacity-50 rounded-lg shadow-md hover:text-orange-600 backdrop-blur-md ${
              !prevCategory ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setSelectedCategory(prevCategory.id)}>
            <BackArrow />
            {prevCategory?.label}
          </button>
          <button
            disabled={!nextCategory}
            className={`flex items-center justify-center gap-2 px-6 py-4 font-semibold transition duration-300 ease-in-out bg-orange-100 bg-opacity-50 rounded-lg shadow-md hover:text-orange-600 backdrop-blur-md ${
              !nextCategory ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setSelectedCategory(nextCategory.id)}>
            {nextCategory?.label}
            <ForwardArrow />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between w-full gap-5 lg:hidden">
        {Category.map(({ id, component }) => (
          <div key={id}>{component}</div>
        ))}
      </div>
    </section>
  );
}

export const CatElement = ({
  id,
  label,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <li
      className={`px-2 py-1 font-semibold transition duration-300 ease-in-out rounded-full cursor-pointer text-md hover:text-white hover:bg-orange-400 ${
        selectedCategory == id ? "bg-orange-500 text-white" : ""
      }`}
      onClick={() => {
        setSelectedCategory(id);
      }}>
      {label}
    </li>
  );
};
