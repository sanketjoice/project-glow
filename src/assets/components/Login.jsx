import React, { useState } from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { FaGoogle, FaFacebook, FaApple, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Congratulations from "./Congratulations";

const Login = () => {
  const [showCongratulations, setShowCongratulations] = useState(false); // State to toggle the Congratulations screen
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google User:", result.user);

      // Show the Congratulations screen upon successful login
      setShowCongratulations(true);

      // Optionally, navigate to another route or perform additional actions
      // Example: navigate("/dashboard");
    } catch (error) {
      console.error("Google Login Error:", error.message);
    }
  };

  const handleNextClick = () => {
    navigate("/project-glow/signup");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {showCongratulations ? ( // Render the Congratulations component if login was successful
        <Congratulations
          onContinue={() => {
            setShowCongratulations(false); // Close the Congratulations screen
            navigate("/dashboard"); // Navigate to the next screen, e.g., dashboard
          }}
        />
      ) : (
        <div className="w-[390px] h-[680px] overflow-auto rounded-xl shadow-lg flex flex-col bg-white">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4"></div>
          <div className="flex gap-3 flex-col justify-center items-center">
            <img
              src={logo}
              alt="Project Glow Skin Logo"
              className="w-[110px] h-auto mb-6"
            />
            <div className="w-[320px] h-[90px] gap-4 text-center">
              <h1 className="text-[24px] leading-[30px] font-semibold mb-2">
                Create an account
              </h1>
              <p className="text-gray-500 text-[14px] leading-[22px] mb-4">
                Unlock the Secrets of Your Skin with science-backed analysis
              </p>
            </div>
            {/* Social Buttons */}
            <div className="h-[168px] w-[330px] gap-3 flex flex-col items-center mt-[50px]">
              <button className="flex items-center text-center gap-2 w-64 px-[24px] py-[12px] bg-blue-600 text-white rounded-[6px] mb-3">
                <FaFacebook />
                Continue with Facebook
              </button>
              <button
                onClick={handleGoogleLogin}
                className="flex items-center text-center gap-2 w-64 px-[24px] py-[12px] bg-gray-200 text-black rounded-[6px] mb-3"
              >
                <FaGoogle />
                Continue with Google
              </button>
              <button className="flex items-center text-center gap-2 w-64 px-[24px] py-[12px] bg-black text-white rounded-[6px] mb-3">
                <FaApple />
                Continue with Apple
              </button>
            </div>
            <div className="flex items-center mt-8 w-full justify-center mb-3">
              <div className="h-px bg-[#9E9E9E] w-20"></div>
              <p className="text-[14px] text-black px-4">OR</p>
              <div className="h-px bg-[#9E9E9E] w-20"></div>
            </div>
            <button
              onClick={handleNextClick}
              className="flex h-[48px] text-center w-[256px] items-center 
        gap-2  px-[24px] py-[12px] bg-black text-white rounded-[6px] mb-3"
            >
              <FaEnvelope />
              Continue with Email
            </button>
            <p className="text-[#303030] max-w-[330px] h-[44px] text-[14px] leading-[22px] text-center mt-[130px] mb-5">
              By continuing, you agree to Project Glow Skin's{" "}
              <span className="underline">Terms</span> •{" "}
              <span className="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
