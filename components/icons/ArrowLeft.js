import * as React from "react";

function SvgArrowLeft(props) {
  return (
    <svg width={8} height={15} fill="none" {...props}>
      <path
        opacity={0.98}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 13.438L2.81 7.482l5.157-5.993L6.612 0 0 7.446 6.579 15 8 13.438z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgArrowLeft;
