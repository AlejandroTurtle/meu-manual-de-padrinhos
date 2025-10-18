import { Calendar, MapPin, Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-6"
      style={{ backgroundColor: "#F8F5E8" }}
    >
      <div className="container-max section-padding relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Logo and Message */}
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-3">
              <h3 className="font-display text-xl font-semibold text-gray-700">
                Larissa & Alejandro
              </h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">
                Este manual foi feito com muito carinho para vocês. Esperamos
                que tenham todas as informações necessárias para nosso grande
                dia! 💕
              </p>
            </div>
          </div>

          {/* Wedding Information */}
          <div className="text-center md:text-right space-y-6">
            <h4 className="font-display text-lg font-semibold text-gray-700">
              Informações do Casamento
            </h4>

            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-end space-x-3">
                <Calendar className="w-4 h-4" style={{ color: "#334870" }} />
                <span className="font-body text-sm text-gray-600">
                  08 de Agosto de 2026
                </span>
              </div>

              <div className="flex items-center justify-center md:justify-end space-x-3">
                <MapPin className="w-4 h-4" style={{ color: "#334870" }} />
                <span className="font-body text-sm text-gray-600">
                  Casa Paroquial Santa Luzia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent bg-[#334870] to-transparent"></div>
          <div className="mx-4">
            <Heart
              className="w-6 h-6 fill-current"
              style={{ color: "#334870" }}
            />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparen bg-[#334870]  to-transparent"></div>
        </div>

        {/* Final message */}
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 inline-block">
            <p className="font-body text-sm text-gray-600">
              Com todo o nosso amor e carinho
            </p>
            <p
              className="font-display text-lg font-semibold mt-2"
              style={{ color: "#334870" }}
            >
              Larissa & Alejandro
            </p>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#334870]"></div>
      </div>
    </footer>
  );
}
