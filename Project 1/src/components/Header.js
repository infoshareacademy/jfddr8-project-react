
export function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.logoSrc}/>
        </div>
    );
}

