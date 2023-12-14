import React from 'react'

interface Props {
    cartItems: string[];
    onClear: () => void;
}
function Cart({ cartItems, onClear }: Props) {
    return (
        <div>
            <div>Cart</div>
            <ul>
                {cartItems.map(item => <li key={item}>{item}</li>)}
            </ul>
            <button onClick={onClear}>Clear cart</button>
        </div>
    )
}

export default Cart