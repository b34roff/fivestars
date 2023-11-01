export default function Gunfight() {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="p-2">
        <h2 className="text-2xl font-bold text-orange-600">
          Règles liées aux GUNFIGHT
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
          <span className="font-semibold">Interactions Vocales :</span>Avant de
          tirer, vous devez avoir un minimum d'interactions vocales avec vos
          adversaires, telles que des sommations ou des dialogues.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Interdiction des Hauteurs :</span> Il
          est interdit de prendre des hauteurs pendant un échange de tirs afin
          d'obtenir un avantage sur vos adversaires. Respectez cette règle de
          manière fairplay.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Interdiction de Se Soigner :</span>Il
          est interdit de se soigner en plein échange de tirs.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">
            Interdiction des Montages Gunfights :
          </span>
          Il est interdit de publier des montages de gunfights.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">
            Responsabilité des Armes à Feu :
          </span>
          L'usage d'une arme à feu implique de lourdes conséquences. Soyez
          sérieux et respectueux lorsque vous utilisez des armes.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Pouvoirs du LSPD/LSSD :</span>Le LSPD
          ou le LSSD ont le plein pouvoir de sanctionner les joueurs impliqués
          dans une fusillade.
        </p>
      </div>
    </div>
  );
}
