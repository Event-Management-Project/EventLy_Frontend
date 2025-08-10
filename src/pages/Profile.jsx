import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { toast } from "react-toastify";
import {
  updateCustomerProfile,
  changeCustomerPassword,
} from "../services/CustomerService";
import {
  changeOrganiserPassword,
  updateOrganiserProfile,
} from "../services/OrganiserService";
import { setOrganiser } from "../redux/slices/OrganiserSlice";
import { setCustomer } from "../redux/slices/CustomerSlice";

function Profile({ role = "customer" }) {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer.customer);
  const organiser = useSelector((state) => state.organiser.organiser);
  const userData = role === "organiser" ? organiser : customer;

  const isOrganiser = role === "organiser";
  const theme = {
    background: isOrganiser ? "#FFF7D1" : "#EFEAFF",
    primary: isOrganiser ? "#F29F05" : "#6A4FB6",
    primaryHover: isOrganiser ? "#F2B705" : "#5a3fa1",
    secondary: isOrganiser ? "#A64B2A" : "#0D4D66",
    secondaryHover: isOrganiser ? "#8C3E22" : "#b63c7a",
  };

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (userData) {
        console.log("userData in Profile:", userData);
      setProfile({
        name: isOrganiser
          ? userData.organiserCompanyName || ""
          : userData.customerName || "",
        email: userData.email || "",
        phone: userData.phoneNumber || "",
        address: userData.address || "",
      });
    }
  }, [userData, isOrganiser]);

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [newProfile, setNewProfile] = useState(profile);

  const handleProfileUpdate = async () => {
    if (newProfile.name.trim().length === 0) {
      toast.warn("Name can't be empty");
    } else if (newProfile.email.trim().length === 0) {
      toast.warn("Email can't be empty");
    } else if (newProfile.address.trim().length === 0) {
      toast.warn("Address can't be empty");
    } else if (newProfile.phone.trim().length !== 10) {
      toast.warn("Phone number must be 10 digits");
    } else {
      try {
        if (isOrganiser) {
          const data = {
            organiserCompanyName: newProfile.name,
            email: newProfile.email,
            phoneNumber: newProfile.phone,
            address: newProfile.address,
          };
          await updateOrganiserProfile(organiser.id, data);
          dispatch(setOrganiser({ id: organiser.id, ...data }));
          toast.success("Organiser profile updated");
        } else {
          const data = {
            customerName: newProfile.name,
            email: newProfile.email,
            phoneNumber: newProfile.phone,
            address: newProfile.address,
          };
          await updateCustomerProfile(customer.id, data);
          dispatch(setCustomer({ id: customer.id, ...data }));
          toast.success("Customer profile updated");
        }

        setProfile(newProfile);
        setShowProfileForm(false);
      } catch (error) {
        toast.error("Failed to update profile");
        console.error(error);
      }
    }
  };

  const handlePasswordChange = async () => {
    if (!password.current || !password.new || !password.confirm) {
      toast.error("All password fields are required");
      return;
    }

    if (password.new !== password.confirm) {
      toast.error("New password and confirmation do not match");
      return;
    }

    if (password.new.length < 6) {
      toast.error("New password must be at least 6 characters long");
      return;
    }


    try {
      if (isOrganiser) {
        const organiserId = organiser?.orgId || JSON.parse(localStorage.getItem("organiser"))?.orgId;
        await changeOrganiserPassword(
          // organiser.orgId,
          organiserId,
          password.current,
          password.new,
          password.confirm
        );
      } else {
        await changeCustomerPassword(
          customer.cstId,
          password.current,
          password.new,
          password.confirm
        );
      }

      toast.success("Password changed successfully!");
      setPassword({ current: "", new: "", confirm: "" });
      setShowPasswordForm(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to change password");
    }
  };

  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: theme.background }}
    >
      <h2
        className="text-4xl font-bold text-center mb-10"
        style={{ color: theme.primary }}
      >
        Welcome, {profile.name}
      </h2>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <FaUserCircle
            className="w-24 h-24"
            style={{ color: theme.primary }}
          />
        </div>

        <div className="space-y-3 text-lg text-gray-800">
          <div>
            <strong>{isOrganiser ? "Company Name" : "Name"}:</strong>{" "}
            {profile.name}
          </div>
          <div>
            <strong>Email:</strong> {profile.email}
          </div>
          <div>
            <strong>Phone:</strong> {profile.phone}
          </div>
          <div>
            <strong>Address:</strong> {profile.address}
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          <button
            onClick={() => {
              setShowProfileForm(!showProfileForm);
              setShowPasswordForm(false);
              setNewProfile(profile);
            }}
            style={{ backgroundColor: theme.primary }}
            className="hover:opacity-90 text-white font-semibold px-8 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <FaUserEdit /> Edit Profile
          </button>

          <button
            onClick={() => {
              setShowPasswordForm(!showPasswordForm);
              setShowProfileForm(false);
            }}
            style={{ backgroundColor: theme.secondary }}
            className="hover:opacity-90 text-white font-semibold px-8 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <RiLockPasswordLine /> Change Password
          </button>
        </div>

        {showProfileForm && (
          <div className="space-y-4 mt-8">
            <input
              type="text"
              name="name"
              value={newProfile.name}
              onChange={(e) =>
                setNewProfile({ ...newProfile, name: e.target.value })
              }
              placeholder={isOrganiser ? "Company Name" : "Name"}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none"
              style={{ borderColor: theme.primary }}
            />
            <input
              type="email"
              name="email"
              value={newProfile.email}
              onChange={(e) =>
                setNewProfile({ ...newProfile, email: e.target.value })
              }
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none"
              style={{ borderColor: theme.primary }}
            />
            <input
              type="text"
              name="phone"
              value={newProfile.phone}
              onChange={(e) =>
                setNewProfile({ ...newProfile, phone: e.target.value })
              }
              placeholder="Phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none"
              style={{ borderColor: theme.primary }}
            />
            <input
              type="text"
              name="address"
              value={newProfile.address}
              onChange={(e) =>
                setNewProfile({ ...newProfile, address: e.target.value })
              }
              placeholder="Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none"
              style={{ borderColor: theme.primary }}
            />
            <button
              type="submit"
              onClick={handleProfileUpdate}
              style={{ backgroundColor: theme.primary }}
              className="w-full text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Save Changes
            </button>
          </div>
        )}

        {showPasswordForm && (
          <div className="space-y-4 mt-8">
            <input
              type="password"
              name="current"
              value={password.current}
              onChange={(e) =>
                setPassword({ ...password, current: e.target.value })
              }
              placeholder="Current Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none"
              style={{ borderColor: theme.secondary }}
            />
            <input
              type="password"
              name="new"
              value={password.new}
              onChange={(e) =>
                setPassword({ ...password, new: e.target.value })
              }
              placeholder="New Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none"
              style={{ borderColor: theme.secondary }}
            />
            <input
              type="password"
              name="confirm"
              value={password.confirm}
              onChange={(e) =>
                setPassword({ ...password, confirm: e.target.value })
              }
              placeholder="Confirm New Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none"
              style={{ borderColor: theme.secondary }}
            />
            <button
              onClick={handlePasswordChange}
              type="submit"
              style={{ backgroundColor: theme.secondary }}
              className="w-full text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Update Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
