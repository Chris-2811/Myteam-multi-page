import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section className="bg-light-coral relative   py-[5.1875rem] text-center">
      <div className="absolute bg-cta-pattern -bottom-[122px] -left- w-[200px] h-[244px]"></div>
      <div className="myContainer-lg myContainer-CTA">
        <div className="md:flex items-center justify-between">
          <h2 className="mb-6 fs-600 text-sacramento-state-green md:mb-0">
            Ready to get started ?
          </h2>

          <Link
            to={'/contact'}
            className="btn border block mx-auto md:mx-0 font-semibold w-[153px] text-sacramento-state-green border-sacramento-state-green hover:bg-sacramento-state-green hover:text-white hover:border-sacramento-state-green"
          >
            contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
