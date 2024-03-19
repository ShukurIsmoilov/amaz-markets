import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { BuyAccountPage } from "./pages/buy-account";
import { SellAccountPage } from "./pages/sell-account";
import { ServicesPage } from "./pages/services";
import { BlogPage } from "./pages/blog";
import { SearchPage } from "./pages/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/buy-account",
        element: <BuyAccountPage />,
      },
      {
        path: "/sell-account",
        element: <SellAccountPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ]
  },
]);

export { router };