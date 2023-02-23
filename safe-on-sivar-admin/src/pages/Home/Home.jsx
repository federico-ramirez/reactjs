import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import photo from '../../assets/img/img-banner.jpg'

function Home() {
  var moment = require('moment')

  let date = moment().format('ll')
  let time = moment().format('LT')

  let user = localStorage.getItem('email')

  return (
    <div>
      <Navbar />
      <main>
        <div className='row'>
          <div className='col col-sm-12'>
            <img src={photo} alt="Dashboard banner" className='banner' />
            <div className='col col-sm-12 m-auto text-center'>
              <h1 className='mt-5'>¡Bienvenido, {user}!</h1>
              <h3>{date}</h3>
              <h3>{time}</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home