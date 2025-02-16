import React from "react";

interface ButtonBlackProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string; // Text to display inside the button
  className?: string; // Optional className for additional styling
}

const ButtonBlack: React.FC<ButtonBlackProps> = ({
  text,
  className = "",
  ...rest // Capture all other props
}) => {
  return (
    <button
      {...rest} // Spread all additional props here
      className={`group relative w-full flex justify-center py-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightMode-brand-primary disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonBlack;