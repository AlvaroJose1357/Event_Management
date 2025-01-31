import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=2070"
          alt="Background"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="mx-auto max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          <h1 className="mb-6 text-4xl font-bold text-white drop-shadow-xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to EventHub
          </h1>
          <p className="mb-12 text-lg text-gray-200 md:text-xl lg:mb-16 lg:text-2xl">
            Your premier destination for discovering and managing amazing events
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              to="/register"
              className="transform rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 md:px-10 md:py-5 md:text-xl"
            >
              Get Started
            </Link>
            <Link
              to="/events"
              className="transform rounded-xl bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 md:px-10 md:py-5 md:text-xl"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </div>

      {/* Efecto de borde decorativo */}
      <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}
