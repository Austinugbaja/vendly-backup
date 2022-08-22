/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React, { useContext, useState } from "react";
import { authLeft } from "../../animations/animations";
import { scaleUp } from "../../animations/animations";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { AddDeviceContext } from "../../state/contexts/AddDeviceContext";

const ProductOptionModal = (props) => {
  const [loader, setLoader] = useState(false);
  // const { deviceType, switchDevice } = useContext(AddDeviceContext);
  // Formik initial values ... this is the initial form state
  let initialValues = {
    name: "",
    location: "",
  };

  // Yup validation schema... this is for form validation
  const validationSchema = Yup.object({});

  //The useFormik hook... takes all variables for handling the form
  const formik = useFormik({
    initialValues,
    // onSubmit,
    validationSchema,
  });

  return (
    <motion.section
      variants={authLeft}
      initial="initial"
      animate="animate"
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          delay: 2,
        },
      }}
      className={`w-full h-screen shadow-sm text-textGrey fixed inset-0 z-[300000] flex items-center  justify-center `}
      onClick={props.toggleDevice}
    >
      {/* {deviceType.deviceName} */}
      <motion.div
        variants={scaleUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-between w-[320px] min-h-[200px] sm:w-[450px] sm:min-h-[300px] border-none rounded-lg p-5 sm:p-7 text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading start */}
        <div
          className="w-full text-center p-5 rounded-lg flex flex-col sm:mx-96 mx-4"
          style={{ backgroundColor: "#0055D4" }}
        >
          <div className="p-10 font-semibold text-white hover:bg-white hover:text-blue-600">
            SHARE
          </div>
          <div className=" p-10 font-semibold text-white hover:bg-white hover:text-blue-600">
            EDIT
          </div>
          <div className="p-10 font-semibold text-white hover:bg-white hover:text-blue-600 ">
            DELETE
          </div>
        </div>
        {/* Heading end */}

        {/* <button className="border border-solid border-[#0055D4] bg-[#0055D4] p-3 px-10 mt-6 text-sm uppercase rounded-md text-white font-semibold">
          create product
        </button> */}
      </motion.div>
    </motion.section>
  );
};

export default ProductOptionModal;
