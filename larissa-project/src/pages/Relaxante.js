import React from 'react';
import '../index.css';
import '../App.css';
import Header from '../components/Header';
import massagem from '../images/massagem.png';



class Relaxante extends React.Component {
    render() {
      return (
        <div className= 'background w-screen'>
            <header>
            <Header />
            </header>
            <main className='w-screen'>
              <div className='flex justify-around container w-screen'>
                <div>
              <h1 
              className='ola mt-10 text-7xl'
              >
                Massagem relaxante
              </h1>

              <h3 
              className='paragrafo w-96 mt-8 text-justify text-xl '
              >
             Uma combinação perfeita de aromas aliada a manobras terapêuticas, lhe proporcionam relaxamento e estímulo na circulação dos fluídos. Perfeita para quem quer relaxar e equilibrar corpo e mente, é realizada com um delicioso e personalizado blend de aromas.
              </h3>

                </div>
                
                <img src={massagem} alt="imagem de perfil" className='relaxante mt-9 w-4/12 max-h-screen '/>

              </div>
            </main>

        </div>
  
  
      );
    }
  }

export default Relaxante;