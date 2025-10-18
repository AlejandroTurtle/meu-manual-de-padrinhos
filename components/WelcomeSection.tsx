import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="py-16 px-6"
      style={{ backgroundColor: "#FAF8E7" }}
    >
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2
              className="font-display text-xl md:text-xl text-gray-800"
              style={{ fontSize: "56px" }}
            >
              Queridos Padrinhos,
            </h2>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-body">
              <p>
                Que alegria ter vocês conosco em um dos momentos mais especiais
                das nossas vidas! Cada um de vocês tem um lugar único na nossa
                história, e é impossível imaginar esse dia sem sua presença e
                carinho ao nosso lado.
              </p>

              <p>
                Como padrinhos e madrinhas, vocês são testemunhas do nosso amor
                e prometem nos apoiar nesta nova jornada que estamos começando
                juntos. É uma honra tê-los conosco neste momento tão importante.
              </p>

              <p>
                Criamos esse manual com muito amor para que vocês tenham todas
                as informações e se sintam ainda mais parte desse sonho!
                Esperamos que ele ajude vocês!
              </p>
            </div>

            <div
              className="p-6 rounded-lg border-l-4"
              style={{ backgroundColor: "#fdf2f8", borderLeftColor: "#334870" }}
            >
              <p className="font-body italic" style={{ color: "#334870" }}>
                "O amor é o maior presente que Deus concede a duas pessoas que
                se encontram."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/foto-casal.jpg"
                alt="Foto do casal"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
