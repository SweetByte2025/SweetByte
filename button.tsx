import React from "react";

export function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={\`px-4 py-2 rounded-md font-semibold \${className}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
