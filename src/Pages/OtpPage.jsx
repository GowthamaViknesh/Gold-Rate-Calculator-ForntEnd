import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

const OtpPage = () => {
  const Navigate = useNavigate();
  const [UserOTP, setOTP] = useState('');
  const handleVerify = () => {
    axios
      .post('/verify', { UserOTP })
      .then((res) => {
        if (res.data.status) {
          toast.success(res.data.message);
          Navigate('/reset');
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='demo container-fluid'>
      <h4 className='h4 text-center fs-1 pt-5'>
        <FontAwesomeIcon icon={faKey} />
        Please Enter Your OTP
      </h4>
      <div className='row text-center'>
        <div className='col pt-5'>
          <input
            type='text'
            className='value otp-email text-center '
            placeholder='_'
            maxLength='1'
            onChange={(e) => setOTP(UserOTP + e.target.value)}
          />
          <input
            type='text'
            className=' value otp-email text-center '
            placeholder='_'
            maxLength='1'
            onChange={(e) => setOTP(UserOTP + e.target.value)}
          />
          <input
            type='text'
            className=' value otp-email text-center'
            placeholder='_'
            maxLength='1'
            onChange={(e) => setOTP(UserOTP + e.target.value)}
          />
          <input
            type='text'
            className=' value otp-email text-center'
            placeholder='_'
            maxLength='1'
            onChange={(e) => setOTP(UserOTP + e.target.value)}
          />
        </div>
      </div>
      <div className='row text-center'>
        <div className='col'>
          <button
            className='w-25 mt-5 h-50 fs-5 rounded-3 btn'
            onClick={handleVerify}
          >
            Verify
          </button>
        </div>
      </div>
      <div className='row text-center'>
        <div className='col'>
          <Link to='/login '>
            <button className=' mt-5 h-50 fs-5 rounded-3 px-3 login-form'>
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className='mt-4'>
        <h4 className='text-center fs-2  pt-5'>New to Aura.com?</h4>
        <Link to='/register' className='text-decoration-none'>
          <button className='d-block mx-auto mt-4 px-5 py-2 rounded-3 fs-5 create login-form'>
            Create a Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OtpPage;
