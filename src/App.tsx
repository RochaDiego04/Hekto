import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import TopBar from "./components/TopBar";

import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import MainLayout from "./layout/Mainlayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />, // Main layout for all common pages
      children: [
        { index: true, element: <Home /> }, // Default home page
      ],
    },
    { path: "*", element: <NotFound /> }, // 404 page without layout
  ]);

  return <RouterProvider router={router} />;
}

export default App;
