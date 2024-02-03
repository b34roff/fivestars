import { Separator } from "@/components/Separator";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full">
      <header className="flex flex-col items-center justify-start gap-2 my-16 mb-32">
        <h1 className="p-2 text-6xl font-extrabold text-center md:text-8xl gradient-text">
          FiveStars RolePlay
        </h1>
        <p className="font-bold text-center text-md md:text-lg gradient-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </header>
      <section className="flex flex-col items-center justify-start gap-10">
        <div className="flex flex-col items-center justify-center gap-10 xl:grid xl:grid-cols-3">
          <Image
            src="/image1.webp"
            alt="RolePlay"
            width={1920}
            height={1080}
            className="w-full h-full col-span-2 shadow-md rounded-xl fit-content"
          />
          <div className="flex flex-col items-center justify-start w-full h-full gap-4 p-6 bg-orange-100 bg-opacity-50 shadow-md rounded-xl backdrop-blur-md">
            <h2 className="text-4xl font-extrabold gradient-text">About Us</h2>
            <p className="font-semibold text-black text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              molestias iste! Distinctio obcaecati saepe temporibus est? Eos
              vero temporibus quam labore et eligendi accusamus harum obcaecati.
              Aliquid, nisi nostrum est quasi vitae perferendis dignissimos
              repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ullam consequatur in possimus ducimus nisi, dolore provident
              aliquam quaerat, iure quibusdam inventore dolor rerum aspernatur
              nam nostrum. Ab ratione deserunt quod.
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col-reverse items-center justify-center gap-10 xl:grid xl:grid-cols-3">
          <div className="flex flex-col items-center justify-start w-full h-full gap-4 p-6 bg-orange-100 bg-opacity-50 shadow-md rounded-xl backdrop-blur-md">
            <h2 className="text-4xl font-extrabold gradient-text">About Us</h2>
            <p className="font-semibold text-black text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              molestias iste! Distinctio obcaecati saepe temporibus est? Eos
              vero temporibus quam labore et eligendi accusamus harum obcaecati.
              Aliquid, nisi nostrum est quasi vitae perferendis dignissimos
              repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ullam consequatur in possimus ducimus nisi, dolore provident
              aliquam quaerat, iure quibusdam inventore dolor rerum aspernatur
              nam nostrum. Ab ratione deserunt quod.
            </p>
          </div>
          <Image
            src="/image2.png"
            alt="RolePlay"
            width={1920}
            height={1080}
            className="w-full h-full col-span-2 rounded-xl fit-content"
          />
        </div>
        <Separator />
        <div className="flex flex-col items-center justify-center gap-10 xl:grid xl:grid-cols-3">
          <Image
            src="/image3.jpg"
            alt="RolePlay"
            width={1920}
            height={1080}
            className="w-full h-full col-span-2 rounded-xl fit-content"
          />
          <div className="flex flex-col items-center justify-start w-full h-full gap-4 p-6 bg-orange-100 bg-opacity-50 shadow-md rounded-xl backdrop-blur-md">
            <h2 className="text-4xl font-extrabold gradient-text">About Us</h2>
            <p className="font-semibold text-black text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              molestias iste! Distinctio obcaecati saepe temporibus est? Eos
              vero temporibus quam labore et eligendi accusamus harum obcaecati.
              Aliquid, nisi nostrum est quasi vitae perferendis dignissimos
              repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ullam consequatur in possimus ducimus nisi, dolore provident
              aliquam quaerat, iure quibusdam inventore dolor rerum aspernatur
              nam nostrum. Ab ratione deserunt quod.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
