import React, { useState } from "react";
import {
  FaUserAlt,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaBuilding,
  FaFileUpload,
  FaMapMarkedAlt,
  FaVenusMars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUp() {
  const [role, setRole] = useState("CUSTOMER");

  return (
    <div className="min-h-screen bg-[#9FBFC5] flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-[#0D4D66]">
          Register
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Sign up as:
            </label>
            <div className="flex gap-8 justify-center mb-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="CUSTOMER"
                  checked={role === "CUSTOMER"}
                  onChange={() => setRole("CUSTOMER")}
                  className="accent-[#0D4D66] w-5 h-5"
                />
                <span>Customer</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="ORGANISER"
                  checked={role === "ORGANISER"}
                  onChange={() => setRole("ORGANISER")}
                  className="accent-[#0D4D66] w-5 h-5"
                />
                <span>Organiser</span>
              </label>
            </div>
          </div>

          <InputField icon={<FaEnvelope />} placeholder="Email" type="email" />
          <InputField
            icon={<FaPhone />}
            placeholder="Phone (10 digits)"
            type="text"
            maxLength={10}
          />
          <InputField
            icon={<FaLock />}
            placeholder="Password"
            type="password"
          />

          {role === "CUSTOMER" && (
            <>
              <InputField icon={<FaUserAlt />} placeholder="Full Name" />
              <InputField icon={<FaMapMarkedAlt />} placeholder="Address" />
              <div className="relative">
                <FaVenusMars className="absolute left-3 top-3.5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0D4D66] focus:ring-2 outline-none">
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </>
          )}

          {role === "ORGANISER" && (
            <>
              <InputField icon={<FaBuilding />} placeholder="Company Name" />
              <label className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-pointer hover:bg-gray-100">
                <FaFileUpload />
                <input type="file" className="hidden" />
                Upload Company Verification
              </label>
              <InputField
                icon={<FaMapMarkedAlt />}
                placeholder="Company Address"
              />
            </>
          )}

          <button className="w-full bg-[#0D4D66] hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition mt-4">
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-[#0D4D66] font-semibold hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

function InputField({ icon, placeholder, type = "text", ...rest }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-3.5 text-gray-400">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4D66] outline-none"
        {...rest}
      />
    </div>
  );
}

export default SignUp;
