import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { logout, login, updateUserPassword } from "../../store/userSlice";
const MainLayout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(logout())} type="button">
        log out
      </button>
      <button
        className="block"
        onClick={() =>
          dispatch(
            login({ email: "ahmedMakram@gmail.com", password: "1234566789" })
          )
        }
        type="button"
      >
        log in
      </button>
      <button
        className="block"
        onClick={() =>
          dispatch(
            updateUserPassword({
              passwordCurrent: "12345667899",
              password: "123456789101",
              passwordConfirm: "123456789101",
            })
          )
        }
        type="button"
      >
        update password
      </button>
      {/* {    <Header />
    <Footer />} */}
    </div>
  );
};

export default MainLayout;
