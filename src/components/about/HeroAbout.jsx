import React from 'react';

function HeroAbout() {
  return (
    <section className="px-6 bg-midnight-green z-10 relative md:px-10 xl:px-0 text-center lg:text-left pb-[6.75rem] md:pb-[7rem] lg:pb-[8.125rem] mx-auto max-w-[1110px]">
      <div className="absolute bg-mobile-nav w-[200px] h-[200px] -bottom-[100px] -right-[100px]"></div>
      <div className="lg:flex justify-between ">
        <h2 className="mb-4 md:mb-6 fs-650 lg:w-[340px]">About</h2>
        <div className="lg:w-[70%]">
          <div className="design-line hidden  lg:block bg-light-coral mb-10 "></div>
          <p className="text-body max-w-[457px] fs-400 lg:max-w-[730px] lg:mx-0  mx-auto ">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroAbout;
