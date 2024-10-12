import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

function SendOTPForm({ setStep, phoneNumber, onChange }) {
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  //useQuery ==> get
  //useMutation => post, put, delete, ...

  return (
    <div>
      <form className="space-y-10" onSubmit={sendOtpHandler}>
        <TextField
          label="phone number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              send the authentication code
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
