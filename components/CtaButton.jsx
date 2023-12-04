import React, { useState } from 'react';

export default function CtaButton(props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a href={props.href} className={`relative top-0 right-0`}>
        <div
          className={`rounded bg-white border-2 text-black border-black px-16 py-2 relative text-2xl tracking-wider whitespace-nowrap z-20 ${
            isHover ? 'top-2 right-2' : 'top-0 right-0'
          } transition-all ease-in-out duration-300`}
        >
          {props.title}
        </div>
      </a>
      <div className="rounded bg-black w-full h-full absolute top-2 right-2 z-10"></div>
    </div>
  );
}
