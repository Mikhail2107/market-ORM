// import defaultProduct from '../../assets/image/productImage.png'
import HistoryIdCard from '../HistoryIdCard/HistoryIdCard';
import './HistoryPageId.css';

const HistoryPageId = () => {

  return (
    <>
      <div className="order-container">
      <h1>История заказов</h1>
        <button className="order-button--undo">Назад</button>
        <div className="order-box">
          <h2 className="order-title">Заказ №Z2020-17</h2>
          <h3 className="order-list-title">Товары</h3>
          <ul className="order-list">
            <li className="order-item">
              <HistoryIdCard />
            </li>
            <li className="order-item">
              <HistoryIdCard />
            </li>
            <li className="order-item">
              <HistoryIdCard />
            </li>
            <li className="order-item">
              <HistoryIdCard />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
};

export default HistoryPageId;