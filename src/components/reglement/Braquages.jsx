export default function Braquages() {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="p-2">
        <h2 className="text-2xl font-bold text-orange-600">
          Règles liées aux BRAQUAGES
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
          <span className="font-semibold">Nombre de Participants :</span>Tout
          braquage doit être effectué par au moins deux personnes.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Planification Essentielle :</span>
          Lors d'un braquage, il est essentiel de prendre en compte les risques.
          Un braquage de banque ne se réalise jamais sans plan, sans otages et
          sans armes.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Négociation Obligatoire :</span> Tout
          braquage doit faire l'objet d'une négociation avec les forces de
          l'ordre. Par conséquent, les braqueurs doivent attendre l'arrivée de
          la police avant de quitter les lieux.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">
            Interdiction des Otages en Entreprises :
          </span>
          Il est interdit de prendre des otages dans les entreprises pour
          effectuer des braquages.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">
            Fairplay et Éviter la Facilité :
          </span>
          Les braqueurs doivent faire preuve de fairplay et éviter de chercher
          la facilité. En cas de non-respect de ces règles, des sanctions
          peuvent être appliquées.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">
            Interdiction de Prendre en Otage en Moto :
          </span>{" "}
          Il est interdit de prendre les vendeurs de supérette en otage et de
          braquer en moto.
        </p>
      </div>
    </div>
  );
}
