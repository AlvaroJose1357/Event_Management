import { Calendar, Clock12, Edit2, MapPin, Trash2 } from "lucide-react";
import { Event } from "../types";
import { useEvents } from "../hooks/useEvents";
import { toast } from "react-toastify";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";

type EventCardProps = {
  event: Event;
};

export default function EventCard({ event }: EventCardProps) {
  const {
    setSelectedEvent,
    selectEvent,
    viewMode,
    deleteEvent,
    setModalOpen,
    setModalDeleteOpen,
    modalDeleteOpen,
  } = useEvents();

  if (!event?._id) return null;

  // const handleViewDetails = (event: Event) => () => {
  //   selectEvent(event._id);
  //   setSelectedEvent(event);
  // };
  const handleEdit = (event: Event) => () => {
    selectEvent(event._id);
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setModalDeleteOpen(false);
    deleteEvent(id);
    toast("Evento eliminado satisfactoriamente", {
      type: "error",
      closeButton: false,
    });
  };

  const handleModal = () => {
    setModalDeleteOpen(true);
  };

  return (
    <>
      {viewMode === "list" ? (
        <div className="m-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {event.name}
                </h3>
                {/* <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getEventStatusClass(event.date, event.time)}`}
                >
                  {getEventStatus(event.date, event.time)}
                </span> */}
              </div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                {event.description}
              </p>
              <div className="mt-4 flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  {event.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {event.date} {event.time}
                </div>
                <div className="flex items-center">
                  <Clock12 className="mr-2 h-4 w-4" />
                  {event.time}
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center space-x-3">
              {/* <button
                onClick={handleViewDetails(event)}
                className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <Eye className="h-5 w-5" />
              </button> */}
              <button
                onClick={handleEdit(event)}
                className="p-2 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Edit2 size={26} strokeWidth={2.75} />
              </button>
              <button
                onClick={() => handleModal()}
                className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400"
              >
                <Trash2 size={26} strokeWidth={2.75} />
              </button>
              <Transition appear show={modalDeleteOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  onClose={handleModal}
                >
                  <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="bg-opacity-50 fixed inset-0 bg-black opacity-25" />
                  </TransitionChild>

                  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                      <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                          <DialogTitle
                            as="h3"
                            className="text-lg leading-6 font-medium text-white"
                          >
                            ¿Estás seguro de eliminar el evento?
                          </DialogTitle>

                          <div className="mt-2">
                            <p className="text-sm text-white/70">
                              Esta acción eliminará permanentemente el evento.
                              ¿Deseas continuar?
                            </p>
                          </div>

                          <div className="mt-4 flex justify-end space-x-3">
                            <Button
                              type="button"
                              onClick={() => handleDelete(event._id)}
                              className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
                            >
                              Eliminar
                            </Button>

                            <Button
                              type="button"
                              onClick={() => setModalDeleteOpen(false)}
                              className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
                            >
                              Cancelar
                            </Button>
                          </div>
                        </DialogPanel>
                      </TransitionChild>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </div>
        </div>
      ) : (
        <div
          key={event._id}
          className="m-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {event.name}
              </h3>
              {/* <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getEventStatusClass(event.date, event.time)}`}
              >
                {getEventStatus(event.date, event.time)}
              </span> */}
            </div>
            <p className="mt-2 mb-4 line-clamp-2 text-sm text-gray-700 dark:text-gray-400">
              {event.description}
            </p>
            <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">{event.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
                {event.date} {event.time}
              </div>
              <div className="flex items-center">
                <Clock12 className="mr-2 h-4 w-4 flex-shrink-0" />
                {event.time}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-3 border-t bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-700/50">
            {/* <button
              onClick={handleViewDetails(event)}
              className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <Eye className="h-5 w-5" />
            </button> */}
            <button
              onClick={handleEdit(event)}
              className="p-2 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <Edit2 size={26} strokeWidth={2.75} />
            </button>
            <button
              onClick={() => handleModal()}
              className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400"
            >
              <Trash2 size={26} strokeWidth={2.75} />
            </button>
            <Transition appear show={modalDeleteOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={handleModal}>
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="bg-opacity-50 fixed inset-0 bg-black opacity-25" />
                </TransitionChild>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4">
                    <TransitionChild
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                        <DialogTitle
                          as="h3"
                          className="text-lg leading-6 font-medium text-white"
                        >
                          ¿Estás seguro de eliminar el evento?
                        </DialogTitle>

                        <div className="mt-2">
                          <p className="text-sm text-white/70">
                            Esta acción eliminará permanentemente el evento.
                            ¿Deseas continuar?
                          </p>
                        </div>

                        <div className="mt-4 flex justify-end space-x-3">
                          <Button
                            type="button"
                            onClick={() => handleDelete(event._id)}
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
                          >
                            Eliminar
                          </Button>

                          <Button
                            type="button"
                            onClick={() => setModalDeleteOpen(false)}
                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
                          >
                            Cancelar
                          </Button>
                        </div>
                      </DialogPanel>
                    </TransitionChild>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      )}
    </>
  );
}
