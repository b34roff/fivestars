export default function Discord() {
  return (
    <div className="flex flex-col items-start justify-start" id="discord">
      <div className="p-2">
        <h2 className="text-2xl font-bold text-orange-600">
          Règlement du discord
        </h2>
        <p className="font-semibold text-orange-500 text-md">
          En plus du règlement du serveur FiveStarsRP, voici les règles
          spécifiques à notre serveur Discord.
        </p>
      </div>
      <div className="w-2/3 h-1 mx-auto my-5 bg-orange-600 rounded-full"></div>
      <div className="flex flex-col w-5/6 gap-4 mx-auto">
        <p className="flex flex-col">
          <span className="font-semibold">Respect :</span>
          Traitez tous les membres de la communauté avec respect et courtoisie.
          Les insultes, le harcèlement, les provocations et les comportements
          discriminatoires ne sont pas tolérés.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Langage approprié: </span>
          Utilisez un langage approprié et évitez les obscénités excessives, les
          propos offensants ou les discussions inappropriées.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Spam et publicité :</span>
          Ne spammez pas les canaux avec des messages inutiles et n'utilisez pas
          ce serveur Discord pour promouvoir d'autres serveurs, produits ou
          services sans autorisation.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Contenu NSFW :</span>
          Le partage de contenu pour adultes, violent ou choquant est
          strictement interdit.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Respect des canaux :</span>
          Utilisez les canaux appropriés pour discuter de sujets spécifiques et
          évitez de détourner les conversations ou de les interrompre sans
          raison valable.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">
            Respect des décisions du staff:{" "}
          </span>
          Les membres du staff sont là pour assurer le bon fonctionnement de la
          communauté. Veuillez respecter leurs décisions et les suivre
          lorsqu'ils donnent des directives.
        </p>
      </div>
    </div>
  );
}
