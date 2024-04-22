import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layout";
import { SignUp, Login, ForgotPassword, ResetPassword, Home, About } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      }
    ]
  },
  {
    path: "/courses",
    element: <h>Display the all course here</h>,
    children: [
      {
        path: "course",
        element: <h1>Display all info about hte course </h1>,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
