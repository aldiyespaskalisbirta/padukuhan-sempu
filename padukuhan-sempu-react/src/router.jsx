import { Navigate, createBrowserRouter } from "react-router-dom";
import Budaya from "./pages/Budaya";
import Gallery from "./pages/Gallery";
import Kontak from "./pages/Kontak";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./pages/Home";
import Images from "./components/Gallery/Images";
import UploadImage from "./components/Gallery/UploadImage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/budaya",
        element: <Budaya />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
        children: [
          {
            path: "add-image",
            element: <UploadImage />,
          },
          {
            path: "images",
            element: <Images />,
          },
        ],
      },
      {
        path: "/kontak",
        element: <Kontak />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
