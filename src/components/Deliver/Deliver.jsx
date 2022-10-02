import React from 'react';
import './Deliver.css';

import DeliverComponent from '../Deliver-component/Deliver-component'

const Deliver = () => {
  return (
    <div className="deliver">
      <div className="deliver-top">
        <span>Default text</span>
        <span>DEFAULT HEADING TEXT</span>
      </div>
      <div className="deliver-bottom">
        <DeliverComponent num={"01"}/>
        <DeliverComponent num={"02"}/>
        <DeliverComponent num={"03"}/>
      </div>
 
    </div>
  )
}

export default Deliver