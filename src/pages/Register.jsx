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
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerCustomer } from "../services/CustomerService";
import { registerOrganiser } from "../services/OrganiserService";

function SignUp() {
  const navigate = useNavigate();

  const [role, setRole] = useState("CUSTOMER");

  const [commonInfo, setCommonInfo] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [customerInfo, setCustomerInfo] = useState({
    customerName: "",
    gender: "",
    address: "",
  });

  const [organiserInfo, setOrganiserInfo] = useState({
    companyName: "",
    companyAddress: "",
    verificationDoc: null,
  });

  const handleRegister = async () => {
    if (commonInfo.email.trim().length === 0) {
      toast.warn("Please enter email");
    } else if (!/\S+@\S+\.\S+/.test(commonInfo.email)) {
      toast.warn("Invalid email format");
    } else if (commonInfo.phoneNumber.trim().length === 0) {
      toast.warn("Please enter phone number");
    } else if (!/^\d{10}$/.test(commonInfo.phoneNumber)) {
      toast.warn("Phone number must be 10 digits");
    } else if (commonInfo.password.trim().length < 6) {
      toast.warn("Password must be at least 6 characters");
    } else {
      if (role === "CUSTOMER") {
        if (customerInfo.customerName.trim().length === 0) {
          toast.warn("Please enter customer name");
        } else if (customerInfo.address.trim().length === 0) {
          toast.warn("Please enter address");
        } else if (customerInfo.gender.trim().length === 0) {
          toast.warn("Please select gender");
        } else {
          const data = {
            ...commonInfo,
            ...customerInfo,
          };

          try {
            const result = await registerCustomer(data);
            toast.success("Customer registered successfully");
            navigate("/");
          } catch (error) {
            toast.error("Customer registration failed");
            console.error(error);
          }
        }
      } else if (role === "ORGANISER") {
        if (organiserInfo.companyName.trim().length === 0) {
          toast.warn("Please enter company name");
        } else if (organiserInfo.companyAddress.trim().length === 0) {
          toast.warn("Please enter company address");
        } else if (!organiserInfo.verificationDoc) {
          toast.warn("Please upload verification document");
        } else {
         const data = {
       ...commonInfo,
       ...organiserInfo
        };


          try {
            const result = await registerOrganiser(data);
            toast.success("Organiser registered successfully");
            navigate("/");
          } catch (error) {
            toast.error("Organiser registration failed");
            console.error(error);
          }
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#9FBFC5] flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-[#0D4D66]">
          Register
        </h2>

        <div className="space-y-4">
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

          <InputField
            icon={<FaEnvelope />}
            placeholder="Email"
            type="email"
            name="email"
            value={commonInfo.email}
            onChange={(e) =>
              setCommonInfo({ ...commonInfo, [e.target.name]: e.target.value })
            }
          />

          <InputField
            icon={<FaPhone />}
            placeholder="Phone (10 digits)"
            type="text"
            name="phoneNumber"
            maxLength={10}
            value={commonInfo.phoneNumber}
            onChange={(e) =>
              setCommonInfo({ ...commonInfo, [e.target.name]: e.target.value })
            }
          />

          <InputField
            icon={<FaLock />}
            placeholder="Password"
            type="password"
            name="password"
            value={commonInfo.password}
            onChange={(e) =>
              setCommonInfo({ ...commonInfo, [e.target.name]: e.target.value })
            }
          />

          {role === "CUSTOMER" && (
            <>
              <InputField
                icon={<FaUserAlt />}
                placeholder="Full Name"
                name="customerName"
                value={customerInfo.customerName}
                onChange={(e) =>
                  setCustomerInfo({
                    ...customerInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <InputField
                icon={<FaMapMarkedAlt />}
                placeholder="Address"
                name="address"
                value={customerInfo.address}
                onChange={(e) =>
                  setCustomerInfo({
                    ...customerInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <select
                name="gender"
                value={customerInfo.gender}
                onChange={(e) =>
                  setCustomerInfo({ ...customerInfo, gender: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0D4D66] focus:ring-2 outline-none"
              >
                <option value="">Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
            </>
          )}

          {role === "ORGANISER" && (
            <>
              <InputField
                icon={<FaBuilding />}
                placeholder="Company Name"
                name="companyName"
                value={organiserInfo.companyName}
                onChange={(e) =>
                  setOrganiserInfo({
                    ...organiserInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <label className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-pointer hover:bg-gray-100">
                <FaFileUpload />
                <input
                  type="file"
                  name="verificationDoc"
                  onChange={(e) =>
                    setOrganiserInfo({
                      ...organiserInfo,
                      verificationDoc: e.target.files[0],
                    })
                  }
                  className="hidden"
                />
                Upload Company Verification
              </label>

              <InputField
                icon={<FaMapMarkedAlt />}
                placeholder="Company Address"
                name="companyAddress"
                value={organiserInfo.companyAddress}
                onChange={(e) =>
                  setOrganiserInfo({
                    ...organiserInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </>
          )}

          <button
            onClick={handleRegister}
            className="w-full bg-[#0D4D66] hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition mt-4"
          >
            Sign Up
          </button>
        </div>

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