import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import Vmc from './inc/Vmc';
import Card3 from '../images/Card3.jpg';
import Card1 from '../images/Card1.jpg';
import Card2 from '../images/Card2.jpg';
const Home = () => {
  return (

    <div>
      <Slider></Slider>
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='section-title'>Our Company</h3>
              <div className='underline mx-auto'></div>
              <p>
              Bootstrap is a free and  buttons, navigation, and other interface components.open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
              JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
              </p>
              <Link to="/" className="btn btn-warning shadow">READ MORE</Link>
            </div>
          </div>
        </div>
      </section>
{/*Our Vision Mission Value*/}
     <Vmc></Vmc>

{/*Our Service*/}
<section className='section bg-c-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='section-title'>Our Services </h3>
              <div className='underline mx-auto'></div>
            </div>
            <div className='col-md-4 text-center'>
                <div className='card shadow'>
                  <img src={Card3} className="w-100 border-bottom"/>
                  <div className='card-body'>
                    <h6>Service 1</h6>
                    <div className='underline'></div>
                    <p>Bootstrap is a free and buttons, navigation, and other interface components.open-source CSS framework directed at responsive,</p>
                    <a className='btn btn-secondary'>Read More</a>
                  </div>
                </div>
            </div>
            <div className='col-md-4 text-center'>
                <div className='card shadow'>
                  <img src={Card1} className="w-100 border-bottom"/>
                  <div className='card-body'>
                    <h6>Service 1</h6>
                    <div className='underline'></div>
                    <p>Bootstrap is a free and buttons, navigation, and other interface components.open-source CSS framework directed at responsive,</p>
                    <a className='btn btn-secondary'>Read More</a>
                  </div>
                </div>
            </div>
            <div className='col-md-4 text-center'>
                <div className='card shadow'>
                  <img src={Card2} className="w-100 border-bottom"/>
                  <div className='card-body'>
                    <h6>Service 1</h6>
                    <div className='underline'></div>
                    <p>Bootstrap is a free and buttons, navigation, and other interface components.open-source CSS framework directed at responsive,</p>
                  <a className='btn btn-secondary'>Read More</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home