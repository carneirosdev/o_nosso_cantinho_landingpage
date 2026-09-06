import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const differentiators = [
  {
    title: "Tudo no mesmo espaço",
    text: "Restaurante, pizzaria, snack-bar, piscina e área de eventos — sem sair do lugar.",
  },
  {
    title: "Ambiente para todos",
    text: "Do almoço em família ao fim de tarde à beira da piscina ou à celebração especial.",
  },
  {
    title: "Cozinha própria",
    text: "Pratos preparados na hora, com produtos frescos e receitas da casa.",
  },
];

export function About() {
  return (
    <section id="sobre" className="section bg-cream">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/restaurante-interior-2.jpg"
              alt="Sala interior do restaurante com mesas postas e cadeiras vermelhas"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden w-40 overflow-hidden rounded-xl border-4 border-cream shadow-lg sm:block lg:w-48">
            <div className="relative aspect-square">
              <Image
                src="/images/exterior-2.jpg"
                alt="Deck exterior com sofás de vime junto à piscina"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Sobre o espaço"
            title="O nosso cantinho para comer, relaxar e celebrar"
            description="Somos um espaço de gastronomia e lazer que reúne restaurante, pizzaria e snack-bar à volta de uma piscina, com uma área preparada para acolher casamentos, aniversários e festas privadas. Um sítio pensado para se estar bem — sozinho, em família ou com quem se quer celebrar."
          />

          <dl className="mt-8 space-y-5">
            {differentiators.map((d, i) => (
              <Reveal as="div" key={d.title} delay={i * 80} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand"
                />
                <div>
                  <dt className="font-semibold text-ink">{d.title}</dt>
                  <dd className="mt-0.5 text-sm text-ink-muted">{d.text}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
