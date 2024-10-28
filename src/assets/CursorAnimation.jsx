// src/components/CursorAnimation.jsx
import React, { useEffect, useState } from "react";
import "./cursorAnimation.css";

function CursorAnimation() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Detect mouse enter/leave on clickable elements
    const clickableElements = document.querySelectorAll("button, a, .cursor-hover");
    
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    clickableElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clickableElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isHovered ? "hovered" : ""}`}
        style={{
          left: `${position.x}px`, // Use left instead of transform
          top: `${position.y}px`, // Use top instead of transform
        }}
      />
      {/* Hide default cursor when hovered */}
      <style>{`
        body {
          cursor: ${isHovered ? 'none' : 'default'}; /* Hide default cursor when hovered */
        }
      `}</style>
    </>
  );
}

export default CursorAnimation;
