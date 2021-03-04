import { toast } from "react-toastify";

const showSuccess = (msg) => {
  toast.success(msg);
};
const showInfo = (msg) => {
  toast.info(msg);
};
const showWarning = (msg) => {
  toast.warning(msg);
};
const showError = (msg) => {
  toast.error(msg);
};

const errorMsg = (error) => {
  debugger;
  let errorMessage = "somethig went wrong";
  let err = error && error.response;
  if (err && err.data) {
    errorMessage = err.data.msg;
  }
  showError(errorMessage);
};

const toastify = {
  showSuccess,
  showInfo,
  showWarning,
  errorMsg,
  showError
};
export default toastify;
