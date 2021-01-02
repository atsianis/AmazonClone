import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Product from './Product';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{basket}, dispatch] = useStateValue();

    console.log(basket);

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png" alt='ad'/>
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {basket.map((product)=>
                        <CheckoutProduct 
                            id = {product.id}
                            title = {product.title}
                            price = {product.price}
                            rating = {product.rating}
                            image = {product.image}
                        />
                    )}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
