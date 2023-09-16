import React, { useState } from 'react';
import axios from 'axios';
import model from '../Assets/loginmodel.jpg';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();

  const handlePassWord = async () => {
    try {
      await axios
        .post('/reset', {
          password,
          confirmpassword,
          token: window.localStorage.getItem('token'),
        })
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            toast.success(res.data.message);
            navigate('/');
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      toast.error('An error occurred: Please try again later.');
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
        <div className='col-md-5 mt-5 py-3'>
          <div className='row'>
            <div className='col'>
              <h2 className='mb-4'>Reset Password</h2>
              <div className='mb-3'>
                <label className='contact_form'>New Password</label>
                <input
                  type='password'
                  id='password'
                  placeholder='New Password'
                  value={password}
                  className='form-control login-input mt-3'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label className='contact_form mt-3'>Confirm Password</label>
                <input
                  type='password'
                  id='password'
                  placeholder='Confirm password'
                  value={confirmpassword}
                  className='form-control login-input mt-3'
                  onChange={(e) => setconfirmpassword(e.target.value)}
                />
              </div>
              <button
                type='submit'
                className='btn mt-3'
                onClick={(e) => handlePassWord(e)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
