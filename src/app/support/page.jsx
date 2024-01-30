import Link from "next/link";

export default function Support() {
  return (
    <section className="flex flex-col items-center h-full gap-5">
      <h2 className="text-4xl font-bold text-orange-600">Support</h2>
      <div className="w-1/3 m-2 bg-orange-600 rounded-full min-h-[4px]"></div>
      <div className="grid items-center justify-between gap-5 w-ful md:grid-cols-3 md:flex-row">
        <Link
          href="/support/faq"
          className="flex flex-col items-center justify-start w-full h-full gap-5 px-2 py-5 transition duration-300 ease-in-out bg-orange-200 shadow-lg cursor-pointer rounded-xl hover:shadow-2xl hover:bg-orange-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
            className="text-6xl fill-orange-600">
            <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" />
          </svg>
          <h3 className="text-3xl font-bold text-orange-600">FAQ</h3>
          <p className="p-2 font-semibold text-center text-orange-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            voluptatem voluptatibus dolorem at fugiat aspernatur excepturi
            expedita quidem eius! Repellat omnis unde voluptas animi nihil?
          </p>
        </Link>
        <Link
          href="/reglement"
          className="flex flex-col items-center justify-start w-full h-full gap-5 px-2 py-5 transition duration-300 ease-in-out bg-orange-200 shadow-lg cursor-pointer hover:bg-orange-300 rounded-xl hover:shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            className="text-6xl fill-orange-600">
            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
          </svg>
          <h3 className="text-3xl font-bold text-orange-600">Règlement</h3>
          <p className="p-2 font-semibold text-center text-orange-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae eligendi, repellat quas tenetur, vero aliquid provident
            perspiciatis veniam placeat et aperiam velit consectetur praesentium
            harum!
          </p>
        </Link>
        <Link
          href="/"
          className="flex flex-col items-center justify-start w-full h-full gap-5 px-2 py-5 transition duration-300 ease-in-out bg-orange-200 shadow-lg cursor-pointer hover:bg-orange-300 rounded-xl hover:shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            className="text-6xl fill-orange-600">
            <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
          </svg>
          <h3 className="text-3xl font-bold text-orange-600">
            Demande de déban
          </h3>
          <p className="p-2 font-semibold text-center text-orange-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            animi possimus cupiditate iure, quibusdam nulla, eius ea nobis quae
            eveniet, consectetur id quas nesciunt. Quisquam doloribus sint
            reiciendis incidunt. Adipisci.
          </p>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-5 p-2 bg-orange-200 shadow-xl md:h-full h-fit rounded-xl">
        <h2 className="text-2xl font-bold text-orange-600 md:text-4xl">
          Toujours besoin d'aide ?
        </h2>
        <p className="text-base font-semibold text-center text-orange-500 md:text-xl">
          Vous pouvez nous contacter directement sur discord juste ici :
        </p>
        <Link
          href="https://discord.gg/Rqu8KXK6dv"
          className="flex items-center gap-2 p-2 text-sm font-extrabold text-center text-white uppercase transition duration-300 ease-in-out bg-orange-600 md:text-lg hover:scale-105 rounded-xl fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512">
            <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
          </svg>
          Rejoignez nous sur discord !
        </Link>
      </div>
    </section>
  );
}
