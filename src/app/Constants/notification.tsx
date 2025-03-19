import { toast, ToastOptions } from "react-toastify";

const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

export const Notification = {
    success: (message: string): void => {
        toast.success(message, toastOptions);
    },
    error: (message: string): void => {
        toast.error(message, toastOptions);
    },
    warning: (message: string): void => {
        toast.warn(message, toastOptions);
    },
    info: (message: string): void => {
        toast.info(message, toastOptions);
    },
};
