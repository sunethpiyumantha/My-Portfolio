import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './HeaderTitle.css'

const HeaderTitle = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'Graphic Designer', 'UI/UX Designer', 'Youtuber', 'Blogger', 'Web Developer'],
    loop: true,  // Fix the loop option
  });

  return (
    <div className="headerti">
      <h1 className='h1'>
        Hi! I'm Suneth Piyumantha 
      </h1>
      <h1>
      And I'm {'    '}
      <span className='change'>
      {text}
      </span>
      <span style={{ color: 'red' }}>
        <Cursor cursorStyle="|" />
      </span>
      </h1>
      <p>
        Enthusiastic and dedicated undergraduate student from Rajarata University of Sri Lanka, majoring in Computer Science, seeking a web development internship to leverage my skills in HTML, CSS, JavaScript, and modern web development frameworks. Eager to contribute to impactful projects while gaining practical experience in a dynamic environment.
        </p>
    </div>
  );
};

export default HeaderTitle;
