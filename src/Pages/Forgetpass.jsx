import axios from 'axios';
import model from '../Assets/loginmodel.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightToBracket,
  faAt,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

const Forgetpass = () => {
  const [email, setEmail] = useState();
  const Navigate = useNavigate();

  const forgotPassword = () => {
    try {
      axios.post('/forgot', { email }).then((res) => {
        console.log(res);
        if (res.data.status) {
          toast.success(res.data.message);
          window.localStorage.setItem('token', res.data.data);
          Navigate('/otp');
        } else {
          toast.error(res.data.message);
        }
      });
    } catch (error) {
      toast.error('Please try again sometime');
    }
  };

  return (
    <div className='container mt-5 me-2'>
      <div className='row'>
        <div className='col-md-5 ms-5'>
          <div className='card-login text-center'>
            <img src={model} alt='model' className='img-fluid login-image' />
          </div>
        </div>
        <div className='col-md-5 py-3 main-div'>
          <div className='row'>
            <div className='col'>
              <h2 className='mb-4'>
                <FontAwesomeIcon icon={faGear} />
                Reset Your Password
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
              <button
                type='submit'
                className='btn mt-3'
                onClick={(e) => forgotPassword(e)}
              >
                Submit
              </button>
              <p className='mt-3'>
                <Link to='/login' className='link-create'>
                  <FontAwesomeIcon icon={faArrowRightToBracket} />
                  Log-In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgetpass;
