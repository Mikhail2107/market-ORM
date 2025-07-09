
import './Aside.css';

const Aside = () => {

  return (
    <>
      <div className="aside-container">
        <ul className="aside-list">
          <li className="aside-item">
            <div className="item-image"></div>
            <span className='item-title'>Получай товары бесплатно</span>
            <button className='item-button'>Узнать подробнее</button>
          </li>
        </ul>
      </div>      
    </>
  )
};

export default Aside;