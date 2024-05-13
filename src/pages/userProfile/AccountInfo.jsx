import { UpdateProfileInfo, UpdateUserPassword } from "../../components";

function AccountInfo() {
  return (
    <div className="p-3 ">
      <UpdateProfileInfo />
      <UpdateUserPassword />
    </div>
  );
}

export default AccountInfo;
