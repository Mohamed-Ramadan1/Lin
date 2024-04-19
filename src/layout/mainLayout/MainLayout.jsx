import { login } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.userReducers);

  const userData = { email: "ahmedMakram@gmail.com", password: "1234566789" };

  const loginHandler = () => {
    dispatch(login(userData));
  };

  return (
    <div>
      {!user && (
        <button onClick={loginHandler} className="block">
          login
        </button>
      )}
      {isLoggedIn && (
        <>
          <h1>Welcome {user.name}</h1>
        </>
      )}
    </div>
  );
};

export default MainLayout;
