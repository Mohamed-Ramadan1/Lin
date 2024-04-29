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
import DetailsCourse from "./pages/DetailsCourse";

//Profile Imports
import PublicProfile from "./components/profileConponents/PublicProfile";
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
        path: "instructor",
        element: <h1>Try to become instructor</h1>,
      },
      {
        path: "blog",
        element: <h1>I have the blog right here pro</h1>,
      },
      {
        path: "courses",
        element: <ViewCourses />,
      },
      {
        path: "courses/:courseId",
        element: <DetailsCourse />,
      },
    ],
  },

  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        index: true,
        element: <PublicProfile />,
      },
      {
        path: "mytasks",
        element: <h1>My Tasks</h1>,
      },
      {
        path: "favorites",
        element: <h1>Favorites</h1>,
      },
      {
        path: "chat",
        element: <h1>Chat With Me</h1>,
      },
      {
        path: "settings",
        element: <h1>Settings</h1>,
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
