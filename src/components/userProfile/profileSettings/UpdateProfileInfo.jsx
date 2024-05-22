import { Form } from "react-router-dom";
import { customFetch } from "./../../../utils/customFetch";
import { toast } from "react-toastify";
import { store } from "../../../store/store";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("photo");
  const email = formData.get("email");
  if (!file) {
    formData.delete("photo");
  }
  if (email === "") {
    formData.delete("email");
  }

  if (file && file.size > 500000) {
    toast.error("Image size too large");
    return null;
  }
  const { token } = store.getState().userReducers;
  try {
    const res = await customFetch.patch("/users/updateInfo", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success("Profile updated successfully");
    return res;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
    return null;
  }
};

const UpdateProfileInfo = () => {
  return (
    <Form
      method="post"
      encType="multipart/form-data"
      className="container w-full max-w-[1400px] m-auto flex gap-10 flex-col justify-start items-start"
    >
      <div className="grid grid-cols-1 gap-3 w-full  ">
        <div className="inputField w-full flex flex-col gap-[8px] mt-2">
          <label
            htmlFor="email"
            className="text-[16px] font-medium text-[#0C1421] "
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            className="w-full h-[48px] p-[16px] outline-none transition ease-in-out focus:border-[#9747FF] focus:bg-[#f3eafd]  bg-[#f9f4ff] rounded-[12px]  border-[1px] border-[#D4D7E3] "
          />
        </div>

        <div className="grid grid-cols-1 gap-3 w-full  ">
          <label
            htmlFor="photo"
            className="text-[16px] font-medium text-[#0C1421] "
          >
            Select an image file (max 0.5 MB)
          </label>
          <input
            type="file"
            id="avatar"
            name="photo"
            accept="image/*"
            className="w-full h-[48px] p-[16px] outline-none transition ease-in-out focus:border-[#9747FF] focus:bg-[#f3eafd]  bg-[#f9f4ff] rounded-[12px]  border-[1px] border-[#D4D7E3] "
          />
        </div>

        <button
          type="submit"
          className="p-5 mt-7 bg-blue-600 text-white w-full h-[55px] rounded-[12px]  outline-none"
        >
          Update
        </button>
      </div>
    </Form>
  );
};

export default UpdateProfileInfo;
