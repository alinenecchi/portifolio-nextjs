import * as React from 'react';

function SvgArrowRight(props) {
  return (
    <svg width={8} height={15} fill="none" {...props}>
      <path
        opacity={0.98}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13.438l5.19-5.956L.033 1.489 1.388 0 8 7.446 1.421 15 0 13.438z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgArrowRight;
