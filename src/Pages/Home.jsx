import shape1 from '../Assets/shape-1.png';
import shape2 from '../Assets/shape-2.png';
import videobg from '../Assets/models.mp4';
import { FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';
import About from '../components/About';
import '../App.css';
import Company from '../components/Company';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRing } from '@fortawesome/free-solid-svg-icons';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/context';
import { useContext } from 'react';

const Home = () => {
  const { setLoggedIn } = useContext(UserContext);

  return (
    <>
      <section className='home' id='home'>
        <div className='row'>
          <div className='col-md text-center'>
            <p className='home_subtitle'>
              Welcome <span>to Our Store!!</span>
            </p>
            <h1 className='home_title'>
              <span>Aura</span> Jewells
            </h1>
            <p className='home_job'>
              <span className='text-center'>Worlds</span>
              <b>Fine Cut Jewels!</b>
            </p>
            <p className='home_text text-center'>
              Your ultimate destination for gold and diamond jewelry. Explore
              over 7000+ elegant designs and get the best prices on the latest
              collections.
            </p>
            <div className='home_socials text-center'>
              <a href='...' className='home_socilas-link'>
                <FaTwitter />
              </a>
              <a href='...' className='home_socilas-link'>
                <FaDribbble />
              </a>
              <a href='...' className='home_socilas-link'>
                <FaBehance />
              </a>
            </div>
            <div className='home_btn'>
              <Link to='/login' className='btn text_cs'>
                Explore
              </Link>
            </div>
          </div>
        </div>

        <div className='col text-center home_brand'>
          <div className='home_img-wrapper'>
            <h2 className='text-center second_head'>
              <FontAwesomeIcon icon={faRing} /> Worlds Thinnest diamonds Makers{' '}
              <br />
            </h2>
            <p className='text-center mb-3'>
              We Make the Jewlles as your Desire!!
            </p>
            <div className='videos'>
              <video src={videobg} autoPlay loop muted />
            </div>
            <img src={shape1} alt='secondimage' className='shape shape_1' />
            <img src={shape2} alt='secondimage' className='shape shape_2' />
            <img src={shape1} alt='secondimage' className='shape shape_3' />
          </div>
        </div>
      </section>
      <About />
      <Company />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
