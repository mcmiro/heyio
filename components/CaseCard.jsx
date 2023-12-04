import Image from "next/image";

export default function CaseCard(props) {
  return (
    <div className="case-card w-full mt-16 md:mt-0">
      <div className="img-container shadow">
        <div className="case-img">
          <Image src={props.item.img} alt="{props.item.alt}" layout="fill" />
        </div>
      </div>
      <div className="flex gap-4 items-center font-bold mt-4 text-xl">
        {props.item.tags.map((el, index) => {
          return <a href={`/${el.href}`} key={index} className="px-8 text-[#606177] inline-block">{el.tag}</a>;
        })}
      </div>
    </div>
  )
}