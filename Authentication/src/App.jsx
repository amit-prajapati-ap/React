import React, { useState } from "react";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import { authService } from "./firebase/auth";

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleSignin = () => {
    setActiveComponent("signin");
  };

  const handleSignup = () => {
    setActiveComponent("signup");
  };
  const handleLogout = async() => {
    console.log("Logout successfully:", await authService.Logout());
  };

  return (
    <div>
      <div className="w-full flex gap-2 justify-center">
        <button
          className="w-24 bg-green-500 rounded-sm mt-2 text-black px-2 py-1"
          onClick={handleSignin}
        >
          Signin
        </button>
        <button
          className="w-24 bg-blue-500 rounded-sm mt-2 text-black px-2 py-1"
          onClick={handleSignup}
        >
          Signup
        </button>
        <button
          className="w-24 bg-yellow-500 rounded-sm mt-2 text-black px-2 py-1"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Conditional Rendering */}
      {activeComponent === "signin" && <Signin />}
      {activeComponent === "signup" && <Signup />}
    </div>
  );
};

export default App;
