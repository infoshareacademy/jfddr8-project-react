// import styles from "../App.css";


function Header(props) {
  return (
    <div className="head">
    <h1>{props.title}</h1>
    <img src={props.logoSrc} />
    </div>
  )
}


export default Header