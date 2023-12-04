import { useState } from 'react';
import Arrow from '../public/icons/arrow-faq.svg';

const Faq = ({ index, title, content, active, onClick }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onClick={onClick}
      className={` cursor-pointer tracking-wider bg-black ${
        active ? 'bg-white' : ''
      }`}
    >
      <div
        className={`flex justify-between items-center text-[24px] transition-top-right  relative p-2  ${
          isHover && !active
            ? 'top-[-5px] right-[-5px] border border-black !bg-white'
            : 'top-0 right-0 border-b-transparent'
        }
				${active ? 'bg-white' : 'bg-[#f8f8f8]'}
				`}
      >
        <div className="flex gap-6">
          <span>{index}</span>
          {title}
        </div>

        <div>
          <img
            src={Arrow.src}
            alt="faq arrow"
            className={`h-4 transform transition duration-300 ease-in-out ${
              active && 'rotate-90'
            }
						${isHover && !active && 'rotate-45'}
						`}
          />
        </div>
      </div>
      {active && (
        <div className={`text-[20px] leading-8 px-10 py-8 bg-white`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Faq;
