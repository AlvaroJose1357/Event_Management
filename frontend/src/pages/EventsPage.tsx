import { useEffect } from "react";
import { useEvents } from "../hooks/useEvents";
import Filters from "../components/Filters";
import UserProfile from "../components/UserProfile";
import EventCard from "../components/EventCard";

export default function EventsPage() {
  const {
    getEvents,
    filteredEvents,
    viewMode,
    // events
  } = useEvents(); // Añadir events aquí

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="flex h-full flex-col md:flex-row">
      <div className="w-full flex-1 p-4">
        <Filters />

        {/* {events.length === 0 ? (
          <div className="p-8 text-center text-gray-600">Loading events...</div>
        ) : ( */}
        <>
          {viewMode === "list" ? (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredEvents
                .filter((event) => event?._id) // Filtra eventos inválidos
                .map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
              {filteredEvents
                .filter((event) => event?._id) // Filtra eventos inválidos
                .map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
            </div>
          )}

          {filteredEvents.length === 0 && (
            <div className="p-8 text-center font-bold text-gray-600">
              No events found
            </div>
          )}
        </>
        {/* )} */}
      </div>
      <UserProfile />
    </div>
  );
}
