import { Fragment } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useEvents } from "../hooks/useEvents";
import { Event } from "../types";

type EventDetailProps = {
  event: Event;
};

export default function EventDetail({ event }: EventDetailProps) {
  const { modalOpen, setModalOpen, setSelectedEvent } = useEvents();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };
  return (
    <>
      <div className="right-5 bottom-5 flex items-center justify-center">
        <button type="button" onClick={handleOpenModal}>
          <PlusCircleIcon className="h-16 w-16 rounded-full text-blue-600" />
        </button>
      </div>

      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-50" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="my-5 text-center text-4xl font-extrabold text-gray-900"
                  >
                    {event.location}
                  </DialogTitle>
                  <DialogTitle
                    as="h3"
                    className="my-5 text-2xl font-extrabold text-gray-900"
                  >
                    descripcion
                  </DialogTitle>
                  {event.description}
                  <div className="jistifybetween mt-5 flex gap-4">
                    <button
                      type="button"
                      className="w-full rounded bg-gray-600 p-3 font-bold text-white uppercase shadow hover:bg-gray-500"
                      onClick={handleCloseModal}
                    >
                      Cerrar
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
