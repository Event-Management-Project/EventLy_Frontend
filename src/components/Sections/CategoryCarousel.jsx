import React from "react";
import {
  PartyPopper,
  Music2,
  Landmark,
  Mic2,
  Clapperboard,
} from "lucide-react";


const categories = [
  {
    name: "Music",
    icon: <Music2 className="w-10 h-10 text-[#6A4FB6]" />,
  },
  {
    name: "Technology",
    icon: <Mic2 className="w-10 h-10 text-[#8B76D3]" />,
  },
  {
    name: "Culture",
    icon: <Landmark className="w-10 h-10 text-[#6A4FB6]" />,
  },
  {
    name: "Party",
    icon: <PartyPopper className="w-10 h-10 text-[#8B76D3]" />,
  },
  {
    name: "Film",
    icon: <Clapperboard className="w-10 h-10 text-[#6A4FB6]" />,
  },
];

const CategoryCarousel = () => {
  return (
    <div className="mt-14 px-4 bg-[#F8F6FF] py-10">
      <h2 className="text-2xl font-bold text-[#4B3B78] mb-6 text-center">
        Browse by Category
      </h2>
      <div className="flex overflow-x-auto gap-5 p-2 scrollbar-hide justify-center">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="min-w-[140px] flex flex-col items-center bg-white shadow-md rounded-2xl p-6 border border-[#E0D6F8] hover:bg-[#EFEAFF] hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-3">{cat.icon}</div>
            <span className="text-base font-medium text-[#4B3B78]">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
