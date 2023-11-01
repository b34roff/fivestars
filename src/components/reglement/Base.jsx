export default function Base() {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="p-2">
        <h2 className="text-2xl font-bold text-orange-600">Règles de base</h2>
        <p className="font-semibold text-orange-500 text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          ex harum non odio aliquam! Perspiciatis et esse molestias maiores
          soluta?
        </p>
      </div>
      <div className="w-2/3 h-1 mx-auto my-5 bg-orange-600 rounded-full"></div>
      <div className="flex flex-col w-5/6 gap-4 mx-auto">
        <p className="flex flex-col">
          <span className="font-semibold">Pseudo Discord :</span>
          Votre pseudonyme Discord doit obligatoirement correspondre au format
          suivant : [FACTION] Prénom "Pseudo" NOM.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Âge Minimum :</span>
          Nous demandons à nos joueurs d'avoir au moins 16 ans et de s'engager à
          participer à un Roleplay de qualité.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Respect Universel :</span>
          Respectez toutes les personnes de la communauté FiveStars, quel que
          soit leur genre, orientation sexuelle, religion, nationalité, handicap
          ou toute autre caractéristique personnelle.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Respect des Désaccords :</span>
          En cas de désaccord avec un membre du staff ou un autre joueur,
          exprimez vos opinions de manière respectueuse et constructive. Les
          débats peuvent contribuer à l'amélioration de notre communauté.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">
            Interdiction du Métagaming et du Powergaming :
          </span>
          Le métagaming et le powergaming sont strictement interdits. Cela
          signifie que l'utilisation d'informations obtenues en dehors du jeu
          pour influencer vos actions en jeu, ainsi que l'utilisation de
          tactiques déloyales pour obtenir un avantage sur d'autres joueurs,
          sont prohibées.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Triche et Modding :</span>Tout acte de
          triche ou de modding est rigoureusement interdit. Les joueurs pris en
          train de tricher seront bannis du serveur sans préavis.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Fair-Play et Amicalité :</span>
          Faites preuve de fair-play et soyez amicaux envers les autres joueurs.
          Gardez à l'esprit que vous jouez à un jeu, et que l'objectif est de
          s'amuser et de créer des histoires intéressantes ensemble.
        </p>
      </div>
    </div>
  );
}
