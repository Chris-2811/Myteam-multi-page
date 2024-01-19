import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import hamburgerMenu from '../assets/icon-hamburger.svg';
import close from '../assets/icon-close.svg';

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  const modalRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsToggled(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="myContainer  flex items-center justify-between pt-12 md:pt-[4.5rem] md:gap-12 lg:pt-[4.625rem]">
      <img src={logo} alt="logo" />
      <div className="hidden md:flex md:items-center md:justify-between md:grow  lg:gap-20 ">
        <nav aria-label="primary-nav">
          <ul role="list" className="flex items-center text-white gap-10">
            <li className="text-white hover:text-light-coral">
              <NavLink to={'/'}>home</NavLink>
            </li>
            <li className="text-white hover:text-light-coral">
              <NavLink to={'/about'}>about</NavLink>
            </li>
          </ul>
        </nav>
        <Link to={'/contact'}>
          <button className="btn border border-white text-white hover:bg-white hover:text-sacramento-state-green">
            contact us
          </button>
        </Link>
      </div>

      <div
        ref={menuRef}
        onClick={() => setIsToggled(!isToggled)}
        className="md:hidden cursor-pointer  z-30"
      >
        {!isToggled ? (
          <img src={hamburgerMenu} alt="mobile-menu" className="md:hidden" />
        ) : (
          <img src={close} alt="mobile-menu" className="md:hidden" />
        )}
      </div>

      {isToggled && <div className="fixed inset-0 bg-black/50 z-20"></div>}
      <div
        ref={modalRef}
        className={`fixed md:hidden right-0 top-0 w-[62%] h-full z-20  pt-[7.5rem] pl-[3rem] bg-midnight-green   transform transition-transform duration-300 ease-in ${
          isToggled ? 'translate-x-0' : 'translate-x-[100%]'
        }`}
      >
        <div className="absolute w-[200px] h-[200px] bg-mobile-nav bg-no-repeat bottom-0 -right-[100px]"></div>
        <nav aria-label="primary-nav" className="mb-9">
          <ul className="text-white">
            <li onClick={() => setIsToggled(false)}>
              <NavLink to={'/'}>home</NavLink>
            </li>
            <li onClick={() => setIsToggled(false)} className="mt-6">
              <NavLink to={'/about'}>about</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <Link
            onClick={() => setIsToggled(false)}
            to={'/contact'}
            className="btn border block text-center  font-semibold w-[153px] text-white"
          >
            contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
