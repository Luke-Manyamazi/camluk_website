// src/components/ui/button.jsx
import React from "react";

export function Button({ children, className = "", ariaLabel, ...props }) {
  return (
    <button
      className={`px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className}`}
      // If ariaLabel is provided, use it; otherwise, try to use the text from children
      aria-label={
        ariaLabel || (typeof children === "string" ? children : undefined)
      }
      {...props}
    >
      {children}
    </button>
  );
}
