import productCardDefault from '../../assets/image/productCardDefault.svg'
import './ProductCard.css';

const ProductCard = () => {
  return (
    <>
      <div className="product-container">
        <h2 className="product-card-title">Смартфон Xiaomi Redmi Note 8 Pro 6/128GB, изумрудный</h2>
        <div className="product-card-box">
          <div className="product-card-image-box">
            <img src={productCardDefault} alt='dfd' className="main-image"/>
            <ul className="secondary-image-list">
              <li className="secondary-image-item">
                <img src={productCardDefault} alt="dgfd" />
              </li>
              <li className="secondary-image-item">
                <img src={productCardDefault} alt="dgfd" />
              </li>
              <li className="secondary-image-item">
                <img src={productCardDefault} alt="dgfd" />
              </li>
              <li className="secondary-image-item">
                <img src={productCardDefault} alt="dgfd" />
              </li>
              <li className="secondary-image-item">
                <img src={productCardDefault} alt="dgfd" />
              </li>
              <li className="secondary-image-item">
                <img src={productCardDefault} alt="dgfd" />
              </li>
            </ul>
          </div>
          <div className="product-card-description">
            <span className="product-card-price"><b>17990Р</b>за шт</span>
            <ul className="product-size-list">
              <span>Размер</span>
              <li className="product-size-item size-active">
                <span>30см/650гр</span></li>
              <li className="product-size-item">
                <span>45см/1050гр + 300 руб</span>
              </li>

            </ul>
            <button className="product-card-tobuy">В корзину за 17990р</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default ProductCard;