import { useGetCategoriesQuery } from '../../entities/Catigories/categoriesApi';
import './Filters.css';

interface StilesCategoriesProps {
  id: number;
  bgColor: string;
  border: string;
  textColor: string;
}

interface CategoriesApiResponse { 
  id: number;
  name: string;
  categories_id?: number; 
}

interface CombinedProps extends StilesCategoriesProps, CategoriesApiResponse {}

const Filters = () => {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery(undefined);
  const filters: StilesCategoriesProps[] = [
    { id: 1, bgColor: '#2967FF', border: '#2967FF', textColor: 'white' },
    { id: 2, bgColor: '#58CF18', border: '#58CF18', textColor: 'white' },
    { id: 3, bgColor: '#FFA601', border: '#FFA601', textColor: 'white' },
    { id: 4, bgColor: '#FF7CB4', border: '#FF7CB4', textColor: 'white' },
    { id: 5, bgColor: '#FFA601', border: '#FFA601', textColor: 'white' },
    { id: 6, bgColor: '#FFFFFF', border: '#FF2D87', textColor: 'black' },
    { id: 7, bgColor: '#007bff', border: '#007bff', textColor: 'white' }, 
    { id: 8, bgColor: '#28a745', border: '#28a745', textColor: 'white' },  
  ]; 
  
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error on responce</span>;
  }

  const combinedData: CombinedProps[] = filters.map(filter => {
    const category = categories?.find((cat: CategoriesApiResponse) => cat.id === filter.id);
    return { ...filter, ...category }; 
  });

  return (
    <div className="filters-container">
      <ul className="filters-list">
        {combinedData.map(item => (
          <li
            key={item.id}
            style={{
              background: item.bgColor,
              border: `1px solid ${item.border}`,
              color: item.textColor,
            }}
            className="filters-item"
          >
            {item.name || null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;

