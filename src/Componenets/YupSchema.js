import * as yup from "yup";
export const YupSchema = yup.object().shape({
  Name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),

  information: yup
    .string()
    .required("Please enter a message")
    .min(10, "Message must be longer"),
});
