function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.logoSrc} width="100px" height="100px" />
    </div>
  );
}
export default Header;
