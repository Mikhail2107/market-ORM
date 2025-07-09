
import './HistoryCard.css';

const HistoryCard = () => {

  return (
    <>
      <div className="card-shop">
        <div className="shop-logo"></div>
        <span className="shop-name">Xiaomi</span>
        <span className="history-card-date">21/12/2020</span>
        <a href="#" className="shop-ref">Подробнее</a>
      </div>
      <div className="order-template">
        <span className="order-status">Статус заказа</span>
        <span className="order-status-response">Оплачен/Завершен</span>
        <span className="order-number">Номер заказа</span>
        <span className="order-number-response">664-333</span>
      </div>
      <div className="order-about">
        <span className="order-count-product">Количество товаров</span>
        <span className="order-count">4 шт</span>
        <span className="order-price-total">Стоимость заказа</span>
        <span className="order-price">250000Р</span>
        <span className="order-adress-client">Адрес</span>
        <span className="order-adress">ул.Комсомольская</span>
      </div>
    </>
  )
};

export default HistoryCard;