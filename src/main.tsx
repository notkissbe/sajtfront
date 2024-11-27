import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Kereses from "./pages/Kereses";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/header";
import Listazas from "./pages/Listazas";
import Layout from "./pages/Layout";
import Rendezes from "./pages/Rendezes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "listazas",
        element: <Listazas />
      },
      {
        path: "kereses",
        element: <Kereses />
      },
      {
        path: "rendezes",
        element: <Rendezes />
      }
    ]
    
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
