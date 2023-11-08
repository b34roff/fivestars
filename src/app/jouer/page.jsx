import Image from "next/image";

import FivemBg from "@/../public/FiveM-Symbole.jpg";
import Link from "next/link";

export default function Jouer() {
  return (
    <section>
      <div className="relative hidden overflow-hidden rounded-lg lg:flex">
        <Image
          src={FivemBg}
          width={1920}
          height={1080}
          alt="Fivem background"
          className="w-full h-full scale-105 blur-xl"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <Link
            href="fivem://connect/194.62.1.15:30120"
            className="flex items-center gap-2 px-5 py-2 text-xl font-extrabold text-white uppercase transition duration-300 ease-in-out bg-orange-500 shadow-2xl rounded-xl fill-white hover:scale-105 hover:bg-white hover:text-orange-600 hover:fill-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              className="text-2xl">
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
            Jouer sur FiveStars !
          </Link>
        </div>
      </div>

      {/* <div className="flex flex-col lg:hidden">
        <h2>L'installation de FiveM</h2>
        <p>
          L'installation de FiveM est assez simple. En général, il suffit de
          télécharger FiveM, puis d'exécuter simplement le fichier téléchargé.
          Pour ceux qui souhaitent plus de détails, lisez ci-dessous.
        </p>
        <h2>Installation</h2>
        <p>
          Rencontrez-vous des problèmes ? Assurez-vous que votre système
          respecte les exigences minimales et consultez le manuel des problèmes
          liés au client.
        </p>
        <p>
          Désactivez tout antivirus avant de télécharger FiveM. Certains
          fournisseurs d'antivirus tels qu'Avast, AVG et d'autres sont connus
          pour bloquer les procédures de FiveM, donc assurez-vous que votre
          antivirus est complètement désactivé. Une fois que FiveM est installé,
          ajoutez FiveM à la liste blanche/exclusions de votre antivirus. Voyez
          ici comment faire. Nous travaillons sur une solution. Assurez-vous
          d'avoir installé et mis à jour GTA V. Téléchargez FiveM depuis le site
          web. Exécutez FiveM.exe. Si vous exécutez l'installateur dans un
          dossier vide, FiveM s'installera là-bas. Sinon, il s'installera dans
          %localappdata%\FiveM. Démarrez FiveM depuis le menu de démarrage de
          Windows.
        </p>
      </div> */}
    </section>
  );
}
