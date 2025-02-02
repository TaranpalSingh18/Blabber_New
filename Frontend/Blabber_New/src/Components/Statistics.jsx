import { useState } from "react"
import { Flame, Lock, Fingerprint } from "lucide-react"
import React from "react"

// Internal HoverCard component
const HoverCard = ({ content, isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg transition-opacity duration-200">
      <p className="text-sm">{content}</p>
    </div>
  );
};

function Statistics() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const data = [
    {
      icon: <Flame className="w-6 h-6" style={{ color: "#24CFA6" }} />,
      text: "Live Conversations",
      content: "Experience real-time interactions with our cutting-edge live conversation feature.",
    },
    {
      icon: <Lock size={20} strokeWidth={2.5} className="w-6 h-6" style={{ color: "#24CFA6" }} />,
      text: "Privacy & Security",
      content: "Your data is protected with state-of-the-art encryption and security measures.",
    },
    {
      icon: <Fingerprint size={20} strokeWidth={1.5} className="w-6 h-6" style={{ color: "#24CFA6" }} />,
      text: "User Authentication",
      content: "Secure and seamless user authentication to protect your identity.",
    },
  ]

  return (
    <div className="flex flex-row flex-wrap gap-8 justify-center items-center bg-black ">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-white bg-black h-64 w-64 flex items-start p-4 relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center gap-2">
            {item.icon}
            <h2 className="font-semibold text-xl neura">{item.text}</h2>
          </div>
          <div className="absolute top-16 left-0 w-full px-4">
            <HoverCard content={item.content} isVisible={hoveredIndex === index} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Statistics