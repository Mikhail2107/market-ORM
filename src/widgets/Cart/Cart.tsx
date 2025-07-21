
import CartItem from '../../share/ui/Button/CartItem/CartItem';

import './Cart.css';
import Button from '../../share/ui/Button/Button';


const Cart = () => {

  return (
    <>
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">Корзина</h2>
        <Button type='button' className="cart-clear" children={'Очистить корзину'} variant={'button'}></Button>
      </div>
      <div className="cart-box">
        <div className="cart-state">
          <span className="cart-state-title">Xiaomi</span>          
          <span className="cart-state-total">Стоимость корзины: 1185000Р</span>
          <Button variant='link' linkTo={'/delivery'} className="cart-state-button" children={'Оформить'}></Button>
          <div className="cart-state-image"></div>
        </div>
        <ul className="cart-list">
          <li key={'1'}>
            <CartItem />
          </li>    
               
        </ul>
      </div>
    </div>
      
    </>
  )
};

export default Cart;