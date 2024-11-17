import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignIn } from "./pages/auth/sign-in";
import { HomeLayout } from "./pages/app/home";
import { AppLayout } from "./pages/_layouts/app";
import { CartaoLayout } from "./pages/app/cartao";
import { BoletoLayout } from "./pages/app/boleto";
import { PixLayout } from "./pages/app/pix";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomeLayout /> },
      {
        path: "cartao",
        element: <CartaoLayout />,
      },
      {
        path: "boleto",
        element: <BoletoLayout />,
      },
      {
        path: "pix",
        element: <PixLayout />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
]);
