import { useDispatch } from "react-redux";
import { signUp } from "./store/userSlice";
const App = () => {
  const dispatch = useDispatch();
  const userData = {
    name: "king",
    email: "king@gmail.com",
    password: "123456789",
    passwordConfirm: "123456789",
  };

  const makeRequest = () => {
    dispatch(signUp(userData));
  };

  return (
    <button type="button" onClick={makeRequest}>
      Submit
    </button>
  );
};

export default App;
