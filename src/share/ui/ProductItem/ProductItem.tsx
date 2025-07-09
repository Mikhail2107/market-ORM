import Filters from '../../Filters/Filters';
import image from '../../../assets/image/defaultPhoto.png';

import './ProductItem.css';


interface ProductItemProps {
  id: number;
  name?: string;
  // productPrice: number;
  // productOldPrice: number;
  // productTax: number;
  // productPathImg: string;
}
const ProductItem = ({name, id}: ProductItemProps) => {
  // const product:ProductItemProps = 
  //   { 
      
  //     productPrice: 300000,
  //     productOldPrice: 450000,
  //     productTax: -10,
  //     productPathImg: image,
  //   }
  
  return (
    <>
      <div key={id} className="product-card">
        <div className="product-image-box">
          <img src={image} alt="#" className="product-image" />
          <div className="product-filters">
            <Filters />
          </div>        
        </div>        
        <span className="product-title">{name}</span>
        <span className="product-price">300000</span>
        <span className="product-oldprice">450000</span>
        <span className="product-discount">10</span>
        <button className="product-buy">Добавить в корзину</button>
      </div>
    </>
  )
};

export default ProductItem;