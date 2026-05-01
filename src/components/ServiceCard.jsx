export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-primary-200 bg-gradient-to-br from-white/95 via-primary-50/95 to-accent-50/95 p-8 shadow-md transition-all duration-300 hover:border-accent-400 hover:shadow-2xl hover:-translate-y-2"
      style={{
        animation: `slideUp 0.6s ease-out ${index * 0.1}s forwards`,
        opacity: 0,
      }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent-400/10 to-transparent rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-warm-500/10 to-transparent rounded-full blur-3xl -ml-16 -mb-16" />
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {/* Icono */}
        <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-accent-400/20 to-warm-500/20 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-accent-600 group-hover:text-warm-600 transition-colors" />
        </div>

        {/* Título */}
        <h3 className="text-xl font-display font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-primary-600 text-sm leading-relaxed mb-4 group-hover:text-primary-700 transition-colors">
          {description}
        </p>

        {/* CTA Line */}
        <div className="flex items-center gap-2 text-accent-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Saber más</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Border animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
