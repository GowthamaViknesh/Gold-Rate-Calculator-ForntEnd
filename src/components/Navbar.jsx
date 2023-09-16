import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faArrowTrendUp,
  faCalculator,
  faCircleUser,
  faGem,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../context/context';
import { useContext } from 'react';

const Navbar = () => {
  const { loggedIn } = useContext(UserContext);

  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <FontAwesomeIcon icon={faGem} />
          AuraJewlers
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse navbar-control'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav px-2'>
            <Link className='nav-link active' aria-current='page' to='/'>
              <span className='svg-sprite diamond-icon'></span>
            </Link>
            <Link className='nav-link' to='/'>
              <FontAwesomeIcon icon={faHome} />
              Home
            </Link>

            {loggedIn ? (
              // Render links for authenticated users
              <>
                <Link className='nav-link' to='/livegoldrate'>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                  Live-Gold Rate
                </Link>
                <Link className='nav-link' to='/goldcalc'>
                  <FontAwesomeIcon icon={faCalculator} />
                  Gold-Rate
                </Link>
                <Link className='nav-link' to='/dashboard'>
                  <FontAwesomeIcon icon={faCircleUser} className='icon-nav' />
                  Profile
                </Link>
              </>
            ) : (
              // Render links for non-authenticated users
              <Link className='nav-link' to='/login'>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
