import { toast } from "react-toastify";

const ErrorHandler = (data) => {
  if (data.meta.rejectedWithValue && data.meta.requestStatus === "rejected") {
    console.log(data);

    const { payload } = data;
    if (Array.isArray(data.payload)) {
      payload.forEach((item) => {
        for (const property in item) {
          toast.error(item[property].toUpperCase());
        }
      });
    } else {
      if (typeof payload === "string" || payload instanceof String) {
        if (payload.includes("Cannot read properties")) {
          toast.error(
            "Something Went Wrong, Please Contact The Developers Team"
          );
        } else {
          toast.error(payload);
        }
      } else if (payload?.response?.data?.statusCode === 401) {
        toast.error(
          "Authentication failed, you are not allowed to do this action, SignIn First.!"
        );
      } else {
        toast.error("Error, Something gone Wrong...");
      }
    }
  }
};

export default ErrorHandler;
