import React from 'react'
import '../contact.scss'

function Contact() {
  return (

    <div className='contact'>
      <div className='boxTitle'>
        <h3>CONTACT</h3>
      </div>

      <div className='cardBox'>
        <CardItem />
        <div className='cardText3'>
          <h4>Links</h4>
          
          <div className="links">        
            <a href="https://github.com/duajd3-lab?tab=repositories" target="_blank" rel="noreferrer">
              GitHub 
            </a>
          </div>
          <p className="contact-msg">언제든지 편하게 연락 주세요 :)</p>
        </div>

      </div>
      

    </div>

  )
}

export default Contact


function CardItem() {
  return (
    <div className='card-wrap'>
      <div className='card2 back'></div>

      <div className='card2 front'>
        <div className='cardText2'>
          <p className="small">FRONTEND DEVELOPER</p>
          <h3>김 나 영</h3>

          <a href="mailto:example@gmail.com" className="email">
            📧 duajd3@gmail.com
          </a>


        </div>

      </div>
    </div>
  );
}