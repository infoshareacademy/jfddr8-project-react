import { StyledFooter } from "./Footer.style.js";


export function Footer({ text }) {
    return (
      <footer className="app-footer">
        <div>{text}</div>
        <button>dark theme/light theme</button>
      </footer>
    );
  }