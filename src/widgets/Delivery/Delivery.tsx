

import { SetStateAction, useState } from 'react';
import './Delivery.css';
import Button from '../../share/ui/Button/Button';

const cities = [
  { id: 1, value: "", title: "Выберите город", disabled: true, hidden: true },
  { id: 2, value: "moscow", title: "Москва" },
  { id: 3, value: "spb", title: "Санкт-Петербург" },
  { id: 4, value: "ekb", title: "Екатеринбург" },
  { id: 5, value: "rnd", title: "Ростов-на-Дону" },
];
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
            <select 
              value={selectedCity} 
              onChange={handleChange} 
              className="delivery-address delivery-input"
            >
              {cities.map((city) => (
                <option 
                  key={city.id} 
                  value={city.value}
                  disabled={city.disabled} 
                  hidden={city.hidden}
                >
                  {city.title}
                </option>
              ))}
            </select>
            <label htmlFor="name-client" className="delivery-name-title delivery-label">Имя</label>
            <input type="text" 
                  name="name-client" 
                  id="name-client"  
                  className="delivery-name delivery-input"/>
            <label htmlFor="phone-client" className="delivery-phone-title delivery-label">Телефон</label>
            <input type="tel" 
                  name="phone-client" 
                  id="phone-client" inputMode='tel' 
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
          <Button className="button-sold" children={'Сделать заказ'} type={'submit'} variant={'button'}/>
        </form>
      </div>
    </>
  )
};

export default Delivery;