import './PlayMarkets.css';

const PlayMarkets = () => {
  return (
    <>
    <span>Скачивайте наши приложения</span>
      <ul className="downloads">
        <li className="downloads-store">
          <a href="http://appstore.com" className='appstore'></a>
        </li>
        <li className="downloads-store">
        <a href="http://googlestore.com" className='googlestore'></a>
        </li>
      </ul>
    </>
  )
};

export default PlayMarkets;