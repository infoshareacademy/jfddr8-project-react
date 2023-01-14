function Header(props) {
  return (
    <div className="head">
      <img src={props.logoSrc} width="100px" height="100px" />
      <h1>{props.title}</h1>
    </div>
  );
}
export default Header;
