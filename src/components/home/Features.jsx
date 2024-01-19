import React from 'react';
import iconPerson from '../../assets/icon-person.svg';
import iconChart from '../../assets/icon-chart.svg';
import iconCog from '../../assets/icon-cog.svg';

function Features() {
  return (
    <div className="bg-sacramento-state-green relative">
      <div className="absolute w-[200px] h-[200px] top-0 -right-[100px] bg-features-pattern-1"></div>
      <div className="myContainer-lg text-center md:text-left  py-[4rem] md:py-[6.25rem] lg:py-[8.75rem]">
        <div className="lg:flex gap-[7.8125rem]">
          <div>
            <div className="design-line bg-light-coral mb-8"></div>
            <h2 className="lg:mt-[3.5625rem] fs-600 md:mt-8 md:mb-[4rem] lg:mb-0 max-w-[240px] md:max-w-[445px] text-left">
              Build & manage distributed teams like no one else.
            </h2>
          </div>
          <div>
            <div className="md:flex items-center md:gap-6 mt-14  md:mt-0">
              <img
                src={iconPerson}
                alt=""
                className="mx-auto md:mx-0 min-w-[4.5rem]"
              />
              <div>
                <h3 className="text-light-coral mt-4 mb-2 md:mt-0 md:mb-4">
                  Experienced Individuals
                </h3>
                <p className="text-body text-[0.9375rem] mx-auto max-w-[478px]">
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </div>
            </div>
            <div className="md:flex items-center gap-6 mt-12 md:mt-[4rem]">
              <img
                src={iconCog}
                alt=""
                className="mx-auto md:mx-0 min-w-[4.5rem]"
              />
              <div>
                <h3 className="text-light-coral mt-4 mb-2 md:mt-0 md:mb-4">
                  Easy to implement
                </h3>
                <p className="text-body text-[0.9375rem] md:max-w-[478px] mx-auto max-w-[478px]">
                  Our processes have been refined over years of implementation
                  meaning our teams always deliver.
                </p>
              </div>
            </div>
            <div className="md:flex items-center gap-6 mt-12 md:mt-[4rem]">
              <img
                src={iconChart}
                alt=""
                className="mx-auto md:mx-0 w-[4.5rem]"
              />
              <div>
                <h3 className="text-light-coral mt-4 mb-2 md:mt-0 md:mb-4 ">
                  Enhanced Productivity
                </h3>
                <p className="text-body text-[0.9375rem] mx-auto max-w-[478px]">
                  Our customized platform with in-built analytics helps you
                  manage your distributed teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
