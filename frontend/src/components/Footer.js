import React from 'react';
import reactLogo from '../images/react-original.svg';
import pythonLogo from '../images/python-original.svg';
import dockerLogo from '../images/docker-original.svg';
import amazonLogo from '../images/amazonwebservices-original.svg';
import githubLogo from '../images/github-original.svg';

const Footer = () => {
  return (
    <footer id="footer">
      <p>
        SentiMind analyses and visualises the sentiment (frequency and polarity)
        of the latest 100 tweets using SentiBot, an algorithm trained using
        machine learning
      </p>

      <p id="tech-stack">
        Powered by{' '}
        <img
          className="logos"
          alt="react logo"
          width="40"
          height="40"
          src={reactLogo}
        />{' '}
        and{' '}
        <img
          className="logos"
          alt="python logo"
          width="40"
          height="40"
          src={pythonLogo}
        />{' '}
        deployed with{' '}
        <img
          className="logos"
          alt="python logo"
          width="40"
          height="40"
          src={dockerLogo}
        />{' '}
        and{' '}
        <img
          className="logos"
          alt="python logo"
          width="40"
          height="40"
          src={amazonLogo}
        />{' '}
        check our{' '}
        <img
          className="logos"
          alt="python logo"
          width="40"
          height="40"
          src={githubLogo}
        />{' '}
        for more info.
      </p>
    </footer>
  );
};

export default Footer;
