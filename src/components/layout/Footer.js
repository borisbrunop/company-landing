import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex px-3 items-center w-full flex-col">
        <p className="mt-5 text-center">
          {' '}
          {/* <strong>Phone Number:</strong>  */}
          +57 (310) 722-5683
          <br />
          {/* <strong>Email:</strong>  */}
          info@lineasgh.com
          <br />
          {/* <strong>Location:</strong>  */}
          Barranquilla, Colombia
        </p>
      </div>
      {/* <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://dev.to/changoman">Dev.to</a>
          </li>
          <li>
            <a href="https://twitter.com/HuntaroSan">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/codebushi/gatsby-starter-lander">GitHub</a>
          </li>
        </ul>
      </div> */}
    </div>
  </footer>
);

export default Footer;
