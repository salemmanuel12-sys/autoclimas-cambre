import './App.css'
import logoCambre from './assets/logoCambre.jpeg'
import bannerCambre from './assets/bannerCambre.png'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ServiceCard from './components/ServiceCard'
import {
  Wrench,
  Snowflake,
  Truck,
  CheckCircle,
  MapPin,
  Award,
  Zap,
  ArrowRight,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const services = [
  {
    icon: Wrench,
    title: 'Autoclimas',
    description: 'Reparación profesional de sistemas de aire acondicionado automotriz con diagnóstico completo.',
  },
  {
    icon: Snowflake,
    title: 'Refrigeradores',
    description: 'Venta, reparación y mantenimiento de refrigeradores con garantía en piezas y mano de obra.',
  },
  {
    icon: Truck,
    title: 'Servicio a Domicilio',
    description: 'Diagnóstico y reparación en tu hogar u oficina. Atendemos en Tampico, Madero y Altamira.',
  },
  {
    icon: CheckCircle,
    title: 'Garantía Total',
    description: 'Respaldo garantizado en cada servicio realizado. Tranquilidad y confianza asegurada.',
  },
]

const coverage = ['Tampico', 'Madero', 'Altamira']
const whatsappContacts = [
  { label: '833 247 0486', href: 'https://wa.me/528332470486' },
  { label: '833 259 9522', href: 'https://wa.me/528332599522' },
]

function App() {
  return (
    <>
      <Navbar logoSrc={logoCambre} />

      <main className="pt-24">
        {/* HERO BANNER (IMAGE ONLY) */}
        <header id="inicio" className="relative pt-0 overflow-hidden">
          <div className="relative flex w-full items-center justify-center bg-primary-900">
            <img
              src={bannerCambre}
              alt="Reparación de Autoclimas y Refrigeradores en Tampico | Autoclimas Cambre"
              className="block w-full h-auto object-contain"
            />
          </div>
        </header>

        {/* HERO CONTENT SECTION */}
        <section className="relative py-20 px-6 bg-gradient-to-b from-white via-primary-50/60 to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-500/10 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-300 text-primary-800">
                <Zap className="w-4 h-4 text-accent-600" />
                <span className="text-sm font-semibold">Técnicos Certificados por Cecati 71</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-900 mb-6 leading-tight">
                Reparación de Autoclimas y Refrigeradores en Tampico, Madero y Altamira.
              </h1>

              <p className="text-lg md:text-xl text-primary-700 mb-10 leading-relaxed">
                En Autoclimas Cambre somos especialistas en reparación de aire acondicionado automotriz y reparación de refrigeradores en Tampico, Ciudad Madero y Altamira.
                Ofrecemos servicio a domicilio con técnicos certificados.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#servicios"
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  Ver Servicios
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={whatsappContacts[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg px-8 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Contactar por WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-accent-200 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl font-display font-bold text-accent-600 mb-1">10+</div>
                <p className="text-sm font-semibold text-primary-700">Años de experiencia</p>
              </div>
              <div className="rounded-2xl border border-warm-200 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl font-display font-bold text-warm-600 mb-1">500+</div>
                <p className="text-sm font-semibold text-primary-700">Clientes atendidos</p>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section
          id="servicios"
          className="py-24 px-6 bg-gradient-to-b from-white via-primary-50 to-white"
        >
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-primary-900 mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-xl text-primary-600 max-w-2xl mx-auto">
                Soluciones integrales en refrigeración y climatización adaptadas a tus necesidades
              </p>
            </div>

            {/* Services grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(({ icon: Icon, title, description }, index) => (
                <ServiceCard
                  key={title}
                  icon={Icon}
                  title={title}
                  description={description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* TRUST & COVERAGE SECTION */}
        <section className="py-24 px-6 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-primary-900/35" />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-accent-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-warm-500 rounded-full blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Certification */}
              <div className="group rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 shadow-xl">
                <div className="inline-flex p-3 rounded-xl bg-warm-500/20 mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-warm-400" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 text-white">
                  Técnicos Certificados
                </h3>
                <p className="text-primary-50 leading-relaxed text-lg">
                  Nuestro equipo cuenta con capacitación profesional y experiencia técnica, respaldado por certificación de Cecati 71. Garantizamos calidad y profesionalismo en cada intervención que realizamos.
                </p>
                <div className="mt-6 flex items-center gap-2 text-warm-400 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Certificación verificada</span>
                </div>
              </div>

              {/* Coverage */}
              <div className="group rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 shadow-xl">
                <div className="inline-flex p-3 rounded-xl bg-accent-400/20 mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-accent-400" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 text-white">
                  Cobertura Regional
                </h3>
                <p className="text-primary-50 leading-relaxed text-lg mb-6">
                  Disponemos de equipos móviles profesionales para atender en las principales ciudades y áreas circundantes.
                </p>
                <div className="space-y-3">
                  {coverage.map((city) => (
                    <div key={city} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-400" />
                      <span className="text-lg font-semibold text-accent-200">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contacto"
          className="py-24 px-6 bg-gradient-to-b from-white to-primary-50"
        >
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-primary-900 mb-4">
                Contáctanos Hoy
              </h2>
              <p className="text-xl text-primary-600">
                Estamos disponibles 24/7 para atender tus consultas
              </p>
            </div>

            {/* Map and Info Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-200">
                <iframe
                  src="https://maps.google.com/maps?q=22.3028056,-97.8637222&z=17&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 md:h-full"
                />
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Location card */}
                <div className="rounded-2xl border-2 border-primary-300 bg-gradient-to-br from-white to-primary-50 p-8 hover:shadow-xl transition-all hover:border-accent-400">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100">
                      <MapPin className="w-7 h-7 text-primary-700" />
                    </div>
                    <h4 className="font-display font-bold text-primary-900 text-lg">Ubicación</h4>
                  </div>
                  <p className="text-primary-700 font-semibold ml-16">Av. Tamaulipas 406, Ampliacion Unidad Nacional, 89510 Cd Madero, Tamps.</p>
                  <a
                    href="https://maps.google.com/?q=22.3028056,-97.8637222"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 ml-16 inline-block hover:text-primary-800 transition"
                  >
                    Abrir en Google Maps
                  </a>
                </div>

                {/* Phone card */}
                <div className="rounded-2xl border-2 border-warm-300 bg-gradient-to-br from-white to-warm-50 p-8 hover:shadow-xl transition-all hover:border-warm-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-warm-100">
                      <FaWhatsapp className="w-7 h-7 text-warm-600" />
                    </div>
                    <h4 className="font-display font-bold text-primary-900 text-lg">WhatsApp</h4>
                  </div>
                  <div className="space-y-2 ml-16">
                    {whatsappContacts.map((contact) => (
                      <a
                        key={contact.label}
                        href={contact.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block text-warm-700 hover:text-warm-900 font-bold transition text-lg"
                      >
                        {contact.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Hours card */}
                <div className="rounded-2xl border-2 border-accent-300 bg-gradient-to-br from-white to-accent-50 p-8 hover:shadow-xl transition-all hover:border-accent-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent-100">
                      <Zap className="w-7 h-7 text-accent-600" />
                    </div>
                    <h4 className="font-display font-bold text-primary-900 text-lg">Disponibilidad</h4>
                  </div>
                  <p className="text-primary-700 font-bold ml-16 text-lg">Lunes a Viernes: 9:00 am a 6:00 pm</p>
                  <p className="text-primary-600 ml-16">Sábados: 9:00 pm a 3:00 pm</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {whatsappContacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:-translate-y-2 flex items-center justify-center gap-2 text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FaWhatsapp className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">WhatsApp {contact.label}</span>
                </a>
              ))}
            </div>

            {/* SEO Local */}
            <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary-50 via-white to-accent-50 border border-primary-200 px-8 py-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm">
              <MapPin className="w-8 h-8 text-primary-600 flex-shrink-0" />
              <p className="text-primary-800 text-lg leading-relaxed">
                Brindamos servicio en{' '}
                <strong>Tampico, Ciudad Madero y Altamira, Tamaulipas</strong>,
                con atención rápida y profesional.
              </p>
            </div>

            {/* Tagline */}
            <div className="text-center mt-12 pt-12 border-t-2 border-primary-200">
              <p className="text-2xl font-display font-bold text-primary-900 mb-3">
                "Soluciones que conservan lo que más importa"
              </p>
              <p className="text-lg text-primary-600">Tu confianza es nuestro mayor compromiso</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
