//- `Footer` - obsługujący parametr `text`

export function Footer({ text }) {
  return (
    <footer className="app-footer">
      <div>{text}</div>
    </footer>
  );
}
