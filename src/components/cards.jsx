import { faCopyright, faStar, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cards = (props) => {
  // eslint-disable-next-line react/prop-types
  const { thumbnail, title, description, price, rating, brand } = props;

  return (
    <>
      <a href=''>
        <div className='card-flyer'>
          <div className='text-box'>
            <div className='image-box'>
              <img src={thumbnail} alt='logo' />
            </div>
            <div className='text-container'>
              <h6>{title}</h6>
              <p>{description}</p>
              <p>
                <b>
                  <FontAwesomeIcon icon={faTags} />
                  {price}
                </b>
              </p>
              <p>
                <b>
                  <FontAwesomeIcon icon={faStar} />
                  {rating}
                </b>
              </p>
              <p>
                <b>
                  {' '}
                  <FontAwesomeIcon icon={faCopyright} />
                  {brand}
                </b>
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Cards;
