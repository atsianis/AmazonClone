import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {

    const [state, dispatch] = useStateValue();

    let totalPrice;
    totalPrice = state.basket.reduce((totalPrice, item) => {
        return totalPrice += item.price
    }, 0);

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({state.basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={totalPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}    
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
