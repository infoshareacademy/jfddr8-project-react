import React, { useState } from 'react';

export function Cart () {
    const[price, setPrice] = useState(0)
    const add = () => setPrice(price + 1)
    console.log(price)
}