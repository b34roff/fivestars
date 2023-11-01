"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="fixed top-0 left-0 z-50 flex justify-between w-full p-2">
      <ul className="flex items-center gap-1 px-1 py-2 bg-orange-500 shadow-xl w-fit rounded-xl">
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
            href="/boutique"
            className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
              path == "/boutique" ? "text-orange-600 bg-white" : "text-white"
            }`}>
            Boutique
          </Link>
        </li>
        <li>
          <Link
            href="https://top-serveurs.net/gta/type/fivem"
            className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-orange-600 hover:bg-white rounded-xl ${
              path == "/topserveur" ? "text-orange-600 bg-white" : "text-white"
            }`}>
            TopServeur
          </Link>
        </li>
      </ul>

      <ul className="flex items-center gap-1 px-1 py-2 bg-orange-500 shadow-xl w-fit rounded-xl">
        <li>
          <Link
            href="https://top-serveurs.net/gta/type/fivem"
            className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-white hover:bg-green-600 rounded-xl text-white`}>
            Je me connecte
          </Link>
        </li>
        <li>
          <Link
            href="https://top-serveurs.net/gta/type/fivem"
            className={`p-2 text-lg font-extrabold uppercase transition duration-300 ease-in-out hover:text-white hover:bg-red-600 rounded-xl text-white`}>
            Je me déconnecte
          </Link>
        </li>
      </ul>
    </nav>
  );
}
