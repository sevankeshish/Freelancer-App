import React from "react";
import { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <form className="space-y-10">
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
        <button className="btn btn--primary w-full">confirm</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;