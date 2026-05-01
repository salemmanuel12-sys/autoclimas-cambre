import { Phone, MapPin } from 'lucide-react'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary-900 to-primary-800 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Empresa */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Autoclimas Cambre</h3>
            <p className="text-primary-100 text-sm leading-relaxed">
              Soluciones profesionales en climatización y refrigeración con técnicos certificados.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-primary-100 hover:text-accent-400 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-primary-100 hover:text-accent-400 transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-primary-100 hover:text-accent-400 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-display font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-primary-100">
              <li>Autoclimas reparación</li>
              <li>Refrigeradores</li>
              <li>Servicio a domicilio</li>
              <li>Garantías</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-accent-400 font-semibold">833 247 0486</p>
                  <p className="text-accent-400">833 259 9522</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-100">
                  Av. Tamaulipas 406<br />Rev. Verde, Tampico
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-primary-200 text-sm mb-4 md:mb-0">
              © 2026 Autoclimas Cambre. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/528332470486"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61588909478262"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#1664cc] flex items-center justify-center transition"
                title="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
