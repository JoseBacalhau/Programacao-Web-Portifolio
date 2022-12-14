import React from 'react';

import MeImg from '../../assets/img/Minhafoto.png';

const Hero = () => {

  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-White text-md mb-[22px]'>
              Olá, Meu nome é José Vitor! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-6xl'>
              Back-End Developer
            </h1>
            
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
          <img src={MeImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
