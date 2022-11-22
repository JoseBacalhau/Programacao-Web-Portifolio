import React from 'react';

// import contact data
import { contact } from '../../data';


const Contact = () => {
  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto pt-20'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-4xl leading-[44px] text-red-500 md:text-6xl'>
            Entre em Contato
          </h2>
          <p className='subtitle'>
            
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <form
            className='space-y-8 w-full -w-[780px]'
          >
            <div className='flex gap-8'>
              <input className='input' type='text' placeholder='Seu nome' />
              <input className='input' type='email' placeholder='Seu email' />
            </div>
            <input className='input' type='text' placeholder='Assunto' />
            <textarea
              className='textarea'
              placeholder='Sua Mensagem'
            ></textarea>
            <button className='btn btn-md md:btn-lg transition ease-in-out delay-150 bg-red-900 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300'>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
