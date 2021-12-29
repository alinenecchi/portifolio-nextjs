import * as React from 'react';

function SvgPlayArrow(props) {
  return (
    <svg width={22} height={41} fill="none" {...props}>
      <path
        opacity={0.98}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.4.8v19.923L.488 40.55H4.08L21.6 20.82 4.167.8H.4z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgPlayArrow;
