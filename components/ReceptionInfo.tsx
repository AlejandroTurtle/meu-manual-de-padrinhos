import Image from "next/image";
import { MapPin, Utensils } from "lucide-react";

export default function ReceptionInfo() {
  return (
    <section
      id="reception"
      className="py-20 px-6"
      style={{ backgroundColor: "#FAF8E7" }}
    >
      <div className="container-max section-padding">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Utensils className="w-8 h-8" style={{ color: "#334870" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Recepção
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "#334870" }}
          ></div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/espaco-evento1.png"
                alt="Espaço Germans"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/espaco-evento2.png"
                alt="Espaço Germans"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/espaco-evento3.png"
                alt="Espaço Germans"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Reception Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              Espaço Germans
            </h3>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <p className="font-body text-lg text-gray-700 leading-relaxed">
                Escolhemos este espaço especial para celebrar com vocês a nossa
                união. Um lugar elegante e aconchegante, perfeito para criar
                memórias inesquecíveis ao lado de quem mais amamos!
              </p>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Address Card */}
          <div
            className="rounded-2xl shadow-xl border border-white/50 overflow-hidden"
            style={{ backgroundColor: "#fdf2f8" }}
          >
            R. Ten. Anastácio de Moura, de - 201 - Santa Efigênia, Belo
            Horizonte - MG, 30240-390
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-white shadow-md">
                  <MapPin className="w-6 h-6" style={{ color: "#334870" }} />
                </div>
                <h4 className="font-display text-xl font-semibold text-gray-800 ml-4">
                  Endereço
                </h4>
              </div>
              <div className="space-y-3">
                <p className="font-body text-gray-700">
                  <strong>Rua Tenente Anastácio de Moura, 201</strong>
                  <br />
                  Santa Efigênia, Belo Horizonte – MG
                  <br />
                  CEP: 30240-390
                </p>
              </div>
            </div>
          </div>

          {/* Route Map Card */}
          <div
            className="rounded-2xl shadow-xl border border-white/50 overflow-hidden"
            style={{ backgroundColor: "#fdf2f8" }}
          >
            <div className="p-6">
              <h4 className="font-display text-xl font-semibold text-gray-800 mb-4 text-center">
                Rota: Igreja → Recepção
              </h4>
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBKQeKW7R95h24HO6HFr6IbXJ0oKKpuN9k&origin=-19.9176209,-43.905917&destination=-19.9212369,-43.9156426&mode=driving&language=pt-BR"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rota da Igreja para a Recepção"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
