import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import TableCard from './TableCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faRing } from '@fortawesome/free-solid-svg-icons';
import countries from '../data/gold.json';

const GoldCalc = () => {
  const [goldrate, setGoldrate] = useState(0);
  const [weight, setWeight] = useState(0);
  const [wastage, setWastage] = useState(0);
  const [gstgold, setGstGold] = useState(0);
  const [total, setTotal] = useState('');
  const [wastageinGrams, setwastageinGrams] = useState();

  const [selectedCountry, setSelectedCountry] = useState('');
  const [goldRateForSelectedCountry, setGoldRateForSelectedCountry] =
    useState('');
  const [currencyForSelectedCountry, setCurrencyForSelectedCountry] =
    useState('');

  const [savedValues, setSavedValues] = useState([]);

  const getGoldAmount = () => {
    const goldAmount = goldrate * weight;
    const wastageAmount = (wastage / 100) * goldAmount;
    const gstAmount = 0.03 * (goldAmount + wastageAmount);
    const totalAmount = Math.round(goldAmount + wastageAmount + gstAmount);
    const wastageinGrams = Math.round((wastage / 100) * goldrate);
    setGstGold(gstAmount);
    setTotal(totalAmount);
    setwastageinGrams(wastageinGrams);
  };

  const getSavedData = async () => {
    try {
      await axios
        .post('/getData', { token: window.localStorage.getItem('token') })
        .then((res) => {
          if (res.data.status) {
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
          token: window.localStorage.getItem('token'),
        })
        .then((res) => {
          if (res.data.status) {
            toast.success(res.data.message);
            getSavedData();
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleCountryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);
    if (selectedValue) {
      const selectedCountryData = countries.countries.find(
        (country) => country.name === selectedValue
      );
      if (selectedCountryData) {
        setGoldRateForSelectedCountry(selectedCountryData.gold_rate_per_gram);
        setCurrencyForSelectedCountry(selectedCountryData.currency);
      }
    } else {
      setGoldRateForSelectedCountry('');
      setCurrencyForSelectedCountry('');
    }
  };

  return (
    <>
      <h2 className='title text-center mt-5'>
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
              <label className='input-label mt-3'>Select a Country:</label>
              <select className='input-gold' onChange={handleCountryChange}>
                <option value=''>Select a country</option>
                {countries.countries.map((country, index) => (
                  <option key={index} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <label className='input-label mt-4'>
                Gold Rate in {currencyForSelectedCountry}:
              </label>
              <input
                className='input-gold '
                id='inputdefault'
                type='text'
                placeholder='Rated as per the country'
                value={goldRateForSelectedCountry}
                readOnly
              />
              <label className='input-label mt-4'>Gold Rate in &#x20b9;</label>
              <input
                type='number'
                className='input-gold'
                placeholder='Enter the Gold Rate'
                onChange={(e) => setGoldrate(e.target.value)}
              />
              <label className='input-label mt-4'>Gold Weight in Grams</label>
              <input
                type='number'
                className='input-gold'
                placeholder='Enter the Weight'
                onChange={(e) => setWeight(e.target.value)}
              />
              <label className='input-label mt-4'>Wastage in %</label>
              <input
                type='number'
                className='input-gold'
                placeholder='Enter the Wastage'
                style={{ overflow: 'hidden' }}
                onChange={(e) => setWastage(e.target.value)}
              />
              <div className='but-gold mb-1'>
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
          <div className='col-md-6 table-card'>
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
        <TableCard savedValues={savedValues} />
      </div>
    </>
  );
};

export default GoldCalc;
