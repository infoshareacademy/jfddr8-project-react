export function Naglowek(props) {
  return (
    <div style={{display: "flex"}}>
      <img style={{ height: "100px" }} src={props.logoSrc} />
      <h1>{props.title}</h1>
    </div>
  );
}
