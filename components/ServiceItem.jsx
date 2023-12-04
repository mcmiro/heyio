export default function ServiceItem(props) {
  return (
    <ul className="font-extralight text-xl tracking-wide">
      <span className="text-3xl border-b border-black block pb-2">
        0{props.index}/
        <span className="font-normal font-montserrat">{props.item.title}</span>
      </span>
      {props.item.content.map((el, index) => {
        return (
          <li className={index == 0 ? 'pt-2' : ''} key={index}>
            {el}
          </li>
        );
      })}
    </ul>
  );
}
