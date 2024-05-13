// import UpdateProfileInfo from "./../components/profileConponents/UpdateProfileInfo";
// import UpdateUserPassword from "./../components/profileConponents/UpdateUserPassword";

import UpdateProfileInfo from "../../components/profileConponents/UpdateProfileInfo";
import UpdateUserPassword from "../../components/profileConponents/UpdateUserPassword";

function AccountInfo() {
  return (
    <div className="p-3 ">
      <UpdateProfileInfo />
      <UpdateUserPassword />
    </div>
  );
}

export default AccountInfo;
