import React from "react";
import Image from "next/image";
import { Palette, Users } from "lucide-react";

export default function DressCode() {
  const colorPalette = [
    { color: "#F24CA5" }, // Rosa claro
    { color: "#FF1493" }, // Rosa médio
    { color: "#ED2A94" }, // Rosa escuro
  ];

  const correctImages = [
    { src: "/images/vestido-madrinha1.jpg", alt: "Exemplo1" },
    { src: "/images/vestido-madrinha2.jpg", alt: "Exemplo2" },
    { src: "/images/vestido-madrinha3.jpg", alt: "Exemplo3" },
    { src: "/images/vestido-madrinha4.jpg", alt: "Exemplo4" },
  ];

  const groomsImages = [
    { src: "/images/terno-padrinho1.webp", alt: "Look padrinho 1" },
    { src: "/images/terno-padrinho2.webp", alt: "Look padrinho 2" },
    { src: "/images/terno-padrinho3.webp", alt: "Look padrinho 3" },
    { src: "/images/terno-padrinho4.webp", alt: "Look padrinho 4" },
  ];

  return (
    <section
      id="dresscode"
      className="py-20 px-6"
      style={{ backgroundColor: "#FAF8E7" }}
    >
      <div className="container-max section-padding">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8" style={{ color: "#334870" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Queridas Madrinhas
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "#334870" }}
          ></div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <p className="font-body text-lg text-gray-600">
                Escolhemos o azul como cor do nosso casamento porque ela
                representa tranquilidade, harmonia e confiança ,exatamente os
                sentimentos que queremos celebrar neste dia tão especial.
                Queremos que cada detalhe reflita a serenidade e a profundidade
                do nosso amor, e que vocês, nossas madrinhas queridas, estejam
                junto conosco nesse clima azul 💙
              </p>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Palette className="w-8 h-8 mr-3" style={{ color: "#334870" }} />
            <h3 className="font-display text-3xl font-semibold text-gray-800">
              Paleta de Cores
            </h3>
          </div>

          <div
            className="p-6 rounded-lg border-l-4"
            style={{ backgroundColor: "#fdf2f8", borderLeftColor: "#334870" }}
          >
            <p className="font-body" style={{ color: "#334870" }}>
              Não estipulamos um tom específico, queremos que você escolha o
              azul que fique melhor em você!
            </p>
          </div>
        </div>

        {/* Tons Corretos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl font-semibold text-gray-800 mb-4">
              Exemplos de Tons
            </h3>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-6 max-w-5xl mx-auto">
            {correctImages.map((image, index) => (
              <div key={index} className="relative group">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div
              className="flex gap-4 overflow-x-scroll pb-4 px-4 scrollbar-hide"
              style={{ overflowX: "scroll" }}
            >
              {correctImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: "280px", minWidth: "280px" }}
                >
                  <div
                    className="relative rounded-lg overflow-hidden shadow-lg"
                    style={{ height: "380px" }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              👆 Deslize para ver mais imagens
            </p>
          </div>
        </div>

        {/* Seção dos Padrinhos */}
        <div
          className="mt-20 pt-16 border-t-2"
          style={{ borderTopColor: "#334870" }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 mr-3" style={{ color: "#334870" }} />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
                E os Padrinhos?
              </h2>
            </div>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              Vocês também são fundamentais nesse dia! Aqui estão as orientações
              para que fiquem elegantes e alinhados com o estilo do casamento.
            </p>
          </div>

          {/* Fotos de Referência */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl font-semibold text-gray-800 mb-4">
                <span style={{ color: "#334870" }}>👔</span> Looks Ideais
              </h3>
              <p className="font-body text-lg text-gray-600">
                Estes são os estilos que combinam perfeitamente com nossa
                cerimônia!
              </p>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-4 gap-6 max-w-5xl mx-auto">
              {groomsImages.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={`group-hover:scale-105 transition-transform duration-300 ${
                        image.src.includes("padrinhos3")
                          ? "object-contain"
                          : "object-cover"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden">
              <div
                className="flex gap-4 overflow-x-scroll pb-4 px-4 scrollbar-hide"
                style={{ overflowX: "scroll" }}
              >
                {groomsImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: "280px", minWidth: "280px" }}
                  >
                    <div
                      className="relative rounded-lg overflow-hidden shadow-lg"
                      style={{ height: "380px" }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className={`object-cover ${
                          image.src.includes("padrinhos3")
                            ? "object-contain"
                            : "object-cover"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">
                👆 Deslize para ver mais imagens
              </p>
            </div>
          </div>

          {/* Orientações */}
          <div
            className="mt-16 p-8 rounded-lg border-l-4"
            style={{ backgroundColor: "#fdf2f8", borderLeftColor: "#334870" }}
          >
            <div className="text-center">
              <h4
                className="font-display text-2xl font-semibold mb-6"
                style={{ color: "#334870" }}
              >
                Dress Code Masculino
              </h4>
              <div className="max-w-4xl mx-auto">
                <div
                  className="space-y-4 text-lg leading-relaxed font-body"
                  style={{ color: "#334870" }}
                >
                  <p>
                    <strong>Terno:</strong> Azul Marinho
                  </p>
                  <p>
                    <strong>Camisa:</strong> Branca
                  </p>
                  <p>
                    <strong>Gravata:</strong> Vinho
                  </p>
                  <p>
                    <strong>Sapatos:</strong> Tênis ou sapatênis
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mt-20">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
                <p className="font-body text-lg text-gray-700 leading-relaxed">
                  Parece que ainda falta tempo, mas ele passa rápido! Queremos
                  que vocês escolham a roupa que mais gostarem e curtam cada
                  momento do nosso dia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
