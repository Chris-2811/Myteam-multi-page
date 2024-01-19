import React from 'react';
import avatar from '../../assets/avatar-kady.jpg';
import avatar2 from '../../assets/avatar-aiysha.jpg';
import avatar3 from '../../assets/avatar-arthur.jpg';
import quotes from '../../assets/icon-quotes.svg';

const testimonials = [
  {
    id: 1,
    text: ` “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”`,
    name: 'Kady Baker',
    title: 'Product Manager at Boomark',
    avatar: avatar,
  },
  {
    id: 2,
    text: `“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”`,
    name: 'Aiysha Reese',
    title: 'Founder of Manage',
    avatar: avatar2,
  },
  {
    id: 3,
    text: `“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”`,
    name: 'Kady Baker',
    title: 'Product Manager at Boomark',
    avatar: avatar3,
  },
];

function Testimonials() {
  return (
    <div className="relative ">
      <div className="absolute -z-10 bg-testimonials-pattern-2 bottom-0 right-0 overflow-hidden w-[200px] h-[100px]"></div>
      <div className="absolute -z-10 bg-testimonials-pattern top-0 left-0 overflow-hidden w-[147px] h-[100px]"></div>

      <div className="myContainer pt-[8.75rem] pb-[10.25rem] md:py-[6.25rem] lg:py-[8.75rem] text-center">
        <h2 className="max-w-[470px] mx-auto fs-600 lg:max-w-[932px]">
          Delivering real results for top companies. Some of our{' '}
          <span className="text-rapture-blue">success stories.</span>
        </h2>

        <div className="max-w-[573px]  mx-auto grid lg:grid-cols-3  mt-[5.25rem] lg:max-w-none gap-[5.25rem] lg:gap-[1.875rem]">
          {testimonials.map((testi) => {
            return (
              <div
                className="grid grid-rows-custom relative items-start justify-center"
                key={testi.id}
              >
                <div className="absolute -top-9 left-[50%] -translate-x-[50%] -z-10">
                  <img src={quotes} alt="quotes" />
                </div>
                <p className="text-body  text-[0.9375rem]  md:max-w-[573px] md:mx-auto">
                  {testi.text}
                </p>
                <div className="py-4">
                  <h3 className="text-rapture-blue">{testi.name}</h3>
                  <p className="text-body text-[0.8125rem] italic">
                    {testi.title}
                  </p>
                </div>
                <div className="rounded-full w-[3.875rem] mx-auto border-2 border-[#C4FFFE]">
                  <img
                    src={testi.avatar}
                    alt="avatar"
                    className="rounded-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
