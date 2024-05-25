// TypingAnimation.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = ({strings, typeSpeed, backSpeed, loop, className}) => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      cursorChar: '_',
      loop: loop,
    };

    // Initialize Typed.js
    const typed = new Typed(typeTarget.current, options);

    // Clean up when the component unmounts
    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed]);

  return (
    <div>
      <span ref={typeTarget} className={className} />
    </div>
  );
};

export default TypingAnimation;
