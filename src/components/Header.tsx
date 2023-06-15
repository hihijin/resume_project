import "../App.css";

import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";

import Sidebar from "./Sidebar";

const Main = styled.div`
  z-index: 1;
  background: #fafafa;
  width: 100%;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  box-shadow: 5px 0px 10px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 310px) {
    padding: 15px 10px;
  }
  div {
    font-weight: bold;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };
  return (
    <Main>
      <div>👩‍💻 Dev Heejin</div>
      <div>
        <button onClick={toggleSide}>
          <RxHamburgerMenu size="20px" />
        </button>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </Main>
  );
}

export default Header;
