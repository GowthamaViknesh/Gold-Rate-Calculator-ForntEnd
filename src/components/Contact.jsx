import {
  faContactBook,
  faHeadset,
  faHeart,
  faPaperPlane,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone_no, setPhoneno] = useState();

  const contactForm = async (e) => {
    e.preventDefault();
    try {
      axios
        .post('/contact', {
          name,
          email,
          phone_no,
        })
        .then((res) => {
          console.log(res.data.message);
          if (res.data.status) {
            toast.success(res.data.message);
            setEmail('');
            setName('');
            setPhoneno('');
            navigate('/login');
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      toast.error('Something Went Wrong');
    }
  };

  return (
    <section className='contact section' id='contact'>
      <div className='container'>
        <h1 className='section_title text-cs text-center'>
          Connect <FontAwesomeIcon icon={faHeart} /> With Us
        </h1>
        <h4 className='section_subtitle text-center'>
          We are always available <FontAwesomeIcon icon={faHeadset} />
          <span>to guide you at your convenience</span>
        </h4>
        <div className='row mt-5 custom-row'>
          <div className='col-md-6 mt-5'>
            <div className='contact_card'>
              <span className='contact_card-icon'>
                <FontAwesomeIcon icon={faContactBook} />
              </span>
              <h3 className='contact_card-title'>Address</h3>
              <p className='contact_card-text'>27/8, Vaisak Street, Chennai</p>
            </div>
            <div className='contact_card'>
              <span className='contact_card-icon'>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <h3 className='contact_card-title'>Phone_No</h3>
              <p className='contact_card-text'>+112455411545</p>
            </div>
            <div className='contact_card'>
              <span className='contact_card-icon'>
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
              <h3 className='contact_card-title'>Mail-Us</h3>
              <p className='contact_card-text'>Aura@gmail.com</p>
            </div>
            <div className='contact_card'>
              <span className='contact_card-icon'>
                <FontAwesomeIcon icon={faHeadset} />
              </span>
              <h3 className='contact_card-title'>Customer Care</h3>
              <p className='contact_card-text'>+1545156154</p>
            </div>
          </div>
          <div className='col-md-6' style={{ marginTop: '65px' }}>
            <h3 className='contact_card-title'>Contact Us</h3>
            <div className='contact_form-group'>
              <div className='form-group'>
                <label className='contact_form-tag text-cs'>
                  Your Name <b>*</b>
                </label>
                <input
                  type='text'
                  className='form-control  custom-input'
                  placeholder='Enter Your Name'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label className='contact_form-tag text-cs'>
                  Your EmailID <b>*</b>
                </label>
                <input
                  type='email'
                  className='form-control  custom-input'
                  placeholder='Enter Your Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label className='contact_form-tag text-cs'>
                  Your PhoneNo <b>*</b>
                </label>
                <input
                  type='text'
                  className='form-control  custom-input'
                  placeholder='Enter Your Phone No'
                  onChange={(e) => setPhoneno(e.target.value)}
                />
              </div>
              <button
                type='submit'
                className='btn custom-btn'
                onClick={contactForm}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
