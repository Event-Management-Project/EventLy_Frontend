import React from "react";
import { Menu } from "lucide-react";
import NotificationBell from "../../pages/NotificationBell";

function CustomerNavbar() {
  const user = {
    name: "Sourabh Magdum",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Sourabh+M&background=6A4FB6&color=fff&rounded=true",
  };

  return (
    <header className="w-full bg-[#EFEAFF] shadow-sm h-16 flex items-center justify-between px-4 md:px-10 sticky top-0 z-50 border-b border-[#D6CFF6]">
      <h1 className="text-2xl font-extrabold text-[#6A4FB6] tracking-wide">
        EVENTLY
      </h1>

      <div className="flex items-center gap-4 md:gap-6">
        <span className="font-medium text-gray-800">{user.name}</span>

        <NotificationBell />

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={user.avatarUrl}
            alt="User Avatar"
            className="w-9 h-9 rounded-full border-2 border-[#6A4FB6]"
          />
          <button className="md:hidden text-2xl text-gray-700">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}

export default CustomerNavbar;
