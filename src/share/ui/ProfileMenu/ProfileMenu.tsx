import {Link} from 'react-router-dom'
import image from '../../../assets/image/user_auth.png';

import './ProfileMenu.css';

const ProfileMenu = () => {
  return (
    <>
    <ul className="profile-container">
      <Link to={'/cart'} className="profile-item profile-cart">
        <span className='cart-count'>10+</span>
      </Link>
      <Link to={'/history'} className="profile-item">
        <img className='profile-user' src={image} alt="profile-user" />
      </Link>
    </ul>
    </>
  )
};

export default ProfileMenu;