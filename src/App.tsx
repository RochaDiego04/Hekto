import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store";

import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import MainLayout from "./layout/MainLayout";
import ProductsPage from "./pages/Products/ProductsPage";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

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
        { path: "cart", element: <ShoppingCart /> },
      ],
    },
    { path: "*", element: <NotFound /> }, // 404 page without layout
  ]);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
