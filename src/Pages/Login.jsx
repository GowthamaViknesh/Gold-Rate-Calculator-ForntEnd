import model from '../Assets/loginmodel.jpg';
import { UserContext } from '../context/context';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faLock,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';

const Login = () => {
  const {
    isLoading,
    loggedIn,
    setEmail,
    setPassword,
    email,
    password,
    loginUser,
  } = useContext(UserContext);

  return (
    <div className='container mt-5 me-2'>
      <div className='row'>
        <div className='col-md-5 ms-5'>
          <div className='card-login text-center'>
            <img src={model} alt='model' className='img-fluid login-image' />
          </div>
        </div>
        <div className='col-md-5 mt-3 py-3'>
          <div className='row'>
            <div className='col'>
              <h2 className='mb-4'>
                <FontAwesomeIcon icon={faRightToBracket} />
                SIGN IN
              </h2>
              <div className='mb-3'>
                <label className='contact_form'>
                  <FontAwesomeIcon icon={faAt} />
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='Enter your email'
                  value={email}
                  className='form-control login-input mt-3'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label className='contact_form mt-3'>
                  <FontAwesomeIcon icon={faLock} />
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  placeholder='Enter your password'
                  value={password}
                  className='form-control login-input mt-3'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type='submit' className='btn mt-3' onClick={loginUser}>
                {isLoading ? (
                  <>
                    <span
                      className='spinner-border spinner-border-sm me-2'
                      role='status'
                      aria-hidden='true'
                    ></span>
                    Signing In...
                  </>
                ) : (
                  'Sign-In'
                )}
              </button>

              <p className='link-account mt-3'>
                New User?
                <Link to='/register' className='link-create'>
                  Create an account
                </Link>
              </p>
              <p>
                <Link to='/forget' className='link-create'>
                  Forgot Password?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
