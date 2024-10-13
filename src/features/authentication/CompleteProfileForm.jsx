import { useState } from "react";
import RadioInput from "../../ui/RadioInput";
import TextField from "../../ui/TextField";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  console.log(role);

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8">
          <TextField
            label="first and last name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex item-center justify-center gap-x-8">
            <RadioInput
              name="role"
              id="OWNER"
              value="OWNER"
              label="Employer"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <RadioInput
              name="role"
              id="FREELANCER"
              value="FREELANCER"
              label="Freelancer"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
            />
          </div>

          <button className="btn btn--primary w-full">confirm</button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
