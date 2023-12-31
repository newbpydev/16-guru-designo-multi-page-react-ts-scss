import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import WebDesignPage from "./pages/WebDesignPage";
import AppDesignPage from "./pages/AppDesignPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import AboutPage from "./pages/AboutPage";
import LocationsPage from "./pages/LocationsPage";
import ContactPage from "./pages/ContactPage";
import AppLayout from "./pages/layouts/AppLayout";

//* COMPONENT: App
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "", element: <HomePage /> },
        {
          path: "designs",
          element: <Navigate to={"/designs/web-design"} replace />,
          children: [
            { path: "web-design", element: <WebDesignPage /> },
            { path: "app-design", element: <AppDesignPage /> },
            { path: "graphic-design", element: <GraphicDesignPage /> },
          ],
        },
        // { path: "web-design", element: <WebDesignPage /> },
        // { path: "app-design", element: <AppDesignPage /> },
        // { path: "graphic-design", element: <GraphicDesignPage /> },
        { path: "about", element: <AboutPage /> },
        { path: "locations", element: <LocationsPage /> },
        { path: "contact", element: <ContactPage /> },
        // Error Output
        { path: "*", element: <h1>Oops there was an error</h1> },
      ],
    },
  ]);

  // output
  return <RouterProvider router={router} />;
}
