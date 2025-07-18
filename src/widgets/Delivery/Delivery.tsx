

import { SetStateAction, useState } from 'react';
import './Delivery.css';

const Delivery = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedCity(event.target.value);
  };
  return (

    <>  
      <div className="delivery-container">
        <h2 className="delivery-title">Доставка</h2>
        <form className="delivery-box">
          <div className="delivery-address-side">
            <label htmlFor="delivery-date" 
                  className="delivery-date-title delivery-label">Когда доставить?</label>
            <input type="date" 
                  name="date" 
                  id="delivery-date"  
                  className="delivery-date delivery-input" 
                  placeholder="Выберите дату"/>
            <input type="time" 
                  name="date-time" 
                  id="delivery-date-time"  
                  className="delivery-date-time delivery-input" 
                  placeholder="Выберите время"/>
            <label htmlFor="address" className="delivery-address-title delivery-label">Куда доставить?</label>
            <select value={selectedCity} onChange={handleChange} className="delivery-address delivery-input">
              <option value="" disabled hidden>
                Выберите город
              </option>
              <option value="moscow">Москва</option>
              <option value="spb">Санкт-Петербург</option>
              <option value="novosibirsk">Новосибирск</option>
            </select>
            <label htmlFor="name-client" className="delivery-name-title delivery-label">Имя</label>
            <input type="text" 
                  name="name-client" 
                  id="name-client"  
                  className="delivery-name delivery-input"/>
            <label htmlFor="phone-client" className="delivery-phone-title delivery-label">Телефон</label>
            <input type="tel" 
                  name="phone-client" 
                  id="phone-client"  
                  className="delivery-phone delivery-input"/>
          </div>
          <div className="delivery-sold">
            <span className="delivery-total-title">Стоимость товаров</span>
            <span className="delivery-sold-price">200000 руб</span>
            <span className="delivery-sold-title">Стоимость доставки</span>
            <span className="delivery-price">200 руб</span>
            <span className="delivery-total">Итого</span>
            <span className="delivery-total-price">200200 руб</span>
          </div>
          <button className="button-sold">Сделать заказ</button>
        </form>
      </div>
    </>
  )
};

export default Delivery;