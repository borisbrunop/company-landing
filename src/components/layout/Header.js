import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import logo from '../../images/logo.png';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-background-lighter shadow" style={{boxShadow: '0 10px 28px rgba(0,0,0,.28)'}}>
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        {/* <div className="w-12 mr-3"> */}
        {/* <LogoIcon /> */}
        <AnchorLink offset={100} className="px-4" href="#home">
          <img className="w-24 h-auto rounded-full object-cover " src={logo} alt="logo" />
        </AnchorLink>
        {/* </div> */}
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink offset={100} className="px-4 text-secondary" href="#features">
          Policies
        </AnchorLink>
        <AnchorLink offset={100} className="px-4 text-secondary" href="#services">
          Services
        </AnchorLink>
        {/* <AnchorLink offset={100} className="px-4 text-secondary" href="#testimonials">
          Managment
        </AnchorLink> */}
        <AnchorLink offset={200} className="px-4 text-secondary" href="#contact">
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
