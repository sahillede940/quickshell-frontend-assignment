import React from "react";

const colorPalette = [
// light colors
"#FFD700",
"#FF7F50",
"#FFA07A",
"#FF6347",
"#FF4500",
"#FF8C00",
"#FFA500",
"#FFD700",
"#FFDAB9",
];

const getColor = (name) => {
  // use hash code of name to get a color from the palette
  const hash = name.split("").reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  return colorPalette[hash % colorPalette.length];
};

const getInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
};

const InitialAvatar = ({ name, size = 100 }) => {
  const initials = getInitials(name);
  const backgroundColor = getColor(name);

  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        backgroundColor,
        borderRadius: "50%",
        display: "inline-block",
      }}
    >
      <text
        x="50%"
        y="50%"
        dy=".35em"
        textAnchor="middle"
        fontSize={size / 2.5}
        fontWeight="bold"
        fill="black"
        fontFamily="Arial, sans-serif"
      >
        {initials}
      </text>
    </svg>
  );
};

export default InitialAvatar;
