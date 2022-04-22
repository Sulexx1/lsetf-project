import React from 'react'
import styled from 'styled-components';
import Lsetf from '../images/lsetf.png';
import Usadf from '../images/usadf.png';
import './Heropage.css'


function Heropage() {


  return (
    <div className='holder'>
      <div className='cont'>
        <div className='left'>
          <img src={Lsetf}/>          
        </div>
        <div className='text'><h1>LSETF/USADF 2022 Youth Enpowerement Program</h1></div>
        <div className='right'>
        <img src={Usadf}/>
        </div>
      </div>
    </div>
  )
}

export default Heropage





