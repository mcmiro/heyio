export default function HeadlineMd(props) {
  return (
    <props.attr className="text-7xl md:text-7xl font-montserrat font-headline-bold py-8 md:py-16 tracking-wide">
      {props.title}
    </props.attr>
  );
}
