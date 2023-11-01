export default function Mortrp() {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="p-2">
        <h2 className="text-2xl font-bold text-orange-600">
          Règles de MORT RP
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
          <span className="font-semibold">Demandes de Mort RP :</span>
          Toutes les demandes de mort RP doivent être soumises via un ticket.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">
            Demande de Votre Propre Mort RP :
          </span>
          Si vous souhaitez votre propre mort RP, précisez le motif dans un
          ticket et attendez la réponse du staff.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Demande suite à une Scène :</span>Pour
          une demande de mort RP suite à une scène, vous devez fournir une
          preuve vidéo (Rec*) pour appuyer votre demande.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">
            Demande pour un Autre Personnage :
          </span>
          Si vous souhaitez demander la mort d'un autre personnage, fournissez
          les informations suivantes : nom, prénom, faction de la cible, raisons
          pour lesquelles vous souhaitez sa mort, et indiquez les portes de
          sortie envisagées. Attendez ensuite la réponse du staff.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Respect du Pain RP :</span> Si le Pain
          RP (Roleplay de douleur) n'est pas respecté, les EMS pourront
          appliquer des conséquences RP, telles que la mort RP, pour ceux qui se
          présentent fréquemment à l'hôpital avec des blessures par balles.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">
            Mort RP pour un Lead de Projet Illégal :
          </span>
          Un lead d'un projet illégal peut procéder à une mort RP d'un membre de
          son groupe sans l'approbation préalable du staff. Cependant, il devra
          en informer le staff via un ticket en précisant les raisons de cette
          action.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">
            Sentence de Prison à Perpétuité :
          </span>
          La sentence de prison à perpétuité est assimilée à une mort RP et ne
          peut être prononcée que par un juge. Il est impératif de constituer un
          dossier de mort RP et d'obtenir l'approbation du staff, de la même
          manière qu'une mort RP classique.
        </p>
      </div>
    </div>
  );
}
