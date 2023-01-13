//- `Header` - obsługujący parametr `title` oraz `logoSrc`

export function Header({ title, logoSrc }) {
  return (
    <header className="app-header">
      <div>{title}</div>
      <img src={logoSrc} />
    </header>
  );
}
