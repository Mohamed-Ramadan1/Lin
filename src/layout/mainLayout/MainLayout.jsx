import { useSelector, useDispatch } from "react-redux";
import {
  login,
  logout,
  signUp,
  deleteUserAccount,
  updateUserPassword,
  updateUserInfo,
  unActiveUserAccount,
} from "./../../store/userSlice";

const signUpData = {
  name: "Mohamed-Ramadan",
  email: "ahmedMakram@gmail.com",
  password: "1234566789",
  passwordConfirm: "1234566789",
};

const loginData = {
  email: "ahmedMakram@gmail.com",
  password: "1234566789",
};

// const resetPasswrdData = {
//   password: "123456789",
//   passwordConfirm: "123456789",
//   resetToken:
//     "4618b98f86023322314168dd3e0005a39fc5751fd13165b2c269f342fa1b265e",
// };

const upPassData = {
  passwordCurrent: "123456678",
  password: "12345678910",
  passwordConfirm: "12345678910",
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
  // const resetPasswordSite = () => {
  //   dispatch(resetPassword(resetPasswrdData));
  // };

  const updatePasswordSit = () => {
    dispatch(updateUserPassword(upPassData));
  };

  const userUdata = {
    name: "kinga7a",
    email: "fuc@gmail.com",
  };

  const updateInfoSite = () => {
    dispatch(updateUserInfo(userUdata));
  };
  const deletAcc = () => {
    dispatch(deleteUserAccount());
  };
  const unActive = () => {
    dispatch(unActiveUserAccount());
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
          {/* <button onClick={resetPasswordSite} type="button" className="block">
            ResetPassword
          </button> */}
        </div>
      )}
      {isLoggedIn && user && (
        <div>
          <button onClick={logoutSite} type="button" className="block">
            Log-Out
          </button>
          <button onClick={updatePasswordSit} type="button" className="block">
            Update your password
          </button>
          <button onClick={updateInfoSite} type="button" className="block">
            update info
          </button>
          <p className="block">{user.name}</p>
          <button onClick={deletAcc} type="button" className="block">
            delete your account
          </button>
          <button onClick={unActive} type="button" className="block">
            un Active your account
          </button>
        </div>
      )}
    </>
  );
};

export default MainLayout;
