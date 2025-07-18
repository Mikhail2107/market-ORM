import productDefault from '../../assets/image/productImage.png'

import './Cart.css';


const Cart = () => {

  return (
    <>
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">Корзина</h2>
        <span className="cart-clear">Очистить корзину</span>
      </div>
      <div className="cart-box">
        <div className="cart-state">
          <span className="cart-state-title">Xiaomi</span>          
          <span className="cart-state-total">Стоимость корзины: 1185000Р</span>
          <button className="cart-state-button">Оформить</button>
          <div className="cart-state-image"></div>
        </div>
        <ul className="cart-list">
          <li className="cart-product">
            <img src={productDefault} alt="" className="cart-product-image" />
            <span className="cart-product-title">Смартфон Xiaomi Redmi Note 8 Pro </span>
            <span className="cart-product-description">6/128GB белый</span>
            <div className="buttons-count">
              <button className="decriment">-</button>
              <span className="product-count">25</span>
              <button className="increment">+</button>
            </div>
            <span className="cart-product-price">от 350 000 руб</span>
            <button className="cart-product-delete"></button>
          </li>      
          <li className="cart-product">
            <img src={productDefault} alt="" className="cart-product-image" />
            <span className="cart-product-title">Смартфон Xiaomi Redmi Note 8 Pro </span>
            <span className="cart-product-description">6/128GB белый</span>
            <div className="buttons-count">
              <button className="decriment">-</button>
              <span className="product-count">25</span>
              <button className="increment">+</button>
            </div>
            <span className="cart-product-price">от 350 000 руб</span>
            <button className="cart-product-delete"></button>
          </li>
          <li className="cart-product">
            <img src={productDefault} alt="" className="cart-product-image" />
            <span className="cart-product-title">Смартфон Xiaomi Redmi Note 8 Pro </span>
            <span className="cart-product-description">6/128GB белый</span>
            <div className="buttons-count">
              <button className="decriment">-</button>
              <span className="product-count">25</span>
              <button className="increment">+</button>
            </div>
            <span className="cart-product-price">от 350 000 руб</span>
            <button className="cart-product-delete"></button>
          </li>      
        </ul>
      </div>
    </div>
      
    </>
  )
};

export default Cart;