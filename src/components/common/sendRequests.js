import { store } from "../../store/store";
import { toast } from "react-toastify";
import { customFetch } from "../../utils/customFetch";

export const sendPostRequest = async (
  endPoint,
  data,
  successMessage,
  failedMessage,
  setIsChanged,
  actions
) => {
  try {
    await customFetch.post(endPoint, data, {
      headers: {
        Authorization: `Bearer ${store.getState().userReducers.token}`,
      },
    });

    setIsChanged(true);
    actions.resetForm();
    toast.success(successMessage);
  } catch (error) {
    console.log(error);
    toast.error(failedMessage);
  }
};

export const sendPatchRequest = async (
  endPoint,
  data,
  confirmText,
  successMessage,
  failedMessage,
  setIsChanged
) => {
  const isConfirmed = window.confirm(confirmText);
  if (!isConfirmed) return;

  try {
    await customFetch.patch(endPoint, data, {
      headers: {
        Authorization: `Bearer ${store.getState().userReducers.token}`,
      },
    });

    setIsChanged(true);
    toast.success(successMessage);
  } catch (error) {
    console.log(error.message);
    toast.error(failedMessage);
  }
};

export const sendDeleteRequest = async (
  confirmText,
  endPoint,
  successMessage,
  failedMessage,
  setIsChanged
) => {
  const isConfirmed = window.confirm(confirmText);
  if (!isConfirmed) return;

  try {
    await customFetch.delete(endPoint, {
      headers: {
        Authorization: `Bearer ${store.getState().userReducers.token}`,
      },
    });

    setIsChanged(true);
    toast.success(successMessage);
  } catch (error) {
    console.log(error.message);
    toast.error(failedMessage);
  }
};
