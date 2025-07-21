import productDefault from '../../../../assets/image/productImage.png';
import './CartItem.css';

const CartItem = () => {

    return (
        <>
        <div className="cart-product">
          <img src={productDefault} alt="" className="cart-product-image" />
            <span className="cart-product-title">{'Смартфон Xiaomi Redmi Note 8 Pro '}</span>
            <span className="cart-product-description">{'6/128GB белый'}</span>
            <div className="buttons-count">
              <button className="decriment">-</button>
              <span className="product-count">{'25'}</span>
              <button className="increment">+</button>
            </div>
            <span className="cart-product-price">от {'350 000 руб'}</span>
            <button className="cart-product-delete"></button>
        </div>        
        </>
    )
};

export default CartItem;