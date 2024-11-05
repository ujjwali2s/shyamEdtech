// src/components/Button.jsx
import React from "react";


const Button = ({ onClick, href, children, className = "", ...props }) => {
  const styles = `buttonborder p-2  ${className} font-playwrite`; // Removed padding classes
  return href ? (
    <a href={href} className={styles}  rel="noopener noreferrer" {...props}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
