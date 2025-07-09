import defaultProduct from '../../assets/image/productImage.png'

import './HistoryIdCard.css';

const HistoryIdCard =() => {

  return (
    <>
    <div className="order-card">
      <img src={defaultProduct} alt="order card" className="order-card-image" />
      <span className="order-card-title">Смартфон Xiaomi Redmi Note 8 Pro 6/128GB, белый</span>
      <span className="order-card-price">1000р/шт</span>
      <span className="order-card-count">10/10 шт</span>
    </div>
    </>
  )
}

export default HistoryIdCard;