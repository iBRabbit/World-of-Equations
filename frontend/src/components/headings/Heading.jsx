// src/components/Heading.js
import React from "react";

const Heading = ({ level, children, className }) => {
  const Tag = level || "h1";

  const baseClass = "font-bold";

  // Menggabungkan baseClass dengan className yang diterima
  const combinedClass = `${baseClass} ${className || ""}`;

  // Render sesuai dengan level yang diterima
  if (level === "h1" && children.length) return <Tag className={`text-3xl ${combinedClass}`}>{children}</Tag>;

  if (level === "h2" && children.length) return <Tag className={`text-2xl ${combinedClass}`}>{children}</Tag>;

  if (level === "h3" && children.length) return <Tag className={`text-xl ${combinedClass}`}>{children}</Tag>;

  if (level === "h4" && children.length) return <Tag className={`text-lg ${combinedClass}`}>{children}</Tag>;

  if (level === "h5" && children.length) return <Tag className={`text-md ${combinedClass}`}>{children}</Tag>;

  if (level === "h6" && children.length) return <Tag className={`text-sm ${combinedClass}`}>{children}</Tag>;

  // Default render jika tidak ada level yang cocok
  return <Tag className={combinedClass}>{children}</Tag>;
};

export default Heading;
