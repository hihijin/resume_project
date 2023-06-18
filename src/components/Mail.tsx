import "../App.css";

import React, { FormEvent, useRef } from "react";

import styled from "styled-components";

import emailjs from "@emailjs/browser";

import ToastAlert from "../util/ToastAlert";

const Main = styled.div`
  position: fixed;
  bottom: 30px;
  left: 30px;
  background: #0db4f3;
  color: white;
  font-size: 15px;
  border-radius: 10px;
  box-shadow: 5px 8px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  animation: 0.5s ease-in-out mailOpen;
  &:hover {
    cursor: pointer;
  }
  @keyframes mailOpen {
    from {
      transform: translateY(500px);
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
      width: 400px;
      height: 200px;
      @media (max-width: 585px) {
        width: 300px;
        height: 150px;
      }
      @media (max-width: 480px) {
        width: 200px;
        height: 100px;
      }
    }
    .sendBtn {
      border-radius: 5px;
      padding: 5px;
      box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
      font-weight: bold;
      border: 2px solid white;
      color: white;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
      @media (max-width: 480px) {
        font-size: 10px;
      }
    }
  }
  .text {
    color: white;
    font-size: 13px;
    margin-bottom: 10px;
    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

const Section1 = styled.div`
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

const Section2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 480px) {
    margin-top: 10px;
  }
  label {
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
  input {
    width: 340px;
    padding: 5px;
    outline: none;
    border: none;
    margin-left: 10px;
    border-bottom: 3px solid white;
    background: none;
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    @media (max-width: 585px) {
      width: 245px;
    }
    @media (max-width: 480px) {
      width: 150px;
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
    props.setMailShow(false);
    ToastAlert("메일 전송을 성공하였습니다");
  };

  const mailCloseHandler = () => {
    props.setMailShow(false);
  };

  return (
    <Main>
      <form id="contact-form" ref={form} onSubmit={(e) => sendEmail(e)}>
        <Section1>
          <div />
          <label>메일보내기</label>
          <button className="closeBtn" onClick={mailCloseHandler}>
            X
          </button>
        </Section1>
        <Section2>
          <label>Email</label>
          <input placeholder="email" name="email" required />
        </Section2>
        <textarea name="message" required />
        <div className="text">*저에게 바로 메일을 보낼 수 있습니다.</div>
        <button className="sendBtn" type="submit" value="Send">
          Send
        </button>
      </form>
    </Main>
  );
}
