import React from 'react';

// import hobbies data
import { hobbies } from '../../data';

const Hobbies = () => {
  return (
    <section id='hobbies' className='section bg-secondary'>
      <div className='container mx-auto pt-20'>
        <div className='flex flex-col items-center text-center'>
        <h2 className='text-4xl leading-[44px] text-red-500 md:text-6xl'>
            Meus Hobbies
          </h2>
          <p className='subtitle'>
          </p>
        </div>
        <div className='grid lg:grid-cols-3 gap-8'>
          {hobbies.map((hobby, index) => {
            const { name, description } = hobby;
            return (
              <div className='bg-tertiary p-5  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer' key={index}>
                <h4 className='text-xl font-medium mb-2'>{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
