import Banner from '../Assets/Banner.png';
import Banner2 from '../Assets/Banner 2.png';
import Banner3 from '../Assets/Banner3.png';
import { FaCircle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleUp,
  faBoltLightning,
  faCalendar,
  faCoins,
  faEject,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import { FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Livegoldrate = () => {
  const [rate, setRate] = useState(0);
  const [silver, setSilver] = useState(0);

  useEffect(() => {
    const generateRandomRate = () => {
      const randomRate = (Math.random() * 10000).toFixed(2);
      setRate(randomRate);
    };
    generateRandomRate();
    const intervalId = setInterval(generateRandomRate, 2 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const generateRandomRate = () => {
      const randomRate = (Math.random() * 10000).toFixed(2);
      setSilver(randomRate);
    };
    generateRandomRate();
    const intervalId = setInterval(generateRandomRate, 2 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        id='carouselExampleInterval'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner  col-md-12'>
          <div className='carousel-item active' data-bs-interval='10000'>
            <img src={Banner} className='image-class d-block w-100' alt='...' />
          </div>
          <div className='carousel-item' data-bs-interval='2000'>
            <img
              src={Banner2}
              className=' image-class d-block w-100'
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src={Banner3}
              className='image-class d-block w-100'
              alt='...'
            />
          </div>
        </div>
        <div className='container'>
          <h2 className='text-center'>
            <FontAwesomeIcon icon={faCoins} />
            Live Gold Prices
          </h2>
          <div className='row mb-2 mt-5'>
            <div className='col-md-6'>
              <div className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
                <div className='col p-4 d-flex flex-column position-static card-style'>
                  <strong className='d-inline-block mb-2'>INDIA</strong>
                  <h3 className='mb-0 text-color'>
                    <FaCircle className='fa-circle' />
                    Gold Rate Live
                  </h3>
                  <div className='mb-1 text-body-secondary'></div>
                  <h1 className='card-text mb-auto'>
                    In Grams
                    <h2 className='text text-center'>
                      <FontAwesomeIcon icon={faArrowAltCircleUp} />
                      {rate}
                    </h2>
                  </h1>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
                <div className='col p-4 d-flex flex-column position-static card-style'>
                  <strong className='d-inline-block mb-2'>INDIA</strong>
                  <h3 className='mb-0 text-color'>
                    <FaCircle className='fa-circle' />
                    Silver Rate Live
                  </h3>
                  <div className='mb-1 text-body-secondary'></div>
                  <h1 className='card-text mb-auto'>
                    In Grams
                    <h2 className='text text-center'>
                      <FontAwesomeIcon icon={faArrowAltCircleUp} />
                      {silver}
                    </h2>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='row g-5 mt-5'>
          <h1 className='text-center mt-4'>
            <FontAwesomeIcon icon={faNewspaper} />
            NEWS
          </h1>
          <div class='col-md-8'>
            <h3 class='pb-4 mb-4 px-2 fst-italic border-bottom'>
              <FontAwesomeIcon icon={faNewspaper} />
              Daily updates
            </h3>

            <article class='blog-post'>
              <h2 class='display-5 link-body-emphasis mb-1 px-2'>
                Gold drifts lower on sinking Chinese economy, caution ahead of
                inflation data
              </h2>
              <p className='blog-post-meta px-2'>
                <FontAwesomeIcon icon={faBoltLightning} />
                Gold Rises
              </p>

              <p className='px-2'>
                <b>Gold </b>is not only an investment avenue but is considered
                precious in India. The yellow metal symbolizes wealth,
                prosperity, good health, and wealth. Gold has been and will be
                the holy grail for the people of India in terms of jewelry and
                investment. India is considered one of the largest markets for
                gold, and thus, the Indian gold market plays a significant role
                in the global economy of gold.
              </p>
              <hr />

              <h2 className='blog-text px-2'>Gold Market in India</h2>
              <p className='px-2'>Daily Gold Market Report</p>
              <blockquote className='blockquote'>
                <p className='px-2'>Quoted text goes here.</p>
              </blockquote>
              <p className='px-2'>
                <b>(USAGOLD – 8/7/2023) –</b> Gold is trading cautiously to the
                downside as it begins a week that includes the all-important
                consumer and wholesale inflation reports. It is down $7 at
                $1939.
              </p>
              <br />
              <hr />
              <h3 className='px-2'>Gold Price In Five Years</h3>
              <p className='text-center'>Gold-Chart</p>
              <img
                src='https://www.usagold.com/wp-content/uploads/goldchart5YR8-2023-768x520.png'
                alt='chart'
                className='image-chart'
              />
              <hr />
              <h2 className='px-2 mt-5'>
                What Causes Price Fluctuations in Live Gold Prices?
              </h2>
              <p className='p-2'>
                Gold is recognized all over the world for its investment value
                as well as for its use in jewelry making. As a global market,
                gold prices can be affected by a host of factors. Some of the
                major potential drivers of live gold prices include:
                <ol className='mt-3'>
                  <li>Interest rates</li>
                  <br />
                  <li>Monetary policy Geopolitics</li>
                  <br />
                  <li>Risk aversion/appetite</li>
                  <br />
                  <li>Currency markets Inflation or deflation</li>
                  <br />
                  <li>Investment demand</li>
                  <br />
                  <li>Jewelry demand</li>
                  <br />
                  <li>Equity markets</li>
                  <br />
                </ol>
              </p>
            </article>
            <hr />
            <article class='blog-post'>
              <h2 class='display-5 link-body-emphasis mb-1 px-2'>
                Gold trades cautiously to the downside ahead of inflation
                reports
              </h2>
              <p class='blog-post-meta px-2'>
                <FontAwesomeIcon icon={faCalendar} />
                September 23, 2023
              </p>

              <img
                src='https://www.usagold.com/wp-content/uploads/golddemandq2-23-768x483.png'
                alt='logo'
                className='image-chart'
              />
              <hr />
              <h3 className='mt-3 px-2'>Gold Rates in Top cities</h3>
              <p className='px-2'>And don't forget to Calculate the Amounts</p>
              <table class='table table-dark table-borderless px-2'>
                <thead className='mt-3'>
                  <tr>
                    <th>City</th>
                    <th>Price</th>
                    <th>Live</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Chennai</td>
                    <td>62,602.10</td>
                    <td>+87.30(0.14%)</td>
                  </tr>
                  <tr>
                    <td>Banglore</td>
                    <td>62,602.10</td>
                    <td>+86.20(0.14%)</td>
                  </tr>
                  <tr>
                    <td>Delhi</td>
                    <td>64,840.10</td>
                    <td>+81.10(0.13%)</td>
                  </tr>
                </tbody>
              </table>
            </article>

            <hr />
            <article class='blog-post'>
              <h2 class='display-5 link-body-emphasis mb-1 mt-3 px-2'>
                Aura Jewells
              </h2>
              <p>
                We are provided with world's finest jewells and we are making
                the worlds fine cut jewells once you can decide and contact the
                team we will deliver within the 4 days,Happy customer
              </p>
            </article>
          </div>

          <div class='col-md-4'>
            <div class='position-sticky' style={{ top: '2rem' }}>
              <div class='p-4 mb-3 rounded section-card'>
                <h4 class='fst-italic'>
                  <FontAwesomeIcon icon={faEject} />
                  About
                </h4>
                <p class='mb-0 text-color'>
                  Customize this section once you login into this page and get
                  exciting offers and defaults daily updated news about gold and
                  other live stocks related
                </p>
              </div>

              <div>
                <h4 class='fst-italic'>Recent News</h4>
                <ul class='list-unstyled'>
                  <li>
                    <a
                      class='d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top'
                      href='....'
                    >
                      <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1280px-BBC_News_2022_%28Alt%29.svg.png'
                        alt='logo'
                        className='post-image'
                      />
                      <div class='col-lg-8'>
                        <h6 class='mb-0'>Gold Rate Increses in India</h6>
                        <small class='text-body-secondary'>
                          August 15, 2023
                        </small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class='d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top'
                      href='....'
                    >
                      <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnNAMpw_bdiBiDHU80-F9Cws_DVtvccV4cvQ&usqp=CAU'
                        alt='logo'
                        className='post-image'
                      />
                      <div class='col-lg-8'>
                        <h6 class='mb-0'>
                          Gold Price Update: Unchallenged US Dollar Set to Weigh
                          on Gold Upside
                        </h6>
                        <small class='text-body-secondary'>
                          September 14, 2023
                        </small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class='d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top'
                      href='....'
                    >
                      <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJu0ENY0jlQmaTXgyDKmLK0romo0e7xK2dJLzrizXvrJGBrBx-i1J_T7Fy4RkWB3YsTI&usqp=CAU'
                        alt='logo'
                        className='post-image'
                      />
                      <div class='col-lg-8'>
                        <h6 class='mb-0'>
                          US DOLLAR AND YIELDS REMAIN CENTRAL AHEAD OF US CPI
                          PRINT
                        </h6>
                        <small class='text-body-secondary'>
                          Augut 13, 2023
                        </small>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div class='p-4'>
                <h4 class='fst-italic'>Mediums</h4>
                <ol class='list-unstyled'>
                  <li>
                    <a href='...' className='active-links'>
                      <FaWhatsapp className='home_socilas-link' />
                      Whatsapp
                    </a>
                  </li>
                  <li>
                    <a href='...' className='active-links'>
                      <FaTwitter className='home_socilas-link' />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href='...' className='active-links'>
                      <FaFacebook className='home_socilas-link' />
                      Facebook
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Livegoldrate;
