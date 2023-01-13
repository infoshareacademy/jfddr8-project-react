//- `Header` - obsługujący parametr `title` oraz `logoSrc`

export function Header( {title, logoSrc} ) {
    logoSrc = 'https://play-lh.googleusercontent.com/6hwIJLyur1myTggmf6Xzvt28Zyepgv_5zDzZQ_YBKPVHpeS8U5I1T9WNDPpUGHdnsw=s128-rw';
    return (
        <header>
<div>{title}</div>
<img src={logoSrc} />
        </header>
    );
  };