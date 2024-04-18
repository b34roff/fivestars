import Image from "next/image";
import Link from "next/link";

export default function Jouer() {
  return (
    <section className="w-full h-full">
      <div className="relative flex w-full h-full overflow-hidden rounded-lg lg:flex">
        <Image
          src={"/FiveM.jpg"}
          width={1920}
          height={1080}
          alt="Fivem background"
          className="object-cover object-center w-full h-full -z-10"
        />
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-black bg-opacity-25 backdrop-blur-lg"></div>
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <Link
            href="fivem://connect/194.62.1.15:30120"
            className="flex items-center gap-2 px-5 py-2 text-xl font-extrabold text-white uppercase transition duration-300 ease-in-out bg-orange-500 shadow-2xl rounded-xl fill-white hover:scale-105 hover:bg-white hover:text-orange-600 hover:fill-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              className="text-2xl">
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
            Jouer sur FiveStars !
          </Link>
        </div>
      </div>
    </section>
  );
}
