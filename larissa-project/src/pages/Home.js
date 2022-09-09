import React from 'react';
import '../index.css';
import '../App.css';
import Header from '../components/Header';
import larissa from '../images/larissa.png';

class Home extends React.Component {
    render() {
      return (
        <div className='background w-screen'>
            <header>
            <Header />
            </header>
            <main>
              <div className='flex justify-around container w-screen'>
                <div>
              <h1 
              className='ola mt-10 text-7xl'
              >
                Olá, sou a Larissa
              </h1>

              <h3 
              className='paragrafo w-96 mt-8 text-justify text-xl mb-8 '
              >
              Nossas massagens são baseadas em várias técnicas e estilos de manipulação. Após receber uma massagem das nossas terapeutas, você terá seu corpo mais relaxado, leve e saudável.

              Confira nossas opções.  Se desejar você pode realizar a compra e pré-agendar tudo online. Aproveite!
              </h3>

                </div>
                
                <img src={larissa} alt="imagem de perfil" className='larissImg w-6/12 max-h-screen '/>

              </div>
            </main>

        </div>
  
  
      );
    }
  }

export default Home;