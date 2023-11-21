import React, { useState } from 'react';
import './LoginStyle.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('올바른 이메일을 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  return (
    <div>
      <div>
        <h2>이메일과 비밀번호를 입력해주세요</h2>
        <form>
          <p>
            <label htmlFor="email">이메일 주소</label>
            <br />
            <input
              type="text"
              id="email"
              onChange={handleEmailChange}
              onBlur={validateEmail}
            />
            <br />
            <span id="email-error" className="error-message">
              {emailError}
            </span>
          </p>
          <p>
            <label>비밀번호</label>
            <br />
            <input type="password" onChange={handlePasswordChange} placeholder="영문, 숫자, 특수문자 포함 8자 이상"/>
          </p>
          <br />
          <button type="button">
            확인
          </button>
        </form>
      </div>
    </div>
  );
}
