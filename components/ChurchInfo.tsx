import React from "react";
import { MapPin, Clock, Church } from "lucide-react";

export default function ChurchInfo() {
  return (
    <section
      id="church"
      className="py-20 px-6"
      style={{ backgroundColor: "#FAF8E7" }}
    >
      <div className="container-max section-padding">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Church className="w-8 h-8" style={{ color: "#334870" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Cerimônia Religiosa
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "#334870" }}
          ></div>
        </div>

        {/* Information Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Address Card */}
          <div
            className="rounded-2xl shadow-xl border border-white/50 overflow-hidden"
            style={{ backgroundColor: "#fdf2f8" }}
          >
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
                  <strong>Rua João Gomes, 157</strong>
                  <br />
                  Paraíso, Belo Horizonte – MG
                  <br />
                  CEP: 30270-390
                </p>
                <div className="pt-3 border-t border-pink-200">
                  <p className="font-body text-sm text-gray-600">
                    <strong>Bairro:</strong> Paraíso
                    <br />
                    <strong>Referência:</strong> Próximo a avenida Mem de Sá
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Time Card */}
          <div
            className="rounded-2xl shadow-xl border border-white/50 overflow-hidden"
            style={{ backgroundColor: "#fdf2f8" }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-white shadow-md">
                  <Clock className="w-6 h-6" style={{ color: "#334870" }} />
                </div>
                <h4 className="font-display text-xl font-semibold text-gray-800 ml-4">
                  Horário
                </h4>
              </div>
              <div className="text-center py-4">
                <p
                  className="font-display text-3xl font-bold"
                  style={{ color: "#334870" }}
                >
                  20:00
                </p>
                <p className="font-body text-gray-600 mt-2">
                  Início da Cerimônia
                </p>
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <p className="font-body text-sm text-gray-700">
                    <strong>Chegada dos convidados:</strong> 18:30
                    <br />
                    <strong>Início da cerimônia:</strong> 20:00
                    <br />
                    <br />
                    <strong>Padrinhos:</strong> Horário será definido e avisado
                    com antecedência pelo cerimonial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div
            className="rounded-2xl shadow-xl border border-white/50 overflow-hidden lg:col-span-1"
            style={{ backgroundColor: "#fdf2f8" }}
          >
            <div className="p-6">
              <h4 className="font-display text-xl font-semibold text-gray-800 mb-4 text-center">
                Localização
              </h4>
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.6129834168164!2d-43.9085!3d-19.91762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69a2b300ea497%3A0x6ea433274c6f9011!2sCasa%20Paroquial%20Santa%20Luzia!5e0!3m2!1spt-BR!2sbr!4v1729286400000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Casa Paroquial Santa Luzia - Localização"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
