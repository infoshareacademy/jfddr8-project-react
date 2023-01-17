export function Content(props) {
  return (
    <div className="content">User list:
    <div> {props.children}</div>
    </div>
  );
}
