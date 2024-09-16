import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { createAppUser } from "@/graphql/api";
import { notificationShow, notificationUpdate } from "@/utility/notification";
import {
  requireField,
  validateLength,
  validateEmail,
  validatePassword,
} from "@/utility/validationRules";
import { generateOTP } from "@/utility/commonFunctions";
import { sendMail } from "@/utility/sendMail";

export const useSignupForm = (handleClose: any) => {
  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const emailSubject = "Verify Your Account";
  const emailTemplate = "accountVerificationTemplate.html";
  const [formData, setFormData] = useState(initialValues);
  const [showOTPModalFlag, setShowOTPModalFlag] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [showSignupError, setShowSignupError] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [userSignupDetailsObject, setUserSignupDetailsObject] = useState<any>(
    {}
  );

  useEffect(() => {
    if (Object.keys(userSignupDetailsObject).length > 0) {
      sendOtp();
    }
  }, [userSignupDetailsObject]);

  const form = useForm({
    initialValues: initialValues,
    validate: {
      firstName: (value) => requireField(value, "first name"),
      lastName: (value) => requireField(value, "last name"),
      email: validateEmail,
      password: validatePassword,
    },

    validateInputOnChange: true,
  });

  const otpForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      otp: "",
    },
    validate: {
      otp: (value: string) => validateLength(value, "OTP", 6),
    },
    validateInputOnChange: true,
  });

  const resetValues = (registered?: boolean) => {
    form?.reset();
    otpForm?.reset();
    if (registered) setIsRegistered(true);
    setShowSignupError(false);
    setShowOTPModalFlag(false);
  };

  const showOTPModal = () => {
    setShowOTPModalFlag(true);
  };

  const handleModalClosing = () => {
    if (showOTPModalFlag && !isRegistered) {
      setShowSignupError(true);
    } else {
      handleClose();
      resetValues();
    }
  };

  const handleSignupAbort = () => {
    handleClose();
    resetValues();
    notificationShow({
      message: "Oops! Signup was canceled. Please try again if needed.",
      type: "error",
    });
  };

  const getOTP = () => {
    const otp = generateOTP(6);
    setGeneratedOtp(otp);
    return otp;
  };

  const getContextObject = () => {
    const contextObject = {
      name: userSignupDetailsObject?.firstName,
      otp: getOTP(),
    };

    return contextObject;
  };

  const createUser = async () => {
    try {
      await createAppUser();
    } catch (error) {
      console.error("Error in createUser:", error);
      throw error;
    }
  };

  const sendOtp = async () => {
    const contextObject = getContextObject();
    createUser();
    // const id = notificationShow({
    //   loading: true,
    //   title: "Sending OTP",
    //   message: "Please wait while we send the OTP to your email.",
    //   autoClose: false,
    //   withCloseButton: false,
    // });

    // return await sendMail(
    //   userSignupDetailsObject?.email,
    //   emailSubject,
    //   contextObject,
    //   emailTemplate
    // )
    //   .then(() => {
    //     notificationUpdate({
    //       id,
    //       title: "OTP Sent Successfully",
    //       message:
    //         "A 6-digit OTP has been successfully sent to your email. Please check your inbox. ",
    //       loading: false,
    //       autoClose: 2000,
    //     });
    //     showOTPModal();
    //   })
    //   .catch((error) => {
    //     console.error("error", error);
    //     notificationShow({
    //       message:
    //         "We encountered an issue while sending the OTP. Please try again later.",
    //       type: "error",
    //     });
    //   });
  };

  return {
    handleClose,
    form,
    otpForm,
    initialValues,
    resetValues,
    createUser,
    sendOtp,
    formData,
    setFormData,
    showOTPModalFlag,
    setShowOTPModalFlag,
    enteredOtp,
    setEnteredOtp,
    showSignupError,
    setShowSignupError,
    showOTPModal,
    handleModalClosing,
    handleSignupAbort,
    generatedOtp,
    setGeneratedOtp,
    userSignupDetailsObject,
    setUserSignupDetailsObject,
    setIsRegistered,
  };
};
