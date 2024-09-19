import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../slices/cartSlice';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>

      {/* Total Calculation at the Top */}
      <div className="cart-summary-top">
        <div className="total-details">
          <p>Total Quantity: <span>{cart.totalQuantity}</span></p>
          <p>Total Amount: <span>${cart.totalAmount.toFixed(2)}</span></p>
        </div>
      </div>

      {/* Cart Items */}
      <div className="cart-items">
        {cart.products.map((product) => (
          <div key={product.id} className="cart-item">
            <div className="cart-item-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="details">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: <strong>${product.price}</strong></p>
              <div className="quantity">
                <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
              </div>
              <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
