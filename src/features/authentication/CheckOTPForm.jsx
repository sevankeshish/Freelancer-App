import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { HiArrowLeft } from "react-icons/hi";

import { useMutation } from "@tanstack/react-query";

import { checkOtp } from "../../services/authService";

import Loading from "../../ui/Loading";

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(90);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast.error("Your profile is being reviewed for confirmation.", {
          icon: "👏",
        });
        return;
      }

      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
      <button onClick={onBack}>
        <HiArrowLeft className="w-6 h-6 text-secondary-500" />
      </button>
      {otpResponse && (
        <p className="flex items-center gap-x-2 my-4">
          {otpResponse?.message}
          <button onClick={onBack}>
            <CiEdit />
          </button>
        </p>
      )}
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p>{time} seconds left to resend the authentication code.</p>
        ) : (
          <button onClick={onResendOtp}>Resend Code</button>
        )}
      </div>
      <form className="space-y-10" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-600">insert the code</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
        />

        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              confirm
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
