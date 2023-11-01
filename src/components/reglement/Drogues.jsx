export default function Drogues() {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="p-2">
        <h2 className="text-2xl font-bold text-orange-600">
          Règles liées aux Drogues
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
          <span className="font-semibold">Lieu de Vente :</span>La vente de
          drogue doit se faire à pied, loin de tout véhicule.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold"> Vente dans son Quartier:</span>Il est
          interdit de vendre de la drogue dans votre propre quartier si vous
          appartenez à un gang ou à une petite frappe.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Véhicules Interdits :</span>Les quads,
          les motos et les vélos sont interdits pour la vente de drogue.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Accès Forcé :</span>Vous n'avez pas le
          droit de forcer les autres joueurs à vous laisser entrer dans leur
          laboratoire.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Raison Roleplay Valable :</span>Vous
          devez avoir une raison roleplay valable pour attaquer un laboratoire.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Conséquences :</span>Après une attaque
          de laboratoire, le laboratoire est détruit.
        </p>
      </div>
    </div>
  );
}
