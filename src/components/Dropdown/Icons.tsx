'use client '

import React, { FC, SVGProps } from "react";

interface ChevronDownProps extends SVGProps<SVGSVGElement> {
  fill?: string;
  size?: number;
  rotate?: number;
}

export const ChevronDown: FC<ChevronDownProps> = ({
  fill = 'currentColor',
  size = 24,
  rotate = 0, 
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ transform: `rotate(${rotate}deg)`, transition: 'transform 0.3s ease' }}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};