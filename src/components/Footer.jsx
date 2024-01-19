import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import facebook from '../assets/icon-facebook.svg';
import pinterest from '../assets/icon-pinterest.svg';
import twitter from '../assets/icon-twitter.svg';
import logo from '../assets/logo.svg';
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark-green pt-[4.125rem] pb-[4rem] md:py-[3.5rem] lg:py-12">
      <div className="myContainer">
        <div className="flex text-center flex-col items-center md:flex-row md:items-start md:justify-between lg:gap-[7.8125rem] ">
          <div className="flex flex-col items-center md:items-start">
            <div>
              <img
                src={logo}
                alt="logo"
                className="w-[5.5rem] mb-6 md:mb-[3.3125rem]"
              />
              <nav
                aria-label="secondary-nav"
                className="mb-6 md:mb-[2.0625rem] lg:mb-0"
              >
                <ul className="flex items-center text-white  gap-6 text-[0.9375rem]">
                  <li className="hover:text-light-coral">
                    <NavLink to={'/'}>home</NavLink>
                  </li>
                  <li className="hover:text-light-coral">
                    <NavLink to={'/about'}>about</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="md:hidden text-[0.9375rem] leading-[1.66] text-white/60 text-center">
              <p>987 Hillcrest Lane</p>
              <p>Irvine, CA</p>
              <p>California 92714</p>
              <p>Call Us: 949-833-7432</p>
            </div>
            <div className="lg:hidden">
              <ul
                className="flex items-center gap-4 mt-10 md:mt-0 mb-4 md:mb-0"
                role="list"
              >
                <li>
                  <a
                    href="https://www.facebook.com/"
                    aria-label="facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      className="text-white hover:fill-light-coral"
                      size={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pinterest.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="pinterest"
                  >
                    <FaPinterest
                      className=" text-white hover:fill-light-coral"
                      size={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="twitter"
                  >
                    <FaTwitter
                      className=" text-white hover:fill-light-coral"
                      size={24}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex grow justify-between">
            <div className="text-center text-white/60 leading-[1.66] text-[0.9375rem] md:text-right">
              <div className="hidden md:block lg:text-left">
                <p>987 Hillcrest Lane</p>
                <p>Irvine, CA</p>
                <p>California 92714</p>
                <p>Call Us: 949-833-7432</p>
              </div>
              <p className="md:mt-[2.125rem] lg:hidden text-white/60 text-[0.9375rem]">
                Copyright 2020. All Rights reserved
              </p>
            </div>
            <div className="hidden lg:flex flex-col justify-between">
              <div className="socials">
                <ul
                  className="flex items-center gap-4 mt-10 md:mt-0 mb-4 md:mb-0 lg:justify-end"
                  role="list"
                >
                  <li>
                    <a href="" aria-label="facebook">
                      <FaFacebook
                        size={24}
                        className="text-white hover:fill-light-coral"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="" aria-label="pinterest">
                      <FaPinterest
                        size={24}
                        className="text-white hover:fill-light-coral"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="" aria-label="twitter">
                      <FaTwitter
                        size={24}
                        className="text-white hover:fill-light-coral"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <p className="md:mt-[2.125rem] text-white/60 text-[0.9375rem]">
                Copyright 2020. All Rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
