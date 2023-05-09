import React from "react";
import { useFormik } from "formik";
import { YupSchema } from "./YupSchema";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export default function Form(props) {
  const form = React.useRef();
  const [key, setKey] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  // handle submit function that resets form then redirects user to home page
  const onSubmit = () => {
    formik.resetForm();
    emailjs.sendForm(
      "service_kvz3xos",
      "template_6kj9fzq",
      form.current,
      "RArIw0xMApVfI2_r8"
    );
    setSubmitted(true);
    setKey(1);
    setTimeout(() => {
      setKey(0);
      setSubmitted(false);
    }, 4000);
  };
  // formik object to handle form state changes + validation
  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      information: "",
    },
    validationSchema: YupSchema,
    onSubmit,
  });
  return (
    // form section
    <form ref={form} onSubmit={formik.handleSubmit} autoComplete="off">
      {/* flex container for the form elements */}
      <div className="w-[90vw] lg:w-[70vw] xlg:w-[1000px]  mt-[50px] h-[500px] sm:h-[600px] md:h-[650px] mb-[50px] border-greenM border-[5px]  rounded-[2%] xlg:rounded-[2%] flex flex-col items-center justify-center  ">
        <div
          key="modal"
          className="  flex flex-col scale-[0.75] sm:scale-[0.9] md:scale-[1] items-center justify-center  "
        >
          <h2 className=" text-[25px] text-center  lg:text-[40px] mb-[30px] text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-greenM via-pink-400 to-pink-900  font-secondary font-bold ">
            fill the information below
          </h2>
          <label>
            <h2 className="text-[20px] lg:text-[25px] scale-[1.2] mb-[10px] text-greenM font-medium font-primary ">
              Name
            </h2>
          </label>
          <div className="flex flex-row h-[40px] scale-[1.2] space-x-3">
            <div className="flex-col space-y-0">
              {" "}
              <input
                value={formik.values.Name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                id="Name"
                type={"text"}
                name={"Name"}
                className={`text-center  w-[70vw] lg:w-[400px] text-Sgray border-[3px] border-Pgreen h-[35px] rounded-[1%] font-primary font-medium ${
                  formik.errors.Name && formik.touched.Name
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Name"
              ></input>
              {formik.errors.Name && formik.touched.Name ? (
                <p className="text-[10px] text-red-500 text-center  font-primary">
                  {formik.errors.Name}
                </p>
              ) : null}
            </div>
          </div>
          <label>
            <h2 className="text-[20px] lg:text-[25px] scale-[1.2] mt-[20px] mb-[10px] text-greenM font-medium font-primary ">
              Email
            </h2>
          </label>
          <div className="flex-col space-y-1">
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="email"
              type={"email"}
              name={"email"}
              className={`text-center w-[70vw] lg:w-[400px] text-Sgray scale-[1.2] border-[3px] border-Pgreen  rounded-[1%] font-primary font-medium ${
                formik.errors.email && formik.touched.email
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="@"
            ></input>
            {formik.errors.email && formik.touched.email ? (
              <p className="text-[13px] text-red-500 text-center font-primary">
                {formik.errors.email}
              </p>
            ) : null}
          </div>
          <label>
            <h2 className="text-[20px] lg:text-[25px] scale-[1.2] mt-[20px] text-center mb-[10px] text-greenM font-medium font-primary ">
              Your message
            </h2>
            <textarea
              value={formik.values.information}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="information"
              name="information"
              className={`w-[70vw] lg:w-[400px] px-[10px] h-[160px] mt-[10px] text-Sgray scale-[1.2] border-[3px] border-Pgreen  rounded-[1%] font-primary font-medium ${
                formik.errors.information && formik.touched.information
                  ? "border-red-500"
                  : ""
              }`}
            ></textarea>
            {formik.errors.information && formik.touched.information ? (
              <p className="text-[13px] text-red-500 text-center font-primary mt-[10px]">
                {formik.errors.information}
              </p>
            ) : null}
          </label>
          <button
            type="submit"
            className={
              "py-1 px-[100px] rounded-full font-primary text-[25px] mt-[25px] text-Pyellow font-bold bg-greenM hover:bg-pink-600  hover:text-white"
            }
          >
            Submit
          </button>
        </div>
        <AnimatePresence>
          <motion.div
            key={key}
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            exit={{ y: -500 }}
            transition={{ duration: 0.5 }}
            className={`${
              submitted ? "" : "hidden"
            } flex flex-col fixed rounded-[1%]  top-[100px] w-[350px] h-[80px] items-center justify-center bg-greenM text-blueM`}
          >
            <h2 className="font-secondary text-[28px] font-bold text-blueM text-center">
              Message sent <i class="fa-solid fa-check"></i>
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>
    </form>
  );
}
