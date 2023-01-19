
// (obrazek, tytuł, opis i cena)


export function ProductListItem(props) {
    return (
        <div>
            <img src={props.thumbnail} alt="" style={{with:80 + 'px'}}></img>
            {props.title} {props.description} {props.price}
            <button onClick={() => props.sumPrice(props.price)}>Dodaj do koszyka</button>
        </div>
    );
}