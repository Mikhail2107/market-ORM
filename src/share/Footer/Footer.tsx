

import License from '../ui/License/License';
import Logo from '../ui/Logo/Logo';
import PlayMarkets from '../ui/PlayMarkets/PlayMarkets';
import SocialMedia from '../ui/SocialMedia/SocialMedia';
import './Footer.css';

const Footer = () => {

  return (
    <>
      <div className="footer-container">
        <ul className="footer-box">
          <li className="footer-item footer-logo ">
            <Logo />
          </li>
          <li className="footer-item contacts">
            <SocialMedia />
          </li>
          <li className="footer-item playmarkets">
            <PlayMarkets />
          </li>
          <li className="footer-item license">
            <License />
          </li>
        </ul>
      </div>
    </>
  )
}

export default Footer;