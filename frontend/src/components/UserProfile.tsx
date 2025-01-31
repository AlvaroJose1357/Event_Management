import { LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

export default function UserProfile() {
  const { logout, user } = useAuth();
  return (
    <div className="sticky top-0 h-full space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:w-1/4 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-[calc(100vh-140px)] flex-col justify-between space-y-6 rounded-lg bg-white p-6 shadow-sm md:h-[calc(100vh-100px)] dark:bg-gray-800">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
              <User className="h-12 w-12 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Welcome {user?.name}
          </h2>
          <p className="mt-1 text-lg text-gray-600 dark:text-gray-400">
            {user?.email}
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Espero te encuentres bien el dia de hoy {user?.name}, que tengas un
            excelente dia.
          </p>
        </div>

        {/* <div className="border-t pt-6 dark:border-gray-700">
          <h3 className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            Event Statistics
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Total Events
                </span>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {events.length}
                </span>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Active Events
                </span>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {
                    events.filter(
                      (e) => getEventStatus(e.date, e.time) === "active",
                    ).length
                  }
                </span>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Upcoming Events
                </span>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {
                    events.filter(
                      (e) => getEventStatus(e.date, e.time) === "upcoming",
                    ).length
                  }
                </span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="pt-6">
          <Link
            to="/"
            onClick={() => {
              logout();
              toast("Usuario desloqueado, nos vemos pronto 👋", {
                type: "error",
                closeButton: false,
                // icon(props) {
                //   return (
                //     <div className="rounded-full bg-red-500 p-2 text-white">
                //       <LogOut {...props} />
                //     </div>
                //   );
                // },
              });
            }}
            className="flex w-full items-center justify-center space-x-2 rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
