import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

const Company = () => {
  return (
    <div className='container text-center px-5'>
      <h1>Our Brands</h1>
      <h4>
        <FontAwesomeIcon icon={faMedal} />
        We are collabrated with Worlds 1st Finest Gold Makers
      </h4>

      <div className='row justify-content-center mt-4'>
        <div className='col-md-6 mt-5 ' style={{ width: '22rem' }}>
          <img
            src='https://staticimg.titan.co.in/Titan/brands/zoya-banner.jpg'
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'></h5>
            <p className='card-text'>
              <img src='https://staticimg.titan.co.in/Titan/brands/zoya.png' />
            </p>
          </div>
        </div>

        <div className='col-md-6 mt-5' style={{ width: '22rem' }}>
          <img
            src='https://staticimg.titan.co.in/Titan/brands/taneira-banner.jpg'
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'></h5>
            <p className='card-text'>
              <img src='https://staticimg.titan.co.in/Titan/brands/taneira.png' />
            </p>
          </div>
        </div>

        <div className='col-md-6 mt-5' style={{ width: '22rem' }}>
          <img
            src='https://staticimg.titan.co.in/Titan/brands/mia-banner-2.jpg'
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'></h5>
            <p className='card-text'>
              <img src='https://staticimg.titan.co.in/Titan/brands/mia.png' />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
