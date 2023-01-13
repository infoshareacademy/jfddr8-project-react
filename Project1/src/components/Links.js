
export function Links(props) {
  return (
    <div>
      {props.links.map((el) => (
        <p><a href={el.link}>{el.name}</a></p>
      ))}
    </div>
  );
}

