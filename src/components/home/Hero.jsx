import React from 'react';

function hero() {
  return (
    <div className="myContainer  relative">
      <div className="absolute -left-[265px] top-0 hidden xl:block bg-hero-pattern-1 w-[200px] h-[200px]"></div>
      <div className="text-center relative pb-[12.3125rem] md:pb-[16rem] lg:pb-[15.625rem] h-full  lg:text-left lg:flex lg:gap-12 lg:items-start lg:justify-between">
        <div className="absolute  bg-hero-pattern-2 bg-no-repeat h-[100px] w-[358px] bottom-0 left-[50%] -translate-x-[50%] lg:left-auto right-0 lg:-translate-x-0"></div>
        <h1 className="mb-4 md:mb-6 lg:mb-0 fs-700 lg:max-w-[535px]">
          Find the best <span className="text-light-coral ">talent</span>
        </h1>
        <div>
          <div className="hidden lg:block  design-line bg-rapture-blue"></div>
          <p
            className="text-body fs-400 lg:w-[445px] lg:mt-20 md:max-w-[437px] md:mx-auto 
          "
          >
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
    </div>
  );
}

export default hero;
