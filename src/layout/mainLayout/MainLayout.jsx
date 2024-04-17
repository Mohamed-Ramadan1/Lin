import { useSelector, useDispatch } from "react-redux";
import { login, logout, signUp, resetPassword } from "./../../store/userSlice";

const signUpData = {
  name: "Mohamed-Ramadan",
  email: "ahmedMakram@gmail.com",
  password: "1234566789",
  passwordConfirm: "1234566789",
};

const loginData = {
  email: "ahmedMakram@gmail.com",
  password: "123456789",
};

const resetPasswrdData = {
  password: "123456789",
  passwordConfirm: "123456789",
  resetToken:
    "4618b98f86023322314168dd3e0005a39fc5751fd13165b2c269f342fa1b265e",
};

const MainLayout = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.userReducers);

  const loginSite = () => {
    dispatch(login(loginData));
  };
  const signupSite = () => {
    dispatch(signUp(signUpData));
  };
  const logoutSite = () => {
    dispatch(logout());
  };
  const resetPasswordSite = () => {
    dispatch(resetPassword(resetPasswrdData));
  };

  return (
    <>
      {!isLoggedIn && (
        <div>
          <button onClick={signupSite} type="button" className="block">
            SignUp
          </button>
          <button onClick={loginSite} type="button" className="block">
            Login
          </button>
          <button onClick={resetPasswordSite} type="button" className="block">
            ResetPassword
          </button>
        </div>
      )}
      {isLoggedIn && user && (
        <div>
          <button onClick={logoutSite} type="button" className="block">
            Log-Out
          </button>
          <p className="block">{user.name}</p>
        </div>
      )}
    </>
  );
};

export default MainLayout;
