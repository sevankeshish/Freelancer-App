import { useState } from "react";
import TextField from "../../ui/TextField";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
            <div className="flex item-center gap-x-2 text-secondary-600">
              <input
                className="cursor-ppinter w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
                type="radio"
                name="role"
                id="OWNER"
                value="OWNER"
              />
              <label htmlFor="OWNER">Employer</label>
            </div>
            <div className="flex item-center gap-x-2 text-secondary-600">
              <input
                className="cursor-ppinter w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
                type="radio"
                name="role"
                id="FREELANCER"
                value="FREELANCER"
              />
              <label htmlFor="FREELANCER">Freelancer</label>
            </div>
          </div>

          <button className="btn btn--primary w-full">confirm</button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
