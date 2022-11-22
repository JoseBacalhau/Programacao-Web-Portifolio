import React from 'react';

// import social data
import { social } from '../../data';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='w-full text-green-500 text-base' href={href} target='_black' key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2022 José Vitor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
