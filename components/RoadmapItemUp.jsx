export default function RoadmapItemUp(props) {
  const colors = [
    '#FC9595',
    '#F9E193',
    '#93BCF9',
    '#93F998',
    '#F9C393',
    '#AC93F9',
  ];
  const colorIndex = Math.floor(Math.random() * 5);
  return (
    <div className="flex flex-col items-center w-48 lg:w-72">
      <div className="inline-block">
        <p className="text-md font-extralight tracking-wider">
          {props.item.copy}
        </p>
      </div>
      <div className="w-full flex justify-center py-8">
        <div className="w-[1px] h-24 bg-black"></div>
      </div>
      <div className="svg-container relative">
        <svg
          width="138"
          height="128"
          viewBox="0 0 138 128"
          fill="none"
          className="handwrite-outline relative h-32 w-32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M116.3 101.956C142.693 82.0659 137.14 40.1605 114.045 20.5287C103.527 11.5879 73.0503 -4.89875 44.2763 5.13343C39.201 6.90285 35.0779 9.05365 31.5101 11.2789C-7.75278 35.769 -3.75423 69.9264 19.7389 96.2097C23.2426 100.13 27.402 103.987 33.0552 107.536C37.2833 110.19 42.5239 112.756 48.6396 114.823C66.5432 120.873 84.5609 119.293 99.7394 112.783C117.338 105.235 122.791 94.9142 125.778 85.1757C128.39 76.6598 128.891 68.1546 127.825 59.5985C125.827 43.5521 122.646 25.0598 98.5862 11.6016C88.0771 5.72342 74.2537 0.0947862 56.0786 5.13343C36.384 10.5935 21.3741 22.7809 17.2182 31.4401C6.00636 54.8001 11.5657 91.7619 40.9873 113.04C44.1602 115.334 47.1169 117.659 51.2891 119.712C54.5859 121.333 58.3449 122.886 62.4131 124.233C91.2437 133.78 127.096 101.945 130.21 94.4318C140.003 70.7972 138.536 43.7333 112.484 21.967"
            stroke={colors[colorIndex]}
            strokeWidth="3"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-black text-white rounded-full font-bold">
          {props.item.title}
        </div>
      </div>
    </div>
  );
}
