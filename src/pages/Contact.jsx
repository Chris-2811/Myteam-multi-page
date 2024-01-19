import React from 'react';
import Form from '../components/contact/Form';
import iconPerson from '../assets/icon-person.svg';
import iconCog from '../assets/icon-cog.svg';
import iconChart from '../assets/icon-chart.svg';

function Contact() {
  return (
    <div className="relative">
      <div className="absolute h-[200px] w-[200px] hidden md:block lg:hidden xl:block md:-left-[6.25rem]  bg-pattern-about-2-contact-1"></div>
      <div className="absolute h-[200px] w-[200px] md:bottom-0 -bottom-[6.25rem] -right-[6.25rem] bg-pattern-contact-2"></div>
      <section className="myContainer-contact relative">
        <div className="lg:flex justify-between pb-[3.5rem] md:pb-[8.75rem] w-[100%]">
          <div className="text-center lg:text-left ">
            <h1 className="fs-650 lg:leading-[1.25]">Contact</h1>
            <div className="text-light-coral leading-none lg:leading-[1.5] text-[2rem] mt-4 md:mt-6 lg:mt-4 mb-10 md:mb-6 lg:mb-8">
              Ask us about
            </div>
            <div className="flex items-center text-white gap-6 text-left">
              <img src={iconPerson} alt="" className="w-[72px]" />
              <p className="font-bold text-lg">
                The quality of our talent network
              </p>
            </div>
            <div className="flex items-center text-white gap-6 mt-6 md:mt-2 text-left ">
              <img src={iconCog} alt="" className="w-[72px]" />
              <p className="font-bold text-lg">
                Usage & implementation of our software
              </p>
            </div>
            <div className="flex items-center text-white gap-6 mt-6 md:mt-2 mb-16 text-left">
              <img src={iconChart} alt="" className="w-[72px]" />
              <p className="font-bold text-lg">How we help drive innovation</p>
            </div>
          </div>
          <div className="lg:w-[42%] xl:w-[540px] ">
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
