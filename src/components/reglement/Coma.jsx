export default function Coma() {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="p-2">
        <h2 className="text-2xl font-bold text-orange-600">Règles de COMA</h2>
        <p className="font-semibold text-orange-500 text-md">
          En cas de coma, vos souvenirs peuvent être influencés en fonction de
          la cause du coma.
        </p>
      </div>
      <div className="w-2/3 h-1 mx-auto my-5 bg-orange-600 rounded-full"></div>
      <div className="flex flex-col w-5/6 gap-4 mx-auto">
        <p className="flex flex-col">
          <span className="font-semibold">Coma dû à une arme létale :</span>
          Si le coma est causé par une arme létale, vos souvenirs seront
          complètement affectés. Vous pourriez tout oublier, et les souvenirs
          reviendront progressivement, mais pas avant 48 heures.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">
            Coma dû à une arme blanche ou contondante :
          </span>
          Si le coma est causé par une arme blanche ou contondante, vos
          souvenirs seront impactés de manière modérée. Par exemple, si vous
          participez à une bagarre et que vous recevez un coup violent, vous
          pourriez vous souvenir de quelques détails de la situation, mais pas
          de manière claire et précise.
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">
            Coma dû à un accident ou involontaire :
          </span>
          Si le coma est causé par un accident ou est involontaire, vos
          souvenirs seront légèrement affectés. Par exemple, si vous avez un
          accident de voiture, vous vous souviendrez peut-être que vous étiez
          seul en voiture avant de perdre conscience.
        </p>
      </div>
    </div>
  );
}
