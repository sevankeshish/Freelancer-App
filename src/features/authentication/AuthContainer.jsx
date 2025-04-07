import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";

import { getOtp } from "../../services/authService";

import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";

function AuthContainer() {
  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("");

  const { handleSubmit, register, getValues } = useForm();

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    // e.preventDefault();
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      // console.log("first")
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            setStep={setStep}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
