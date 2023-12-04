export default function HeadlineLg(props) {
  return (
    <props.attr className="text-8xl lg:text-9xl xl:text-xxl font-montserrat font-headline-bold tracking-wide">
      {props.title}
    </props.attr>
  );
}
