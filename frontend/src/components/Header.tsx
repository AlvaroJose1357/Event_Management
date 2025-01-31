import { CircleUserRound, Moon, Music, Sun, UserRoundPen } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEvents } from "../hooks/useEvents";

export default function Header() {
  const { isAuth } = useAuth();
  const { isDarkMode, setIsDarkMode } = useEvents();
  return (
    <header className="bg-white shadow-sm dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Music className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <Link to={isAuth ? "/events" : "/"}>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                EventHub
              </h1>
            </Link>
          </div>
          <div className="hidden items-center space-x-3 md:flex">
            <ul className="flex items-center space-x-3">
              {isAuth ? (
                <>
                  {/* <h3 className="text-dark font-bold dark:text-white">
                    Welcome {user?.name}
                  </h3>
                  <li>
                    <Link
                      to="/"
                      onClick={() => logout()}
                      className="flex rounded-3xl bg-indigo-500 px-4 py-1 text-white"
                    >
                      <CircleX size={28} strokeWidth={2.25} />
                      Logout
                    </Link>
                  </li> */}
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="flex rounded-3xl bg-indigo-500 px-4 py-1 text-white"
                    >
                      <CircleUserRound size={24} strokeWidth={2.25} />
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Register"
                      className="flex items-center rounded-3xl bg-indigo-500 px-4 py-1 text-white"
                    >
                      <UserRoundPen size={24} strokeWidth={2.25} />
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
