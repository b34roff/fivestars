"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 justify-between hidden w-full md:flex ${
          scroll ? "p-2" : ""
        }`}>
        <motion.ul
          initial={{ width: "100%" }}
          animate={{
            width: scroll ? "fit-content" : "100%",
          }}
          transition={{ duration: 0.2 }}
          className={`flex justify-center items-center gap-2 mx-auto ${
            scroll
              ? "bg-orange-600 bg-opacity-70 backdrop-blur-md w-fit rounded-xl px-1 py-2"
              : "w-full bg-orange-500 px-2 py-4"
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
        </motion.ul>
      </nav>

      <nav
        className={`fixed top-0 left-0 z-50 flex flex-col justify-between w-full gap-2 md:hidden ${
          navOpen ? "p-2" : "px-2 py-0"
        }`}>
        <div
          className={`${
            navOpen
              ? "hidden"
              : "flex items-center justify-between w-full p-2 bg-orange-600 bg-opacity-80 backdrop-blur-md shadow-xl h-fit rounded-b-xl"
          }`}>
          <h2 className="text-xl font-bold text-white">FiveStars</h2>
          <svg
            onClick={() => {
              setNavOpen(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="w-6 h-6 fill-white">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <motion.ul
          initial={{ y: "-200%" }}
          animate={{
            y: navOpen ? "0" : "-200%",
          }}
          transition={{ duration: 0.2 }}
          className={`flex flex-col items-center justify-center w-full gap-2 px-1 py-2 bg-orange-600 bg-opacity-80 backdrop-blur-md shadow-xl md:gap-1 md:flex-col md:w-fit rounded-xl ${
            navOpen ? "flex" : "hidden"
          }`}>
          <li className="flex items-center justify-center">
            <Link
              href="/"
              onClick={() => {
                setNavOpen(false);
              }}
              className={`px-2 py-1 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/" ? "text-orange-600 bg-white" : "text-white"
              }`}>
              Acceuil
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href="/jouer"
              onClick={() => {
                setNavOpen(false);
              }}
              className={`px-2 py-1 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/jouer" ? "text-orange-600 bg-white" : "text-white"
              }`}>
              Jouer
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href="/reglement"
              onClick={() => {
                setNavOpen(false);
              }}
              className={`px-2 py-1 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/reglement" ? "text-orange-600 bg-white" : "text-white"
              }`}>
              Règlement
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href="/support"
              onClick={() => {
                setNavOpen(false);
              }}
              className={`px-2 py-1 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/support" ? "text-orange-600 bg-white" : "text-white"
              }`}>
              Support
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href="https://top-serveurs.net/gta/type/fivem"
              onClick={() => {
                setNavOpen(false);
              }}
              className={`px-2 py-1 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
                path == "/topserveur"
                  ? "text-orange-600 bg-white"
                  : "text-white"
              }`}>
              TopServeur
            </Link>
          </li>
        </motion.ul>
        <div
          onClick={() => {
            setNavOpen(false);
          }}
          className={`bg-orange-600 bg-opacity-80 backdrop-blur-md p-2 text-2xl rounded-xl items-center justify-center fill-white ${
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
