import React from 'react';
import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from '../../ui/Facts';

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
          <div>
            <p className="text__muted description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repellendus fuga nisi possimus, harum magnam vero aspernatur cumque praesentium voluptate blanditiis non in optio tempora est totam, eveniet consectetur at.
            </p>
            <Facts />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
