import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Modal from "../components/Modal";
// import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";
// import Notification from "../components/Notification";
export default function Layout() {
  // const loadFromStorage = useAppStore((state) => state.loadFromStorage);
  useEffect(() => {
    // loadFromStorage();
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
      {/* <Modal /> */}
      {/* <Notification /> */}
    </div>
  );
}
