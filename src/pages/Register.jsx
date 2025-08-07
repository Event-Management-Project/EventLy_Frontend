import React, { useState } from "react";
import axios from "axios";
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
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerCustomer } from "../services/CustomerService";
import { registerOrganiser } from "../services/OrganiserService";

function SignUp() {
  const navigate = useNavigate();
  const [role, setRole] = useState("CUSTOMER");

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    address: "",
    fullName: "",
    gender: "",
    companyName: "",
    companyAddress: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      return toast.warn("Please enter email");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return toast.warn("Invalid email format");
    } else if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      return toast.warn("Phone number must be 10 digits");
    } else if (formData.password.length < 6) {
      return toast.warn("Password must be at least 6 characters");
    }

    if (role === "CUSTOMER") {
      if (!formData.fullName.trim()) {
        return toast.warn("Please enter your name");
      }
      if (!formData.gender) {
        return toast.warn("Please select gender");
      }
      if (!formData.address.trim()) {
        return toast.warn("Please enter address");
      }

      const customerPayload = {
        customerName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phone,
        password: formData.password,
        gender: formData.gender,
        address: formData.address,
      };

      try {
        await registerCustomer(customerPayload);
        toast.success("Customer registered successfully!");
        navigate("/");
      } catch (err) {
        toast.error("Customer registration failed.");
        console.error(err);
      }

    } else if (role === "ORGANISER") {
      if (!formData.companyName.trim()) {
        return toast.warn("Please enter company name");
      }
      if (!formData.companyAddress.trim()) {
        return toast.warn("Please enter company address");
      }
      if (!formData.image) {
        return toast.warn("Please upload a verification document");
      }

      const organiserFormData = new FormData();
      organiserFormData.append("organiserCompanyName", formData.companyName);
      organiserFormData.append("phoneNumber", formData.phone);
      organiserFormData.append("email", formData.email);
      organiserFormData.append("password", formData.password);
      organiserFormData.append("address", formData.companyAddress);
      organiserFormData.append("image", formData.image);

      try {
        await registerOrganiser(organiserFormData);
        toast.success("Organiser registered successfully!");
        navigate("/");
      } catch (err) {
        toast.error("Organiser registration failed.");
        console.error(err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#9FBFC5] flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-[#0D4D66]">
          Register
        </h2>

        <form className="space-y-4" onSubmit={handleRegister}>
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

          <InputField icon={<FaEnvelope />} placeholder="Email" name="email" type="email" onChange={handleChange} />
          <InputField icon={<FaPhone />} placeholder="Phone (10 digits)" name="phone" maxLength={10} onChange={handleChange} />
          <InputField icon={<FaLock />} placeholder="Password" name="password" type="password" onChange={handleChange} />

          {role === "CUSTOMER" && (
            <>
              <InputField icon={<FaUserAlt />} placeholder="Full Name" name="fullName" onChange={handleChange} />
              <InputField icon={<FaMapMarkedAlt />} placeholder="Address" name="address" onChange={handleChange} />
              <div className="relative">
                <FaVenusMars className="absolute left-3 top-3.5 text-gray-400" />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0D4D66] focus:ring-2 outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>
              </div>
            </>
          )}

          {role === "ORGANISER" && (
            <>
              <InputField icon={<FaBuilding />} placeholder="Company Name" name="companyName" onChange={handleChange} />
              <InputField icon={<FaMapMarkedAlt />} placeholder="Company Address" name="companyAddress" onChange={handleChange} />
              <label className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-pointer hover:bg-gray-100">
                <FaFileUpload />
                <input type="file" name="image" className="hidden" onChange={handleChange} />
                Upload Verification Document
              </label>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-[#0D4D66] hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition mt-4"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-[#0D4D66] font-semibold hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

function InputField({
  icon,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  ...rest
}) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-3.5 text-gray-400">{icon}</div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4D66] outline-none"
        {...rest}
      />
    </div>
  );
}

export default SignUp;
