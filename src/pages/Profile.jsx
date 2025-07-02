import React, { useState } from "react";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

function Profile({ role = "customer", defaultData }) {
  const isOrganiser = role === "organiser";

  const theme = {
    background: isOrganiser ? "#FFF7D1" : "#EFEAFF",
    primary: isOrganiser ? "#F29F05" : "#6A4FB6",
    primaryHover: isOrganiser ? "#F2B705" : "#5a3fa1",
    secondary: isOrganiser ? "#A64B2A" : "#0D4D66",
    secondaryHover: isOrganiser ? "#8C3E22" : "#b63c7a",
  };

  const [profile, setProfile] = useState(
    defaultData || {
      name: isOrganiser ? "Organizer John" : "John Doe",
      email: "john@example.com",
      phone: "9876543210",
      address: "123 Main Street, City",
    }
  );

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [newProfile, setNewProfile] = useState(profile);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setProfile(newProfile);
    setShowProfileForm(false);
    alert("Profile updated successfully!");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (password.new !== password.confirm) {
      alert("Passwords do not match");
      return;
    }
    setPassword({ current: "", new: "", confirm: "" });
    setShowPasswordForm(false);
    alert("Password changed successfully!");
  };

  return (
    <div
      className="min-h-screen p-8"
      style={{
        backgroundColor: theme.background,
      }}
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
            <strong>Name:</strong> {profile.name}
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
          <form className="space-y-4 mt-8" onSubmit={handleProfileUpdate}>
            {["name", "email", "phone", "address"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                value={newProfile[field]}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, [field]: e.target.value })
                }
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none"
                style={{ borderColor: theme.primary }}
              />
            ))}
            <button
              type="submit"
              style={{ backgroundColor: theme.primary }}
              className="w-full text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Save Changes
            </button>
          </form>
        )}

        {showPasswordForm && (
          <form className="space-y-4 mt-8" onSubmit={handlePasswordChange}>
            {["current", "new", "confirm"].map((type) => (
              <input
                key={type}
                type="password"
                name={type}
                value={password[type]}
                onChange={(e) =>
                  setPassword({ ...password, [type]: e.target.value })
                }
                placeholder={
                  type === "current"
                    ? "Current Password"
                    : type === "new"
                    ? "New Password"
                    : "Confirm New Password"
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none"
                style={{ borderColor: theme.secondary }}
              />
            ))}
            <button
              type="submit"
              style={{ backgroundColor: theme.secondary }}
              className="w-full text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Update Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Profile;