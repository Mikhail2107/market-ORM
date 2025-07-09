import './SocialMedia.css';

const SocialMedia = () => {

  return (
    <>
      <span>Подписывайтесь на наши соцсети</span>
      <ul className="socialmedia-list">
        <li className="socialmedia-contact">
          <a href='https://vk.com' className='vk'>            
          </a>
        </li>
        <li className="socialmedia-contact">
          <a href='https://facebook.com' className='facebook'>          
          </a> 
        </li>
        <li className="socialmedia-contact">
          <a href='https://instagram.com' className='instagram'>
          </a>
        </li>
      </ul>
    </>
  )
};

export default SocialMedia;