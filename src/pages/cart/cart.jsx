import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products'
import { CartItem } from './cart-item'
import './cart.css'
import { useNavigate } from 'react-router-dom'
export const Cart = () => {

  const navigate = useNavigate();

  const {cartItems, getTotal} = useContext(ShopContext)
  const total = getTotal();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
      </div>

      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}

      </div>
      {total > 0 ? <div className="checkout">
        
        <p> Subtotal: Rs {total}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        {/* <button>Checkout</button> */}

      </div> : <h1>Your cart is empty</h1>}

    </div>
  )
}
