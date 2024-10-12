// src/components/Heading.js
import React from "react";

const Heading = ({ level, children }) => {
  const Tag = level || "h1";

  if (level === "h1" && children.length) return <Tag className="text-3xl font-bold text-gray-800 mb-4">{children}</Tag>;

  if (level === "h2" && children.length) return <Tag className="text-2xl font-bold text-gray-800 mb-4">{children}</Tag>;

  if (level === "h3" && children.length) return <Tag className="text-1xl font-bold text-gray-800 mb-4">{children}</Tag>;

  if (level === "h4" && children.length) return <Tag className="text-5l font-bold text-gray-800 mb-4">{children}</Tag>;

  if (level === "h5" && children.length) return <Tag className="text-4l font-bold text-gray-800 mb-4">{children}</Tag>;

  if (level === "h6" && children.length) return <Tag className="text-3l font-bold text-gray-800 mb-4">{children}</Tag>;
};

export default Heading;
