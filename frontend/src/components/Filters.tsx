import { Calendar, Grid, List, MapPin, RefreshCw, Search } from "lucide-react";
import { useEvents } from "../hooks/useEvents";
import ExpenseModal from "./Modal";

export default function Filters() {
  const {
    viewMode,
    setViewMode,
    locationFilter,
    setLocationFilter,
    dateFilter,
    setDateFilter,
    searchTerm,
    setSearchTerm,
    getEvents,
  } = useEvents();

  return (
    <div className="border-b border-gray-200 p-6 dark:border-gray-700">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Events
          </h2>
          {/* <button
            // onClick={() => setShowEventForm(true)}
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800"
          >
            <Plus className="mr-2 h-4 w-4" />
            New Event
          </button> */}
          <ExpenseModal />
        </div>

        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:space-x-4">
          <div className="flex-1">
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // En todos los inputs:
                className="block w-full rounded-md border-gray-400 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Search events..."
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-md p-2 ${viewMode === "grid" ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`rounded-md p-2 ${viewMode === "list" ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MapPin className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="block w-full rounded-md border-gray-400 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Filter by location..."
              />
            </div>
          </div>
          <div>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Calendar className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                // En todos los inputs:
                className="block w-full rounded-md border-gray-400 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <button onClick={() => getEvents()} className="...">
            <RefreshCw size={26} strokeWidth={2.75} className="text-blue-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
