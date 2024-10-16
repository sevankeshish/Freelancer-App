import { useState } from "react";
import toast from "react-hot-toast";

import { useMutation } from "@tanstack/react-query";

import { getOtp } from "../../services/authService";

import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

function SendOTPForm({ onSubmit, isSendingOtp, phoneNumber, onChange }) {
  //useQuery ==> get
  //useMutation => post, put, delete, ...

  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <TextField
          label="phone number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        <div>
          {isSendingOtp ? (
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
