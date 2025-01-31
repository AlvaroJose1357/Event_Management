import { useContext } from "react";
import { EventContext } from "../context/EventsContext";

export const useEvents = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
