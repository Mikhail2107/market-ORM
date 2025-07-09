

import './SearchPanel.css';

const SearchPanel = () => {

  return (
    <>
      <div className="search-box">
        <input className="search-input" placeholder='Поиск бренда, товара, категории...'/>
        <button className="search-button"/>
      </div>
    </>
  )
};

export default SearchPanel;