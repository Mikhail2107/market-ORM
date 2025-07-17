// import Filters from '../../Filters/Filters';
// import image from '../../../assets/image/defaultPhoto.png';

import './ProductItem.css';


interface ProductItemProps {
  id: number;
  title: string;
  images: string[];
  price: number;
  discountPercentage: number;
}
const ProductItem = ({title, id, images, price, discountPercentage }: ProductItemProps) => {
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
          <img src={images[0]} alt={title} className="product-image" />
          {/* <div className="product-filters">
            <Filters />
          </div>         */}
        </div>        
        <span className="product-title">{title}</span>
        <span className="product-price">{price}₽</span>
        <span className="product-oldprice">450000</span>
        <span className="product-discount">{discountPercentage}%</span>
        <button className="product-buy">Добавить в корзину</button>
      </div>
    </>
  )
};

export default ProductItem;