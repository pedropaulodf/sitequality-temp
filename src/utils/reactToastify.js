import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastSuccess = (message = "Ação concluída com sucesso!", autoCloseMili = 1700) => {
  // Emite o toast
  toast.success(message, {
    position: "bottom-center",
    autoClose: autoCloseMili,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    theme: "colored",
  });
};

export const toastError = (message = "Ação concluída com sucesso!", autoCloseMili = 3500) => {
  // Emite o toast
  toast.error(message, {
    position: "bottom-center",
    autoClose: autoCloseMili,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    theme: "colored",
  });
};

