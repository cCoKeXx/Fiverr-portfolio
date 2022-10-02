import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';

// importing icons from react-icons
import {TbArrowBigDownLines} from 'react-icons/tb';

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="content">
            <h1>Stefan <br className='content-break'></br><span>Petković</span></h1>
            <p>Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.
              <br/> <span> -Steve Jobs</span> 
            </p>
            <button className='button h-button'>View more</button>
            <TbArrowBigDownLines className='h-arrow'/>
        </div>
    </div>
  )
}

export default Home