import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const TableCard = ({ savedValues }) => {
  const [total, settoatal] = useState();
  const Navigate = useNavigate();

  const deleteData = async (total) => {
    try {
      await axios
        .post('/delete', {
          token: window.localStorage.getItem('token'),
          total,
        })
        .then((res) => {
          console.log(res.data.status);
          if (res.data.status) {
            toast.success(res.data.message);
            Navigate('/');
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      console.log('Something went wrong:', error);
    }
  };

  if (!Array.isArray(savedValues?.data) || savedValues.data.length === 0) {
    return (
      <p className='title-text text-center mt-5'>
        <FontAwesomeIcon icon={faBolt} />
        No saved values to display
      </p>
    );
  }

  return (
    <div className='container'>
      <h2 className='title text-center'>
        <FontAwesomeIcon icon={faCircleCheck} />
        Save For the Future
      </h2>
      <div className='row mx-3 mt-5'>
        {savedValues.data.map((values, index) => (
          <div className='col-md-3 mx-md-3' key={index}>
            <div className='card card-list'>
              <div className='card-body'>
                <h5 className='card-title'>Gold Rates</h5>
                <h6 className='card-sub mb-2'>Saved Rates</h6>
                <p className='card-text'>Gold Rate : {values.goldrate}</p>
                <p className='card-text'>GST : {values.gstgold}</p>
                <p className='card-text'>Total: {values.total}</p>
                {() => settoatal(values.total)}
                <button
                  className='btn btn-list'
                  onClick={() => deleteData(values.total)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableCard;
