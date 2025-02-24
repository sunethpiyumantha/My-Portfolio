import React from 'react';
import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";

const code = `
const developer = {
  firstName: "Suneth",
  lastName: "Piyumantha",
  aka: "Mr Suneth",
  hobby: () => {
    // eat();
    // sleep();
    // code();
    // repeat();
  }
};
`;

const Header = () => {
  return (
    <header id='header'>
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="column">
            <img src={profile1} className='profile__photo' alt="" />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"} code={code} />
        </div>
      </div>
    </header>
  );
};

export default Header;
