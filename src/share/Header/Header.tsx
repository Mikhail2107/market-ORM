

import Location from '../ui/Location/Location';
import Logo from '../ui/Logo/Logo';
import ProfileMenu from '../ui/ProfileMenu/ProfileMenu';
import SearchPanel from '../ui/SearchPanel/SearchPanel';


import './Header.css'

const Header = () => {

  return (
    <>
      <ul className="header-menu">
        <li className="header-item logo">
          <Logo />
        </li>
        <li className="header-item location">
          <Location />
        </li>
        <li className="header-item search-panel">
          <SearchPanel />
        </li>
        <li className="header-item profile-menu">
          <ProfileMenu />
        </li>
      </ul>
    </>
  )
}

export default Header;