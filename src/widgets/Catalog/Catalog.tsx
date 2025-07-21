import { useGetProductsQuery } from '../../entities/Products/productsApi';
import Button from '../../share/ui/Button/Button';

// import Filters from '../../share/Filters/Filters';
import ProductItem from '../../share/ui/ProductItem/ProductItem';

import  {ProductItemProps} from '../../share/ui/interfaces'
import './Catalog.css';

const Catalog = () => {
const {data: products, isLoading, isError} = useGetProductsQuery(undefined);


console.log(products)
if (isLoading) {
  return <span>Loading...</span>;
}

if (isError) {
  return <span>Error on responce</span>;
}
  return (
    <>
    <div className="category-container">
      <div className="catalog-header">
        <h2>Категории товаров</h2>
        <Button type={'link'} linkTo={'/cart'} >Купить</Button>
        <Button type={'button'} >Купить</Button>

        {/* <Filters /> */}
      </div>
      <ul className="catalog-list">
        {products.products.map((product:ProductItemProps) => (
        <li key={product.id} className="catalog-listitem">
          <ProductItem {...product} /> 
        </li>
        ))}       
      </ul>
      
      
    </div>
    
    </>
  )
};

export default Catalog;