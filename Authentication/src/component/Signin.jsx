import React, { useState } from "react";
import { authService } from "../firebase/auth";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const googleLogin = () => {
    authService
      .LoginGoogle()
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const emailLogin = async () => {
    const user = await authService.LoginEmailAndPassword({ email, password });
    console.log("Logged-in User:", user);
  };
  
  const getUser = () => {
    console.log(authService.getCurrentUser());
  };
  
  const emailVerify = async () => {
    const isVerified = await authService.emailVerification(); // Send verification email
    console.log("Please check your inbox and verify your email.");
    if (isVerified) {
      console.log("User email verified!");
      getUser();
    } else {
      console.log("User not verified.");
    }
  };
  const handleDeleteUser = async () => {
    const isDeleted = await authService.deleteUser();
    console.log("deleted User:", isDeleted);
  };
  return (
    <div className="w-full flex flex-col gap-2">
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
      <button className="w-24 bg-yellow-600" onClick={googleLogin}>
        Google
      </button>
      <button
        className="w-[100px] bg-green-600 cursor-pointer"
        onClick={emailLogin}
      >
        Submit
      </button>
      <button
        className="w-[150px] bg-blue-600 cursor-pointer"
        onClick={getUser}
      >
        Get current user
      </button>
      <button
        className="w-[150px] bg-indigo-500 cursor-pointer"
        onClick={emailVerify}
      >
        Email Verify
      </button>
      <button
        className="w-[150px] bg-pink-500 cursor-pointer"
        onClick={handleDeleteUser}
      >
        Delete User
      </button>
    </div>
  );
};

export default Signin;
