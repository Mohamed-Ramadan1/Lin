import { useDispatch, useSelector } from "react-redux";
import { login, signUp } from "./store/userSlice";
const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.userReducers.isLoggedIn);
  const userData = {
    name: "king",
    email: "king@gmail.com",
    password: "123456789",
    passwordConfirm: "123456789",
  };
  const logUserData = {
    email: "king@gmail.com",
    password: "123456789",
  };

  const signReq = () => {
    dispatch(signUp(userData));
  };
  const logReq = () => {
    dispatch(login(logUserData));
  };
  const user = useSelector((state) => state.userReducers.user);

  const getUser = () => {
    console.log(user);
  };
  return (
    <>
      <button type="button" onClick={signReq} className="block">
        Submit
      </button>
      {!isLoggedIn && (
        <button type="button" onClick={logReq} className="block">
          login
        </button>
      )}
      <button type="button" onClick={getUser} className="block">
        get user
      </button>
    </>
  );
};

export default App;
