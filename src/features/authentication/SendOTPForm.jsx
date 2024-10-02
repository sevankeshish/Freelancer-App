import React from "react";
import { useState } from "react";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <form className="space-y-8">
        <div>
          <label className="mb-1" htmlFor="phonenumber">
            phone number
          </label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="phonenumber"
            className="textField__input"
            type="text"
          />
        </div>
        <button className="btn btn--primary w-full">
          send the authentication code
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
