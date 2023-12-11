export default function HeadlineMdShadow(props) {
  return (
    <props.attr className="text-6xl md:text-7xl font-montserrat font-headline-bold tracking-wide blurred-text absolute top-8 md:top-16">
      {props.title}
    </props.attr>
  );
}
