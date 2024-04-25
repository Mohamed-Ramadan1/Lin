import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layout";
import {
  SignUp,
  Login,
  ForgotPassword,
  ResetPassword,
  Home,
  About,
  Profile,
} from "./pages";
import ViewCourses from "./pages/ViewCourses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/courses",
        element: <ViewCourses />,
        children: [
          {
            path: "course",
            element: <h1>Display all info about hte course </h1>,
          },
        ],
      },
    ],
  },
  

  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        index: true,
        element: <h1></h1>,
      },
    ],
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
    path: "/resetpassword/:resetToken",
    element: <ResetPassword />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
