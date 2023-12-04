export default function HeadlineMdShadow(props) {
  return (
    <props.attr className="text-7xl md:text-7xl font-extrabold tracking-wide blurred-text absolute top-16">
      {props.title}
    </props.attr>
  );
}
