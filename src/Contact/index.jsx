import React from 'react'
import Ava from '../Img/icons/3people.jpg'

import './style.scss';

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <img src={Ava} alt="avatar" className="avatar" />
      <div className="name">Potru-morkovky</div>
    </div>
  )
}

export default Contact