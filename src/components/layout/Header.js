import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import logo from '../../images/logo.jpeg';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        {/* <div className="w-12 mr-3"> */}
        {/* <LogoIcon /> */}
        <AnchorLink offset={100} className="px-4" href="#home">
          <img className="w-24 h-auto mr-4 rounded-full object-cover " src={logo} alt="logo" />
        </AnchorLink>
        {/* </div> */}
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink offset={100} className="px-4" href="#features">
          Policies
        </AnchorLink>
        <AnchorLink offset={100} className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink offset={100} className="px-4" href="#testimonials">
          Managment
        </AnchorLink>
        <AnchorLink offset={200} className="px-4" href="#contact">
          Contact
        </AnchorLink>
      </div>
      {/* <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div> */}
    </div>
  </header>
);

export default Header;
