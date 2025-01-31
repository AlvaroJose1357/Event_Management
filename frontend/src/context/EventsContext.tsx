import { createContext, useEffect, useState } from "react";
import { Event, EventFormData } from "../types";
import {
  createEventRequest,
  deleteEventRequest,
  getEventRequest,
  getEventsRequest,
  updateEventRequest,
} from "../api/Events";

type EventContextProps = {
  events: Event[];
  getEvents: () => void;
  selectEvent: (id: string) => void;
  createEvent: (data: EventFormData) => void;
  updateEvent: (id: string, data: EventFormData) => void;
  deleteEvent: (id: string) => void;
  filteredEvents: Event[];
  selectedEvent: Event | null;
  searchTerm: string;
  locationFilter: string;
  dateFilter: string;
  viewMode: "grid" | "list";
  modalOpen: boolean;
  modalDeleteOpen: boolean;
  isDarkMode: boolean;
  setSearchTerm: (term: string) => void;
  setLocationFilter: (location: string) => void;
  setDateFilter: (date: string) => void;
  setViewMode: (mode: "grid" | "list") => void;
  setModalOpen: (open: boolean) => void;
  setModalDeleteOpen: (open: boolean) => void;
  setIsDarkMode: (darkMode: boolean) => void;
  setSelectedEvent: (event: Event | null) => void;
};

type EventProviderProps = {
  children: React.ReactNode;
};

export const EventContext = createContext<EventContextProps>(null!);

export const EventProvider = ({ children }: EventProviderProps) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  useEffect(() => {
    filterEvents();
  }, [events, searchTerm, locationFilter, dateFilter]);

  useEffect(() => {
    setFilteredEvents(events); // Inicialmente mostrar todos los eventos
  }, [events]);

  const filterEvents = () => {
    let filtered = [...events]; // Ahora siempre es un array

    if (searchTerm) {
      filtered = filtered.filter(
        (event) =>
          event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description?.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (locationFilter) {
      filtered = filtered.filter((event) =>
        event.location.toLowerCase().includes(locationFilter.toLowerCase()),
      );
    }

    if (dateFilter) {
      filtered = filtered.filter((event) => event.date.includes(dateFilter));
    }

    setFilteredEvents(filtered);
  };

  const selectEvent = async (id: string) => {
    const rest = await getEventRequest(id);
    console.log(rest.data.data);
    setSelectedEvent(rest.data.data);
  };

  const getEvents = async () => {
    const res = await getEventsRequest();
    console.log(res.data.data);
    setEvents(res.data.data);
  };
  const createEvent = async (data: EventFormData) => {
    try {
      await createEventRequest(data);
      // Recargar los eventos después de crear
      const updatedEvents = await getEventsRequest();
      setEvents(updatedEvents.data.data);
      return true;
    } catch (error) {
      console.error("Error creating event:", error);
      return false;
    }
  };

  const updateEvent = async (id: string, data: EventFormData) => {
    try {
      await updateEventRequest(id, data);
      // Recargar los eventos después de actualizar
      const updatedEvents = await getEventsRequest();
      setEvents(updatedEvents.data.data);
      return true;
    } catch (error) {
      console.error("Error updating event:", error);
      return false;
    }
  };
  const deleteEvent = async (id: string) => {
    console.log(id);
    try {
      await deleteEventRequest(id);
      // Elimina el evento del estado local
      setEvents((prev) => prev?.filter((event) => event._id !== id));
      setFilteredEvents((prev) => prev?.filter((event) => event._id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <EventContext.Provider
      value={{
        events,
        filteredEvents,
        getEvents,
        createEvent,
        updateEvent,
        deleteEvent,
        selectEvent,
        viewMode,
        setViewMode,
        locationFilter,
        setSelectedEvent,
        selectedEvent,
        setLocationFilter,
        dateFilter,
        setDateFilter,
        searchTerm,
        setSearchTerm,
        modalOpen,
        setModalOpen,
        modalDeleteOpen,
        setModalDeleteOpen,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
