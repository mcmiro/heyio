import { useState } from 'react';
import Arrow from '../public/icons/arrow-faq.svg';

const DEFAULT_HEIGHT = 54;

const Faq = ({ index, title, isLastItem, content, active, onClick }) => {
  const [isHover, setIsHover] = useState(false);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);

  const handleElementHeight = (event) => {
    const element = event.currentTarget.querySelector('.faq-item');

    if (element) {
      const newHeight = element.offsetHeight;
      setHeight(newHeight + 1);
    }
    onClick();
  };

  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onClick={(e) => handleElementHeight(e)}
      className={`cursor-pointer tracking-wider bg-black relative transition-all ease-in-out duration-300 ${
        index === 1 ? 'border-t border-black' : ''
      }`}
    >
      <div
        className={`flex justify-between items-center text-[24px] transition-top-right  relative p-2 ${
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

        <div className="shrink-0">
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
      <div
        className="overflow-hidden transition-all ease-in-out duration-300 border-b border-black"
        style={{
          height: active
            ? isLastItem
              ? height + 'px'
              : height + 'px'
            : isLastItem
            ? '1px'
            : 0,
        }}
      >
        <div
          className={`text-[20px] leading-8 bg-white faq-item overflow-hidden px-10 py-8`}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default Faq;
