import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import icon from '../images/small-logo.svg';
import googleIcon from '../images/google-icon.svg';
import githubIcon from '../images/github-icon.svg';
import facebookIcon from '../images/facebook-icon.svg';
import { useState } from 'react';

const StyleLoginPage = styled.div`
  background-color: #f1f2f3;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 288.45px;
  }

  //에러 발생 시 전체 컨테이너 크기 커짐
  .container.error {
    width: 300px;
  }

  .img-contaienr {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }

  .img-contaienr a > img {
    width: 32px;
    height: 37px;
  }

  .link-button-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .link-icon {
    margin-right: 5px;
  }

  .link-button {
    height: 37.4px;
    flex-shrink: 0;
    border-radius: 7px;
    border: 1px solid #c8ccd0;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    color: #ffffff;
  }

  .link-button > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .google-btn {
    background-color: #ffffff;
  }
  .google-btn > a {
    color: #3b4045;
  }
  .google-icon {
    width: 18px;
    height: 18px;
  }
  .github-btn {
    background-color: #2f3337;
  }

  .facebook-btn {
    background-color: #385499;
  }
  .form-container {
    width: 100%;
    margin-top: 16px;
    margin-bottom: 24px;
    border-radius: 7px;
    background: #ffffff;
    box-shadow:
      0 10px 24px hsla(0, 0%, 0%, 0.05),
      0 20px 48px hsla(0, 0%, 0%, 0.05),
      0 1px 4px hsla(0, 0%, 0%, 0.1);
    padding: 24px;
  }
  #login-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  label {
    font-weight: bold;
  }
  input {
    border-radius: 5px;
    border: 1px solid #babfc4;
    background: #fff;
    height: 33px;
    flex-shrink: 0;
    width: 100%;
    padding: 8px 9px;
  }

  .login-button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 223px;
    height: 37px;
    background-color: #0a95ff;
    border-radius: 5px;
    width: 100%;
  }

  .login-button {
    color: #ffffff;
    width: 100%;
  }
  .password-lable {
    display: flex;
    justify-content: space-between;
  }

  .forgot-password {
    color: #0074cc;
    font-size: 12px;
  }

  .join-guide-container {
    text-align: center;
    padding: 16px;
    font-size: 14px;
    width: 100%;
  }
  .talent-guide-container {
    margin-top: 12px;
    width: 100%;
  }
  .join-link {
    margin-left: 3px;
    color: #0074cc;
  }
  .fa-up-right-from-square {
    margin-left: 5px;
  }

  .error-message {
    color: #d0393e;
    font-size: 13px;
    margin: 2px 0;
    padding: 2px;
  }
`;

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setemailError] = useState('');
  const [error, setError] = useState('');

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // 새로고침 방지
  const handleSubmit = (event) => {
    event.preventDefault();

    // 이메일 양식 유효성 검사
    if (!isEmailValid(username)) {
      setemailError('The email is not a valid email address.');
      return;
    }

    // 서버 주소
    const ipv4 = 'http://13.124.105.17:8080';

    const loginData = {
      username: username,
      password: password,
    };
    console.log(loginData);

    // 로그인 요청 보내기
    fetch(`${ipv4}/users/login`, {
      method: 'POST',
      body: JSON.stringify(loginData), // JSON 형식으로 변환
    })
      .then((response) => response.text()) // 서버 응답 text 형식으로 변환
      .then((data) => {
        console.log('서버 응답:', data);
        if (data === 'login Failed') {
          throw new Error('An error occurred with log in.');
        } else {
          const token = data;
          localStorage.setItem('jwtToken', token); // 토큰 저장
        }
      })
      .catch((error) => {
        console.error('에러 발생:', error); // 에러 콘솔 출력
        setError(error.message);
      });
  };

  return (
    <StyleLoginPage>
      <div className={`container ${error ? 'error' : ''}`}>
        <div className="img-contaienr">
          <a href="https://stackoverflow.com">
            <img src={icon} alt="stackoverflow-logo"></img>
          </a>
        </div>
        <div className="link-button-container">
          <button className="link-button google-btn">
            <a href="https://accounts.google.com/o/oauth2/auth">
              <img className="link-icon" src={googleIcon} alt="google-icon" />
              Log in with Google
            </a>
          </button>

          <button className="link-button github-btn">
            <a href="https://https://github.com/login/oauth/authorize">
              <img
                className="link-icon"
                src={githubIcon}
                alt="github-icon"
              ></img>
              Log in with GitHub
            </a>
          </button>
          <button className="link-button facebook-btn">
            <a href="https://www.facebook.com/v2.0/dialog/oauth">
              <img
                className="link-icon"
                src={facebookIcon}
                alt="facebook-icon"
              ></img>
              Log in with Facebook{' '}
            </a>
          </button>
        </div>
        <div className="form-container">
          <form id="login-form" onSubmit={handleSubmit}>
            <div className="login-box">
              <form className="email-form">
                <label htmlFor="email">Email</label>
                <div>
                  <input
                    className="email-input"
                    id="email"
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                  {emailError && <p className="error-message">{emailError}</p>}
                </div>
              </form>
            </div>
            <div className="password-box">
              <form className="password-form">
                <div className="password-lable">
                  <label htmlFor="password">Password</label>
                  <a className="forgot-password" href="/users/account-recovery">
                    Forgot password?
                  </a>
                </div>
                <div>
                  <input
                    className="password-input"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                {error && <p className="error-message">{error}</p>}
                {/* 에러 메시지 표시 */}
              </form>
            </div>

            <div className="login-button-container">
              <button className="login-button" type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
        <div className="join-guide-container">
          Don’t have an account?
          <a
            className="join-link "
            href="/users/signup?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f"
          >
            Sign Up
          </a>
          <div className="talent-guide-container">
            Are you an employer?
            <a
              className="join-link "
              href="https://careers.stackoverflow.com/employer/login"
            >
              Sign up on Talent
              <FontAwesomeIcon icon={faUpRightFromSquare} />{' '}
            </a>
          </div>
        </div>
      </div>
    </StyleLoginPage>
  );
}

export default LoginPage;
