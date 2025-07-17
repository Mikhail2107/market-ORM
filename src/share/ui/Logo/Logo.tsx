import { Link } from 'react-router-dom';
import './Logo.css';

 const Logo = () => {
  return (
    <>
      <Link to={'/'} className='logo'>React</Link>
    </>
  )
}
export default Logo;