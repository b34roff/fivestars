import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full">
      <header className="flex flex-col items-center justify-start gap-2 m-5 mb-10">
        <h1 className="text-6xl font-extrabold text-center text-orange-600 md:text-8xl">
          FiveStars RolePlay
        </h1>
        <p className="font-bold text-center text-orange-600 text-md md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
          asperiores commodi sit recusandae tenetur quia ratione odit aliquam ab
          sapiente?
        </p>
      </header>
      <section className="flex flex-col gap-10 mt-5">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-bold text-center uppercase md:text-2xl">
            Lorem ipsum dolor sit amet.
          </h2>
          <div className="w-1/2 h-1 m-2 bg-orange-600 rounded-full"></div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            consequatur eligendi, repudiandae, iste molestiae explicabo tempore
            aut voluptatum quae expedita laboriosam maiores eum sint voluptates
            adipisci ad magnam, corporis doloribus.
          </p>
          <div className="flex flex-col items-start mt-5 md:flex-row justify-evenly">
            <Image
              src="/image1.webp"
              width={1920}
              height={1080}
              className="w-auto h-auto rounded-xl"
            />
            <p className="text-center md:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              dignissimos beatae veritatis repellendus itaque accusantium nihil,
              qui voluptas quia nam vitae natus officiis soluta excepturi
              reprehenderit et? Deleniti enim quibusdam ut totam natus ducimus
              veniam, necessitatibus ad et quas rerum nesciunt odio facilis
              sequi assumenda possimus, at ex modi minus!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-bold text-center uppercase md:text-2xl">
            Lorem ipsum dolor sit amet.
          </h2>
          <div className="w-1/2 h-1 m-2 bg-orange-600 rounded-full"></div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            consequatur eligendi, repudiandae, iste molestiae explicabo tempore
            aut voluptatum quae expedita laboriosam maiores eum sint voluptates
            adipisci ad magnam, corporis doloribus.
          </p>
          <div className="flex flex-col items-start mt-5 md:flex-row justify-evenly">
            <Image
              src="/image2.png"
              width={1920}
              height={1080}
              className="w-auto h-auto rounded-xl"
            />
            <p className="text-center md:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              dignissimos beatae veritatis repellendus itaque accusantium nihil,
              qui voluptas quia nam vitae natus officiis soluta excepturi
              reprehenderit et? Deleniti enim quibusdam ut totam natus ducimus
              veniam, necessitatibus ad et quas rerum nesciunt odio facilis
              sequi assumenda possimus, at ex modi minus!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-bold text-center uppercase md:text-2xl">
            Lorem ipsum dolor sit amet.
          </h2>
          <div className="w-1/2 h-1 m-2 bg-orange-600 rounded-full"></div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            consequatur eligendi, repudiandae, iste molestiae explicabo tempore
            aut voluptatum quae expedita laboriosam maiores eum sint voluptates
            adipisci ad magnam, corporis doloribus.
          </p>
          <div className="flex flex-col items-start mt-5 md:flex-row justify-evenly">
            <Image
              src="/image3.jpg"
              width={1920}
              height={1080}
              className="w-auto h-auto rounded-xl"
            />
            <p className="text-center md:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              dignissimos beatae veritatis repellendus itaque accusantium nihil,
              qui voluptas quia nam vitae natus officiis soluta excepturi
              reprehenderit et? Deleniti enim quibusdam ut totam natus ducimus
              veniam, necessitatibus ad et quas rerum nesciunt odio facilis
              sequi assumenda possimus, at ex modi minus!
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
