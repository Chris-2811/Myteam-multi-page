import React from 'react';

function Button({ text, color, bg }) {
  console.log(color);

  return (
    <button
      className={`w-[153px] text-${color} bg-[${bg}] rounded-[24px] pt-[0.5626rem] pb-[0.675rem] hover:text-[${color}]`}
    >
      {text}
    </button>
  );
}

export default Button;
