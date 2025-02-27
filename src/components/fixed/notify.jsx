import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (message, type) => {
  if (type === "success") {
    toast.success(message);
  } else if (type === "warn") {
    toast.warn(message);
  } else if (type === "error") {
    toast.error(message);
  }
};
