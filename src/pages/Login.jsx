import React, { useState } from "react";
import { FaEnvelope, FaLock, FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginCustomer } from "../services/CustomerService";
import { useDispatch } from "react-redux";
import { setCustomer } from "../redux/slices/CustomerSlice";
import { setOrganiser } from "../redux/slices/OrganiserSlice";
import { loginOrganiser } from "../services/OrganiserService";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userType, setUserType] = useState("CUSTOMER");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email.trim().length === 0) {
      toast.warn("Please enter email");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.warn("Invalid email format");
    } else if (password.trim().length < 6) {
      toast.warn("Password must be at least 6 characters");
    } else {
      try {
        if (userType == "CUSTOMER") {
          const data = {
            email,
            password,
          };
          const result = await loginCustomer(data);

          sessionStorage.removeItem("organiser");

          const customerUser = {
            ...result.customer,
            jwtToken: result.jwtToken,
            role: result.role,
          };

          dispatch(setCustomer(customerUser));
          sessionStorage.setItem("customer", JSON.stringify(customerUser));
          navigate("/customer");
          toast.success("Signed in successfully");
        }
        if (userType == "ORGANISER") {
          const data = {
            email,
            password,
          };
          const result = await loginOrganiser(data);
          console.log(result)
          const organiserUser = {
            ...result.organiser,
            jwtToken: result.jwtToken,
            role: result.role,
          };
          sessionStorage.removeItem("customer");
          dispatch(setOrganiser(organiserUser));
          sessionStorage.setItem("organiser", JSON.stringify(organiserUser));
          navigate("/organiser");
          toast.success("Signed in successfully");
        }
      } catch (error) {
        toast.error("Failed to log in", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#9FBFC5] flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 border border-gray-300">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-[#0D4D66]">
          Sign In
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-[#0D4D66] mb-2">
              Type of user
            </label>
            <div className="flex gap-8 justify-center">
              <label className="flex items-center space-x-2 text-[#0D4D66]">
                <input
                  type="radio"
                  name="userType"
                  value="CUSTOMER"
                  checked={userType === "CUSTOMER"}
                  onChange={() => setUserType("CUSTOMER")}
                  className="accent-[#0D4D66] w-5 h-5"
                />
                <span>Customer</span>
              </label>
              <label className="flex items-center space-x-2 text-[#0D4D66]">
                <input
                  type="radio"
                  name="userType"
                  value="ORGANISER"
                  checked={userType === "ORGANISER"}
                  onChange={() => setUserType("ORGANISER")}
                  className="accent-[#0D4D66] w-5 h-5"
                />
                <span>Organiser</span>
              </label>
            </div>
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-[#0D4D66]" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4D66] outline-none text-gray-700"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-[#0D4D66]" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4D66] outline-none text-gray-700"
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-[#0D4D66] hover:bg-teal-800 text-white font-semibold py-3 rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <FaKey className="w-5 h-5" />
            <span className="text-base">Sign In</span>
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-[#0D4D66]">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#0D4D66] font-semibold hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;