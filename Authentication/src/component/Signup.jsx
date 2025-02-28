import React, { useState } from "react";
import { authService } from "../firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const emailSignup = () => {
    authService
      .Signup({ email, password, name })
      .then((user) => console.log("User Signup:", user))
      .catch((error) => console.error("Signup Error:", error));
  };

  const resetPassword = async () => {
    const isVerified = await authService.changePassword({ email });

    console.log("Sent Pass Reset Email: ", isVerified);
  };

  const updateEmail = async () => {
    const user = await authService.changeEmail(email);

    console.log("Updated Email: ", user);
  };

  const updateProfile = async () => {
    const user = await authService.changeProfile(email, password);

    console.log("Updated Email: ", user);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <input
        type="text"
        placeholder="Enter Your Name..."
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Email Id..."
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password..."
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-[100px] bg-green-600 cursor-pointer"
        onClick={emailSignup}
      >
        Submit
      </button>
      <input
        type="email"
        placeholder="Enter Email Id..."
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="w-[130px] bg-blue-600 cursor-pointer"
        onClick={resetPassword}
      >
        Reset Password
      </button>
      <input
        type="email"
        placeholder="Enter New Email Id..."
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="w-[130px] bg-yellow-600 cursor-pointer"
        onClick={updateEmail}
      >
        Update Email
      </button>
      <input
        type="text"
        placeholder="Enter New Display Name..."
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter New Photo URL..."
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="w-[130px] bg-yellow-600 cursor-pointer"
        onClick={updateProfile}
      >
        Update Profile
      </button>
    </div>
  );
};

export default Signup;
