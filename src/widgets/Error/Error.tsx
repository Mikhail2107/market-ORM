import image404 from '../../assets/image/page404.png'
import './Error.css';

const Error = () => {

  return (
    <>
    <div className="error-box">
      <h2 className="error-title">PAGE NOT FOUND</h2>
      <img src={image404} alt="error-image" className="error-image" />
    </div>
      

    </>
  )
};

export default Error;