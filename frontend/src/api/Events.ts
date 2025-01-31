import axiosInstance from "../config/axios";
import { EventFormData } from "../types";

export const getEventsRequest = async () => {
  return axiosInstance.get("/events");
};

export const getEventRequest = async (id: string) => {
  return axiosInstance.get(`/events/${id}`);
};

export const createEventRequest = async (data: EventFormData) => {
  return axiosInstance.post("/events", data);
};

export const updateEventRequest = async (id: string, data: EventFormData) => {
  return axiosInstance.put(`/events/${id}`, data);
};

export const deleteEventRequest = async (id: string) => {
  return axiosInstance.delete(`/events/${id}`);
};
