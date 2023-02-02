type ShoppingCartProps = {
    basketValue: number;
}

export const ShoppingCart = ({basketValue}: ShoppingCartProps):JSX.Element => {
    return (
        <h1>${basketValue}</h1>
    )
}
