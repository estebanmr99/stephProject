/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import './Screen.scss';
import { Link } from 'react-scroll';
import useSharedStore from '../../stateManagement/sharedStore';

const Screen = ({ sequency, imageUrl, bgColor, textColor, title, text, btnText }) => {
  const setTest2 = useSharedStore((state) => state.setTest2);

  // useEffect(() => {
  //   if (sequency && Number(sequency) === 19) {
  //     setTest2();
  //   }
  // }, [sequency]);

  return (
    <div id={Number(sequency)} className="screen-full" style={{ background: bgColor, color: textColor }}>
      <div className="container">
        <header>
          <img src={imageUrl} alt="simple gif" />
        </header>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <footer>
          <Link
            activeClass="active"
            to={Number(sequency) + 1}
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            ignoreCancelEvents={true}
            style={{ color: 'black' }}
          >
            {btnText}
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Screen;
