import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import MainLayout from "./layout/MainLayout";
import ProductsPage from "./pages/Products/ProductsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DetailProduct from "./pages/DetailProduct/DetailProduct";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <ProductsPage /> },
        { path: "products/:productId", element: <DetailProduct /> },
      ],
    },
    { path: "*", element: <NotFound /> }, // 404 page without layout
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
