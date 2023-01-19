export function Item(props) {
  const name = props.name;
  const email = props.email;
  return (
    <>
      name:&nbsp;&nbsp;&nbsp;&nbsp;{name}&nbsp;&nbsp;&nbsp;&nbsp;email:&nbsp;&nbsp;&nbsp;&nbsp;{email}
    </>
  );
}
