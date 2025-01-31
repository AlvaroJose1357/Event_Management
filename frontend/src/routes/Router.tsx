import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../layouts/Layout";
// import Loading from "../components/Loading";
// import RegisterPage from "../pages/RegisterPage";
// import LoginPage from "../pages/LoginPage";
// import Error404 from "../pages/Error404";
// import EventsPage from "../pages/EventsPage";
import ProtectedRoute from "./ProtectedRoute";

const IndexPage = lazy(() => import("../pages/HomePage"));
const EventsPage = lazy(() => import("../pages/EventsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const Error404Page = lazy(() => import("../pages/Error404"));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <IndexPage />
              </Suspense>
            }
            index
          />
          <Route
            path="/*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Error404Page />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RegisterPage />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/events"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <EventsPage />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
