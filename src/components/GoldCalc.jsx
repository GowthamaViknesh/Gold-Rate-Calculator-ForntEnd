import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import TableCard from './TableCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faRing } from '@fortawesome/free-solid-svg-icons';

const GoldCalc = () => {
  const [goldrate, setGoldrate] = useState(0);
  const [weight, setWeight] = useState(0);
  const [wastage, setWastage] = useState(0);
  const [gstgold, setGstGold] = useState(0);
  const [total, setTotal] = useState(0);
  const [wastageinGrams, setwastageinGrams] = useState();

  const [savedValues, setSavedValues] = useState([]);

  const getGoldAmount = () => {
    const goldAmount = goldrate * weight;
    const wastageAmount = (wastage / 100) * goldAmount;
    const gstAmount = 0.03 * (goldAmount + wastageAmount);
    const totalAmount = goldAmount + wastageAmount + gstAmount;
    const wastageinGrams = (wastage / 100) * goldrate;
    setGstGold(gstAmount);
    setTotal(totalAmount);
    setwastageinGrams(wastageinGrams);
  };

  const getSavedData = async () => {
    try {
      await axios.get('/getData').then((res) => {
        if (res.data.status) {
          console.log(res.data.data);
          setSavedValues(res.data.data);
          toast.success(res.data.message);
        } else {
          toast.error('No data to show');
        }
      });
    } catch (error) {
      console.log('Something Went Wrong!!', error);
    }
  };

  useEffect(() => {
    getSavedData();
  }, []);

  const handleSave = () => {
    try {
      axios
        .post('/calcSave', {
          goldrate,
          gstgold,
          total,
        })
        .then((res) => {
          if (res.data.status) {
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  const deleteData = async (totalToDelete) => {
    try {
      await axios
        .delete('/delete', {
          data: { total: totalToDelete }, // Pass totalToDelete as an object in the data field
        })
        .then((res) => {
          if (res.data.status) {
            toast.success(res.data.message);
            // Refresh the saved data after deletion
            getSavedData();
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      console.log('Something went wrong:', error);
    }
  };

  return (
    <>
      <h2 className='title text-center mt-4'>
        <FontAwesomeIcon icon={faCoins} />
        Gold Rate Calculator
      </h2>
      <h4 className='title text-center'>
        Every Gram
        <FontAwesomeIcon icon={faRing} /> Matters
      </h4>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card calculator-card'>
              <label className='input-label'>Gold Rate in &#x20b9;</label>
              <br />
              <input
                type='number'
                className='input-gold'
                placeholder='Enter the Gold Rate'
                onChange={(e) => setGoldrate(e.target.value)}
              />
              <br />
              <label className='input-label'>Gold Weight in Grams</label>
              <br />
              <input
                type='number'
                className='input-gold'
                placeholder='Enter the Weight'
                onChange={(e) => setWeight(e.target.value)}
              />
              <br />
              <label className='input-label'>Wastage in %</label>
              <br />
              <input
                type='number'
                className='input-gold'
                placeholder='Enter the Wastage'
                style={{ overflow: 'hidden' }}
                onChange={(e) => setWastage(e.target.value)}
              />

              <div className='but-gold'>
                <button
                  className='btn btn-gold'
                  type='submit'
                  onClick={getGoldAmount}
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-4'>
            <div className='py-1'>
              <table className='table table-dark table-borderless'>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Actual Gold Rate</td>
                    <td>&#x20b9;{goldrate}</td>
                  </tr>
                  <tr>
                    <td>Wastage in amount</td>
                    <td>&#x20b9;{wastage}</td>
                  </tr>
                  <tr>
                    <td>GST (3%)</td>
                    <td>&#x20b9;{gstgold}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>&#x20b9;{total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <b>*</b> Wastage in grams:{wastageinGrams}
            </p>
            <div>
              <button className='btn btn-gold' onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
        <TableCard savedValues={savedValues} deleteData={deleteData} />
      </div>
    </>
  );
};

export default GoldCalc;
