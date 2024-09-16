import { useEffect, useState } from "react";
import { PinInput, Button, Text, LoadingOverlay, Loader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notificationShow } from "@/utility/notification";

export const OTPTab = ({
  sendOtp,
  handleClose,
  createUser,
  otpForm,
  enteredOtp,
  setEnteredOtp,
  generatedOtp,
  resetValues,
}: any) => {
  const [timeLeft, setTimeLeft] = useState(300);
  const [isOtpExpired, setIsOtpExpired] = useState(false);
  const [incorrectOtpError, setIncorrectOtpError] = useState(false);
  const [visible, { toggle }] = useDisclosure(false);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  const verifyOtp = async () => {
    if (enteredOtp !== generatedOtp) {
      setIncorrectOtpError(true);
      return;
    }

    if (timeLeft !== 0 && enteredOtp === generatedOtp) {
      if (incorrectOtpError) {
        setIncorrectOtpError(false);
      }
      toggle();
      await createUser()
        .then(() => {
          handleClose();
          resetValues(true);
          notificationShow({
            title: "Sign-up successful!",
            message:
              "Your account has been successfully created. Please proceed to log in with your credentials.",
            type: "success",
            autoClose: 5000,
          });
        })
        .catch((error: any) => {
          resetValues();
          console.error("error", error);
          notificationShow({
            message:
              "Something Went Wrong While Signing Up! Please Try again later!",
            type: "error",
            autoClose: 5000,
          });
        });
    } else {
      setIsOtpExpired(true);
    }
  };

  return (
    <>
      <form
        onSubmit={otpForm.onSubmit((values: any) => console.log(values))}
        className="flex justify-center items-center flex-col"
      >
        <LoadingOverlay
          visible={visible}
          loaderProps={{ children: <Loader color="#f21616" type="dots" /> }}
        />
        <PinInput
          mt="xl"
          length={6}
          type="number"
          placeholder="-"
          {...otpForm.getInputProps("otp")}
          onChange={(e: any) => {
            otpForm.getInputProps("otp").onChange(e);
            setEnteredOtp(e);
          }}
        />

        {otpForm.errors.otp && (
          <Text className="text-[#f21616]" size="xs" mt="sm">
            {otpForm.errors.otp}
          </Text>
        )}

        <Button
          type="submit"
          onClick={verifyOtp}
          className="px-28 mt-6 mb-4"
          color="#f21616"
        >
          Verify OTP
        </Button>
      </form>
      {incorrectOtpError ? (
        <div className="flex justify-center">
          <span className="text-[#f21616] text-sm mb-2">
            Incorrect OTP, Please re-enter the OTP!
          </span>
        </div>
      ) : null}

      {isOtpExpired ? (
        <div className="flex justify-center">
          <span className="text-[#f21616] text-sm mb-2">
            Your OTP has been expired! Click on Resend OTP
          </span>
        </div>
      ) : null}

      <div className="mx-12 flex justify-between items-center">
        <Text c="gray" size="xs">
          OTP expires in {formatTime(timeLeft)}
        </Text>
        <Button
          className="px-0"
          onClick={sendOtp}
          variant="transparent"
          c="black"
          size="xs"
        >
          Resend OTP
        </Button>
      </div>
    </>
  );
};
