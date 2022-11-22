import React from 'react';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24 pt-20'>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-4xl leading-[44px] text-red-500 md:text-6xl'>
                Sobre Mim
              </h2>
              <p className='mb-4 text-green-500 md:text-6xl'>
                Back-End Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>

                Oi! Eu meu nome é José Vitor Mendes Bacalhau. Eu tenho 21 anos e há um ano e meio estou atuando na área de Tecnologia.
                Todo dia que se passa, eu acabo aprendendo novas formas de melhorar meus códigos. Por agora eu estou mais focado no back-end.
                <br/><br/>
                Eu faço Sistemas para Internet e estou no 3° período da minha graduação na Universidade 
                Católica de Pernambuco, por meio da bolsa de estudos do programa Embarque Digital.
                <br/><br/>
                Este portifólio é um projeto para compor a nota final da diciplina Programação Front-End.
              </p>
            </div>
            <a href='/contact'>
              <button className='btn btn-md md:btn-lg transition ease-in-out delay-150 bg-red-900 hover:-translate-y-1 hover:scale-110 hover:bg-green-800 duration-300'>
                Entre em contato
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
