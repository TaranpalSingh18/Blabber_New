import React from "react"


function HoverCard({ content, isVisible }) {
    return (
      <div
        className={`absolute left-0 right-0 bottom-0 transform ${
          isVisible ? "translate-y-full opacity-100" : "translate-y-0 opacity-0"
        } transition-all duration-300 ease-in-out bg-gray-800 p-4 rounded-b-lg shadow-lg`}
      >
        <p className="text-sm text-white">{content}</p>
      </div>
    )
  }
  
  export default HoverCard
  
  