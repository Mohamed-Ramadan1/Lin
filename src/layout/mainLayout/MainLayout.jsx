import { login } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getAllUsers } from "./../../store/adminSlice";
const MainLayout = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.userReducers);
  const { error, users } = useSelector((state) => state.adminReducers);
  const userData = { email: "ahmedMakram@gmail.com", password: "1234566789" };
  const loginHandler = () => {
    dispatch(login(userData));
  };
  const createAuser = () => {
    const userDataAcc = {
      name: "kavin",
      email: "kHALIFA@gmail.com",
      password: "12345667",
      passwordConfirm: "12345667",
      role: "admin",
    };
    dispatch(createUser(userDataAcc));
  };
  const getAllUserss = () => {
    dispatch(getAllUsers());
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
          <h1>Welcome {user.name}</h1>{" "}
          <button onClick={createAuser} className="block">
            Create new user Account
          </button>
          <button onClick={getAllUserss} className="block">
            getALlUsers
          </button>
        </>
      )}
      {error && <h1>{error}</h1>}
      {users && (
        <h1>
          {users.map((user) => (
            <div key={user._id}>{user.name}</div>
          ))}
        </h1>
      )}
    </div>
  );
};

export default MainLayout;
