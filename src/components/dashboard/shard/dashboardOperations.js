import { store } from "../../../store/store";
import { toast } from "react-toastify";
import { customFetch } from "../../../utils/customFetch";

export const handelOperationRequest = async (
  confirmText,
  endPoint,
  successMessage,
  failedMessage,
  setIsChanged
) => {
  const isConfirmed = window.confirm(confirmText);
  if (!isConfirmed) return;

  try {
    await customFetch.patch(
      endPoint,
      {},
      {
        headers: {
          Authorization: `Bearer ${store.getState().userReducers.token}`,
        },
      }
    );

    setIsChanged(true);
    toast.success(successMessage);
  } catch (error) {
    console.log(error.message);
    toast.error(failedMessage);
  }
};

export const deleteOperationRequests = async (
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
