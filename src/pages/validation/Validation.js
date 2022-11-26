import * as Yup from "yup";
export const addSmsSchema = Yup.object().shape({
  sms: Yup.string()
    .min(2, "Too Short!")
    .required("SMS is required field")
});

export const sendSmsSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(12, "Phone Number must be at least 12 digit")
    .max(12, "Phone Number must be less than 13 digit")
    .required("Phone Number is required field")
});

