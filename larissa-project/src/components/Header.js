import React from "react";

import { Link } from 'react-router-dom';
import logo from '../images/LarissaSpa.png';



function Header() {
  

    return(
        <header  className='w-screen'>
          
          
            <div className='container w-screen'>

          <nav className='flex justify-around w-screen navegacao'>
            
          <Link
              className='color mt-8 text-2xl'
              to="/"
            >
              {' '}
              Home
              {' '}

            </Link>
            <Link
              className='color mt-8 text-2xl'
              to="/relaxante"
            >
              {' '}
              Relaxante
              {' '}

            </Link>
            <Link
              className='color mt-8 text-2xl'
              to="/relaxante"
              
            >
              {' '}
              Drenagens
              {' '}

            </Link>
            <Link
              className='color mt-8 text-2xl'
              to="/relaxante"
             
            >
              {' '}
              Shiatsu
              {' '}

            </Link>
            
          <img src={logo} alt="imagem de perfil" className='imagem w-24 '/>

          </nav>

          <div className="linha">

          </div>

          
        
            </div>
        
      
      
        </header>
    )
}


export default Header;