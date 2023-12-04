import React, { useState } from 'react';

export default function CtaButton(props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <button
        type={props.type}
        className={`rounded bg-black border-2 text-white border-white px-12 py-2 relative text-2xl tracking-wider whitespace-nowrap z-20 ${
          isHover ? 'top-2 right-2' : 'top-0 right-0'
        } transition-all ease-in-out duration-300`}
      >
        {props.title}
      </button>
      <div className="rounded bg-white w-full h-full absolute top-2 right-2 z-10"></div>
    </div>
  );
}
