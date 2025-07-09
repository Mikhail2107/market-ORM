
import image from '../../../assets/image/user_auth.png';

import './ProfileMenu.css';

const ProfileMenu = () => {
  return (
    <>
    <ul className="profile-container">
      <li className="profile-item profile-cart">
        <span className='cart-count'>10+</span>
      </li>
      <li className="profile-item">
        <img className='profile-user' src={image} alt="profile-user" />
      </li>
    </ul>
    </>
  )
};

export default ProfileMenu;