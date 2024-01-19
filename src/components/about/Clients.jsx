import React from 'react';
import client from '../../assets/logo-the-verge.png';
import client2 from '../../assets/logo-jakarta-post.png';
import client3 from '../../assets/logo-the-guardian.png';
import client4 from '../../assets/logo-tech-radar.png';
import client5 from '../../assets/logo-gadgets-now.png';

function Clients() {
  return (
    <section className="py-[5.5rem] bg-dark-green relative md:py-[6.25rem] lg:py-[8.75rem] text-center">
      <div className="absolute w-[200px] h-[200px]  bg-cover bg-about-4 -top-[100px]  -left-[100px] md:left-0 lg:top-0"></div>
      <div className="myContainer">
        <h2 className="mb-16 fs-600">Some of our clients</h2>
        <ul
          role="list"
          className="flex flex-col items-center justify-between gap-16 md:flex-row"
        >
          <li className="w-[150px]">
            <img src={client} alt="" />
          </li>
          <li className="w-[165px]">
            <img src={client2} alt="" />
          </li>
          <li className="w-[165px]">
            <img src={client3} alt="" />
          </li>
          <li className="w-[165px]">
            <img src={client4} alt="" />
          </li>
          <li className="w-[150px]">
            <img src={client5} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Clients;
