export function Header(props) {
    return (
      <header className="app-header">
        <div>{props.title}</div>
        <img src={props.logoSrc} />
      </header>
    );
  }