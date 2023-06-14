import "../App.css";

import React, { FormEvent, useRef } from "react";

import styled from "styled-components";

import emailjs from "@emailjs/browser";

const Main = styled.div`
  position: fixed;
  bottom: 50px;
  left: 30px;
  background: #0db4f3;
  color: white;
  font-size: 15px;
  border-radius: 20px;
  box-shadow: 5px 8px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  &:hover {
    cursor: pointer;
  }
  .animation {
    animation: 1s ease-in-out mailAni;
  }
  @keyframes mailAni {
    from {
      transform: translateY(-30px);
    }
    to {
      transform: translateY(0px);
    }
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    label {
      font-weight: bold;
    }
    textarea {
      padding: 10px;
      margin: 15px 0;
      border-radius: 5px;
      outline: none;
      border: none;
      width: 200px;
      height: 100px;
    }
    .sendBtn {
      background: white;
      border-radius: 5px;
      padding: 5px;
      box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
      &:hover {
        background: #ececec;
      }
    }
  }
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 15px;
  }
  .closeBtn {
    color: white;
    font-size: 15px;
    background: none;
    &:hover {
      font-weight: bold;
      font-size: 16px;
    }
  }
`;

interface Imail {
  setMailShow: (x: boolean) => void;
}
export default function Mail(props: Imail) {
  const form = useRef(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_ithzlmh",
      "template_2wudz7b",
      "#contact-form",
      "W-lHD0EqTsVZzY_31"
    );
    (e.target as HTMLFormElement).message.value = "";
  };

  const mailCloseHandler = () => {
    props.setMailShow(false);
  };

  return (
    <Main>
      <form id="contact-form" ref={form} onSubmit={(e) => sendEmail(e)}>
        <Section>
          <div />
          <label>메일보내기</label>
          <button className="closeBtn" onClick={mailCloseHandler}>
            X
          </button>
        </Section>
        <textarea name="message" />
        <button className="sendBtn" type="submit" value="Send">
          Send
        </button>
      </form>
    </Main>
  );
}
