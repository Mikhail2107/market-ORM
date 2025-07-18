
import HistoryCard from '../HistoryCard/HistoryCard';
import './History.css';

const History = () => {

  return (
    <>
      <div className="history-container">
        <div className="history-box">
        <h2>История заказов</h2>
          <ul className="history-list">
            <li className="history-card">
              <HistoryCard />
            </li>
            <li className="history-card">
              <HistoryCard />
            </li>
            <li className="history-card">
              <HistoryCard />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
};

export default History;