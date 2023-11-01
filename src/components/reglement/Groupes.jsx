export default function Groupes() {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="p-2">
        <h2 className="text-2xl font-bold text-orange-600">
          Règles liées aux Groupes
        </h2>
        <p className="font-semibold text-orange-500 text-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          exercitationem accusantium eius quia nesciunt velit incidunt
          reiciendis minima sed voluptatibus?
        </p>
      </div>
      <div className="w-2/3 h-1 mx-auto my-5 bg-orange-600 rounded-full"></div>
      <div className="flex flex-col w-5/6 gap-4 mx-auto">
        <p className="flex flex-col">
          <span className="font-semibold">Fear en Jeu :</span>Le fear est imposé
          en jeu, mais il doit respecter le lore et la cohérence de chaque
          groupe.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Partage de Laboratoires :</span>Le
          partage de laboratoires est interdit entre groupes.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Droit de Retrait :</span>Le staff se
          réserve le droit de retirer un véhicule sans remboursement s'il est
          jugé incohérent. Si vous avez des doutes, demandez-nous avant de
          l'acheter.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Convois Légitimes :</span>Les convois
          doivent être légitimes (transferts de drogues ou d'armes). La police
          peut contrôler tout convoi de plus de 3 véhicules.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Unicité des Véhicules :</span>Il ne
          peut y avoir qu'un seul véhicule identique sur la même scène ou
          convoi. Cette règle vise à réduire les métas, créer de la diversité et
          éviter de voir un gang rouler avec 4 mêmes voitures.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Utilisation Restreinte :</span> Les
          drive-by sont autorisés uniquement pour créer des scènes. Ils ne
          doivent pas avoir pour but de tuer d'autres joueurs, sous peine de
          risquer un ban permanent.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Connaissance du Lore :</span>Les
          habitants et affiliés doivent connaître le lore du groupe auquel ils
          sont affiliés.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Restrictions :</span> Ils sont
          interdits de participer aux gunfights, aux scènes illégales, aux
          attaques ou défenses de laboratoires, à la production de drogues ou
          d'armes, ainsi qu'à l'utilisation des couleurs du groupe.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Limites des Slots :</span>Les
          organisations sont limitées à 12 slots, les MC à 12 slots, les gangs à
          15 slots, et les petites frappes à 5 slots.
        </p>
      </div>
    </div>
  );
}
