import { useState } from 'react';
import '../App.css';
import products from '../data/data.json';
import Cards from './cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [data, setData] = useState(products);

  return (
    <div id='cards_landscape_wrap-2'>
      <div className='container'>
        <h2 className='about_Title'>
          Our Designs <FontAwesomeIcon icon={faGem} /> Fine Cut
        </h2>
        <div className='eleven'>
          <h4>
            We can make custom <FontAwesomeIcon icon={faScrewdriverWrench} />{' '}
            Designs for your Desire
          </h4>
        </div>
        <div className='row'>
          {data.map((product, index) => (
            <div key={index} className='col-xs-6 col-sm-6 col-md-3 col-lg-3'>
              <Cards
                thumbnail={product.thumbnail}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={product.rating}
                brand={product.brand}
                category={product.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
