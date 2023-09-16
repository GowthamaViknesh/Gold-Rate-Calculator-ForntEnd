import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from '../Assets/favicon.png';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

const Dashboard = () => {
  const [user, setUser] = useState();
  const [name, setName] = useState();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    window.localStorage.clear('token');
    setIsLoading(false);
    navigate('/');
    window.location.reload(false);
  };

  useEffect(() => {
    axios
      .post('/profile', { token: window.localStorage.getItem('token') })
      .then(({ data }) => {
        console.log(data);
        setUser(data.email);
        setName(data.name);
      })
      .catch((error) => {
        console.log('Try after sometime', error);
      });
  });

  return (
    <div>
      {isLoading ? (
        <div className='text-center mt-3'>
          <div className='loader-container'>
            <PacmanLoader color='#fff' size={10} />
          </div>
        </div>
      ) : (
        <div>
          <div className='container mt-3'>
            <div className='row text-center text-white'>
              <div className='col-lg-8 mx-auto'>
                <h1 className='display-4'>Welcome! {name}</h1>
                <p className='lead mb-0'>
                  Thank you for registering on our website!
                </p>
                <p className='lead'>
                  <a
                    href='https://bootstrapious.com/snippets'
                    className='text-white'
                  >
                    <u></u>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='container mt-2 '>
            <div className='row text-center d-flex justify-content-center'>
              <div className='col-xl-3 col-sm-6 mb-5'>
                <div className='rounded shadow-sm py-5 px-4 custom-card'>
                  <img
                    src={logo}
                    alt=''
                    width='100'
                    className='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
                  />
                  <h3 className='mb-0 text text-uppercase'>{name}</h3>
                  <span className='small text'>{user}</span>
                  <ul className='social mb-0 list-inline mt-3'>
                    <li className='list-inline-item'>
                      <a href='...' className='social-link'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='...' className='social-link'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='...' className='social-link'>
                        <FaWhatsapp />
                      </a>
                    </li>
                    <br />
                    <li className='list-inline-item'></li>
                  </ul>
                  <div className='container mt-1'>
                    <button type='submit' onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
