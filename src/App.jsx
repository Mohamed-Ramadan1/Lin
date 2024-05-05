import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout, AdminLayout } from "./layout";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "./store/userSlice";

import {
  SignUp,
  Login,
  ForgotPassword,
  ResetPassword,
  Home,
  About,
  Profile,
  Dashboard,
  FreeCourses,
  PaiedCourses,
  Users,
  Reservations,
  Settings,
  CreateCourses,
  Instructors,
} from "./pages";
import ViewCourses from "./pages/ViewCourses";
import DetailsCourse from "./pages/DetailsCourse";

//Profile Imports
import PublicProfile from "./components/profileConponents/PublicProfile";
import { useEffect } from "react";
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
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "freeCourses",
        element: <FreeCourses />,
      },
      {
        path: "paidCourses",
        element: <PaiedCourses />,
      },
      {
        path: "createCourses",
        element: <CreateCourses />,
      },

      {
        path: "users",
        element: <Users />,
      },
      {
        path: "reservations",
        element: <Reservations />,
      },
      {
        path: "settings",
        element: <Settings />,
      },

      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "addcourse",
        element: <CreateCourses />,
      },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
