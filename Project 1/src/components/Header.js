export function Naglowek(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img style={{ height: "100px" }} src={props.logoSrc} />
    </div>
  );
}
