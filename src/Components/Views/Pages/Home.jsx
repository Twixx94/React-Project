import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'
// import { Meteo } from '../../Meteo/Meteo';

export const Home = () => {
  return (
    <div>
      <div className='content'>
        <div className='content-row'>
           <Link className="link content-box box-1" to="/prestataire">Prestataire</Link>
           <Link className="link content-box box-2" to="/">Inscription</Link>
         </div>
         <div className='content-row'>
          {/* <Meteo /> */}
          <Link className="link content-box box-4" to="/">Note</Link>
         </div>
      </div>
    </div>
  )
}
