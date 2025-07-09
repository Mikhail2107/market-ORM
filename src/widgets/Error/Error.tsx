import image404 from '../../assets/image/page404.png'
import './Error.css';

const Error = () => {

  return (
    <>
    <div className="error-box">
      <h1 className="error-title">PAGE NOT FOUND</h1>
      <img src={image404} alt="error-image" className="error-image" />
    </div>
      

    </>
  )
};

export default Error;