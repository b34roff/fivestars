import Faq_element from "@/components/Faq_element";

export default function Faq() {
  return (
    <section className="flex flex-col items-center w-full gap-5">
      <h2 className="text-4xl font-bold text-orange-600">FAQ</h2>
      <div className="w-1/3 m-2 bg-orange-600 rounded-full min-h-[4px]"></div>
      <Faq_element
        q={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod."
        }
        a={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod."
        }
      />
      <Faq_element
        q={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod."
        }
        a={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod."
        }
      />
      <Faq_element
        q={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod."
        }
        a={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod."
        }
      />
      <Faq_element
        q={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod."
        }
        a={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod."
        }
      />
      <Faq_element
        q={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod."
        }
        a={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod."
        }
      />
      <Faq_element
        q={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod."
        }
        a={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quod."
        }
      />
    </section>
  );
}
