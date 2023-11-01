export default function Lexique() {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="p-2">
        <h2 className="text-2xl font-bold text-orange-600">
          Lexique du Roleplay
        </h2>
        <p className="font-semibold text-orange-500 text-md">
          Voici les termes les plus souvent utilisée sur un serveur RP, elles
          doivent être compris a 100%.
        </p>
      </div>
      <div className="w-2/3 h-1 mx-auto my-5 bg-orange-600 rounded-full"></div>
      <div className="flex flex-col w-5/6 gap-4 mx-auto">
        <p className="flex flex-col">
          <span className="font-semibold">Mal de tête :</span>
          Un joueur a subi un crash.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Mal aux yeux : </span>
          Un joueur éprouve une perte de FPS.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Tempête : </span>
          Le serveur doit être redémarré.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Être dans ses pensées : </span>
          Un joueur est AFK (Absent From Keyboard).
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Faire ses lacets : </span>
          Un joueur se téléporte.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Prendre une pastille : </span>
          Un joueur rencontre des problèmes avec son microphone.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">GoPro : </span>
          Un joueur est en streaming live.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Frein défectueux : </span>
          Le jeu subit une désynchronisation.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Haute Instance : </span>
          Le staff du serveur.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Unité X : </span>
          Les EMS se téléportent à un emplacement spécifique.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Faire une sieste : </span>
          Un joueur se déconnecte et se reconnecte au serveur.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Intranet : </span>
          Le serveur Discord du jeu.
        </p>
      </div>
    </div>
  );
}
