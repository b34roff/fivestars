"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 justify-between hidden w-full p-2 md:flex">
        <ul className="flex items-center gap-2 px-1 py-2 bg-orange-500 shadow-xl w-fit rounded-xl">
          <li>
            <Link
              href="/"
              className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/" ? "text-orange-600 bg-white" : "text-white"
              }`}>
              Acceuil
            </Link>
          </li>
          <li>
            <Link
              href="/jouer"
              className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/jouer" ? "text-orange-600 bg-white" : "text-white"
              }`}>
              Jouer
            </Link>
          </li>
          <li>
            <Link
              href="/reglement"
              className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/reglement" ? "text-orange-600 bg-white" : "text-white"
              }`}>
              Règlement
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/support" ? "text-orange-600 bg-white" : "text-white"
              }`}>
              Support
            </Link>
          </li>
          <li>
            <Link
              href="https://top-serveurs.net/gta/type/fivem"
              className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/topserveur"
                  ? "text-orange-600 bg-white"
                  : "text-white"
              }`}>
              TopServeur
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="fixed top-0 left-0 z-50 flex flex-col justify-between w-full gap-2 p-2 md:hidden">
        <div
          className={`${navOpen ? "hidden" : ""}`}
          onClick={() => {
            setNavOpen(true);
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="p-1 px-2 m-1 text-3xl bg-orange-600 rounded-lg shadow-lg fill-white">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <ul
          className={`flex flex-col items-center w-full gap-2 px-1 py-2 bg-orange-500 shadow-xl md:gap-1 md:flex-col md:w-fit rounded-xl ${
            navOpen ? "flex" : "hidden"
          }`}>
          <li>
            <Link
              href="/"
              className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/" ? "text-orange-600 bg-white" : "text-white"
              }`}>
              Acceuil
            </Link>
          </li>
          <li>
            <Link
              href="/jouer"
              className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/jouer" ? "text-orange-600 bg-white" : "text-white"
              }`}>
              Jouer
            </Link>
          </li>
          <li>
            <Link
              href="/reglement"
              className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/reglement" ? "text-orange-600 bg-white" : "text-white"
              }`}>
              Règlement
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/support" ? "text-orange-600 bg-white" : "text-white"
              }`}>
              Support
            </Link>
          </li>
          <li>
            <Link
              href="https://top-serveurs.net/gta/type/fivem"
              className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/topserveur"
                  ? "text-orange-600 bg-white"
                  : "text-white"
              }`}>
              TopServeur
            </Link>
          </li>
        </ul>
        <div
          onClick={() => {
            setNavOpen(false);
          }}
          className={`bg-orange-500 p-2 text-2xl rounded-xl items-center justify-center fill-white ${
            navOpen ? "flex" : "hidden"
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
      </nav>
    </>
  );
}
