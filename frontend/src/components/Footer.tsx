export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} EventHub. Todos los derechos
            reservados.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Términos de servicio
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
