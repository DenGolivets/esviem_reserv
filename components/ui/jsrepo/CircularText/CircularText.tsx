import React, { useState } from "react";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const [isHovered, setIsHovered] = useState(false);

  const getAnimationClass = () => {
    if (!onHover) return "animate-spin";

    if (isHovered) {
      switch (onHover) {
        case "slowDown":
          return "animate-spin-slow";
        case "speedUp":
          return "animate-spin-fast";
        case "pause":
          return "";
        case "goBonkers":
          return "animate-spin-fast";
        default:
          return "animate-spin";
      }
    }

    return "animate-spin";
  };

  return (
    <div
      className={`m-0 mx-auto rounded-full w-[200px] h-[200px] relative font-black text-white text-center cursor-pointer origin-center ${getAnimationClass()} ${className}`}
      style={{
        animationDuration: `${spinDuration}s`,
        animationPlayState:
          isHovered && onHover === "pause" ? "paused" : "running",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span
            key={i}
            className="absolute inline-block inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default CircularText;
