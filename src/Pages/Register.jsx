import { useState } from 'react';
import axios from 'axios';
import model from '../Assets/loginmodel.jpg';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faGhost,
  faLock,
  faPhone,
  faSignature,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone_no, setPhoneno] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async () => {
    setIsLoading(true);
    try {
      await axios
        .post('/register', {
          name,
          email,
          phone_no,
          password,
        })
        .then((res) => {
          console.log(res.data.message);
          if (res.data.status) {
            toast.success(res.data.message);
            window.localStorage.setItem('token', res.data.data);
            navigate('/login');
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      toast('Please enter the deatails');
    }
  };

  return (
    <div className='container mt-3 me-2'>
      <div className='row'>
        <div className='col-md-5 ms-5'>
          <div className='card-login text-center mt-5'>
            <img src={model} alt='model' className='img-fluid login-image' />
          </div>
        </div>
        <div className='col-md-5 py-3'>
          <div className='row'>
            <div className='col'>
              <h2 className='mb-3'>
                <FontAwesomeIcon icon={faUserPlus} />
                SIGN UP
              </h2>
              <div className='mb-2'>
                <label className='contact_form'>
                  <FontAwesomeIcon icon={faSignature} />
                  Name
                </label>
                <input
                  type='text'
                  placeholder='Enter the Name'
                  value={name}
                  className='form-control login-input mt-2'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mb-2'>
                <label className='contact_form'>
                  {' '}
                  <FontAwesomeIcon icon={faAt} />
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Enter the Email'
                  value={email}
                  className='form-control login-input mt-2'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-2'>
                <label className='contact_form mt-3'>
                  <FontAwesomeIcon icon={faPhone} />
                  Phone
                </label>
                <input
                  type='text'
                  placeholder='Enter the Number'
                  value={phone_no}
                  className='form-control login-input mt-2'
                  onChange={(e) => setPhoneno(e.target.value)}
                />
              </div>
              <div className='mb-2'>
                <label className='contact_form mt-3'>
                  <FontAwesomeIcon icon={faLock} />
                  Password
                </label>
                <input
                  type='password'
                  placeholder='Enter the Password'
                  value={password}
                  className='form-control login-input mt-2'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type='submit' className='btn mt-3' onClick={registerUser}>
                {isLoading ? (
                  <>
                    <span
                      className='spinner-border spinner-border-sm me-2'
                      role='status'
                      aria-hidden='false'
                    ></span>
                    Creating...
                  </>
                ) : (
                  'Create'
                )}
              </button>
              <p className='link-account mt-3'>
                <FontAwesomeIcon icon={faGhost} />
                Already have an account?
                <Link to='/login' className='link-create'>
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

export default Register;
