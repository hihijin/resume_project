import React, { useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SideBarWrap = styled.div`
  z-index: 5;
  padding: 12px;
  background-color: #f5f5f5;
  height: 100%;
  width: 300px;
  right: -55%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  box-shadow: 0 -30px 50px 0 rgba(0, 0, 0, 0.1);
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
  @media (max-width: 560px) {
    width: 200px;
    right: -70%;
  }
  button {
    width: 100%;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    &:hover {
      background: #0db4f3;
      color: white;
      border: none;
    }
  }
`;

const Menu = styled.div`
  margin: 30px 8px;
  color: black;
  width: 100%;
  &:hover {
    cursor: pointer;
    color: #0db4f3;
  }
`;

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const navigate = useNavigate();
  const outside = useRef<any>();

  useEffect(() => {
    document.addEventListener("mousedown", handlerOutsie);
    return () => {
      document.removeEventListener("mousedown", handlerOutsie);
    };
  });

  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  const linkHandler = (link: string) => {
    navigate(link);
    window.location.reload();
  };
  return (
    <SideBarWrap id="sidebar" ref={outside} className={isOpen ? "open" : ""}>
      <button onClick={toggleSide} onKeyDown={toggleSide}>
        닫기
      </button>
      <Menu onClick={() => linkHandler("/")}>Home</Menu>
      <Menu onClick={() => linkHandler("/project")}>✈️너의 MBTI는</Menu>
    </SideBarWrap>
  );
}

export default Sidebar;
