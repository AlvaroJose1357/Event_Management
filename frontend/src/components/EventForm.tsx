import { useForm } from "react-hook-form";
import { EventFormData } from "../types";
import Error from "./Error";
import { useEvents } from "../hooks/useEvents";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function EventForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<EventFormData>();
  const {
    createEvent,
    filteredEvents,
    updateEvent,
    selectedEvent,
    setModalOpen,
    setSelectedEvent,
  } = useEvents();

  useEffect(() => {
    if (selectedEvent) {
      // se le coloca [0] para que devuelva el objeto y no el array
      const activeEvent = filteredEvents.filter(
        (event) => event._id === selectedEvent._id,
      )[0];
      setValue("name", activeEvent.name);
      setValue("description", activeEvent.description);
      setValue("location", activeEvent.location);
      setValue("date", activeEvent.date);
      setValue("time", activeEvent.time);
    }
  }, [selectedEvent]);

  const handleFormSubmit = (data: EventFormData) => {
    if (selectedEvent) {
      updateEvent(selectedEvent._id, data);
      toast("Evento actualizado satisfactoriamente", {
        type: "info",
        closeButton: false,
      });
    } else {
      createEvent(data);
      toast("Evento creado satisfactoriamente", {
        type: "success",
        closeButton: false,
      });
      // toast.success("Paciente añadido correctamente");
    }
    reset();
    setModalOpen(false);
    setSelectedEvent(null);
    setSelectedEvent(null);
  };

  return (
    <div>
      <h2 className="block text-center text-2xl font-bold text-black">
        {selectedEvent ? "Edit Event" : "Create Event"}
      </h2>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
        className="space-y-4"
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-black"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border-black p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-600 dark:text-white"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && <Error>{errors.name.message?.toString()}</Error>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-black"
          >
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-600 dark:text-white"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <Error>{errors.description.message?.toString()}</Error>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-black"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-600 dark:text-white"
            {...register("location", {
              required: "Location is required",
            })}
          />
          {errors.location && (
            <Error>{errors.location.message?.toString()}</Error>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-black"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-600 dark:text-white"
            {...register("date", {
              required: "Date is required",
            })}
          />
          {errors.date && <Error>{errors.date.message?.toString()}</Error>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-black"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-600 dark:text-white"
            {...register("time", {
              required: "Time is required",
            })}
          />
          {errors.time && <Error>{errors.time.message?.toString()}</Error>}
        </div>

        <button
          type="submit"
          className="flex-1 justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800"
        >
          {selectedEvent ? "Update Event" : "Create Event"}
        </button>
      </form>
    </div>
  );
}
