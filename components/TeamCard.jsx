import Image from 'next/image';

export default function TeamCard(props) {
  return (
    <div className="w-full bg-white rounded-2xl">
      <div className="rounded-2xl relative overflow-hidden aspect-square">
        <Image
          src={props.item.img}
          alt={props.item.alt}
          className="w-full h-full grayscale"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 pb-6">
        <div className="text-xl">{props.item.name}</div>
        <div className="font-extralight pt-4">
          {props.item.stack.map((el, index) => {
            return (
              <p key={index} className="">
                {el}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
