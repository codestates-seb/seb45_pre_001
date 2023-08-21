import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faSort,
  faTags,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';
import Header from '../components/Header';
import { useState } from 'react';

const SignUpPage = styled.div`
  display: flex;
  width: 100%;
  height: 900px;
  background-color: #f1f2f3;
  margin-top: 56px;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  .signup_page_container {
    display: flex;
    flex-direction: row;
  }
  .signup_community {
    display: flex;
    flex-direction: column;
    padding-right: 48px;
    width: 420px;
  }
`;

const SignUpCommunity = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  .signup_community {
    margin: 0px;
  }
  .signup_community_question {
    margin-top: 32px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }
  .signup_community_comment {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }
  .signup_community_etc {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }
  .signup_community_badges {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }
  .signup_community_collabogroup {
    font-size: 13px;
    white-space: pre-line;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px;
  width: 26px;
  height: 26px;
  color: #0a95ff;
`;

const SignupForm = styled.div`
  font-size: 15px;
  cursor: pointer;
  .signup_form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .signup_form_container {
    width: 316px;
    height: 484px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.25);
    padding: 20px 24px;
  }
  p {
    color: #6a737c;
    font-size: 12px;
    margin: 4px 0px;
  }
  .signup_form_check {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 16px 0px 0px 4px;
  }
  .text_check {
    margin-left: 4px;
    font-size: 12px;
  }
  .signup_form_submit {
    margin: 8px 0px;
    border-radius: 4px;
    background-color: #0a95ff;
  }
  .sinup_submit_btn {
    color: white;
    width: 268px;
    height: 35px;
  }
  .signup_form_agree {
    margin-top: 20px;
  }
  .signup_agree_text {
    font-size: 12px;
  }
`;

const SignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0px;
  font-weight: 600;
  input {
    border: 1px solid #babfc4;
    border-radius: 5px;
    width: 268px;
    height: 35px;
    margin-top: 2px;
  }
`;

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState('');

  const handleSignup = async () => {
    try {
      const userData = {
        // 서버에서 구축한 json형태로 보내야함
        nickname: username,
        email: email,
        password: password,
      };

      const response = await fetch(`http://13.124.105.17:8080/users/new-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      const { token } = data;

      localStorage.setItem('token', token);

      setUsername('');
      setEmail('');
      setPassword('');
      setCheckbox('');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };
  return (
    <>
      <Header />
      <SignUpPage>
        <div className="signup_page">
          <div className="signup_page_container">
            <SignUpCommunity>
              <div className="signup_community">
                <h1>Join the Stack Overflow community</h1>
                <div className="signup_community_question">
                  <Icon icon={faCircleQuestion} className="icon_question" />
                  <span className="text_question">
                    Get unstuck - ask a question
                  </span>
                </div>
                <div className="signup_community_comment">
                  <div className="icon_comment_set">
                    <Icon icon={faSort} className="icon_arrow" />
                  </div>
                  <span className="text_comment">
                    Unlock new privileges like voting and commenting
                  </span>
                </div>
                <div className="signup_community_etc">
                  <Icon icon={faTags} className="icon_etc" />
                  <span className="text_etc">
                    Save your favorite questions, answers, watch tags, and more
                  </span>
                </div>
                <div className="signup_community_badges">
                  <Icon icon={faTrophy} className="icon_badges" />
                  <span className="text_badges">
                    Earn reputation and badges
                  </span>
                </div>
                <div className="signup_community_collabogroup">
                  Collaborate and share knowledge with a private group for FREE.
                  Get Stack Overflow for Teams free for up to 50 users
                </div>
              </div>
            </SignUpCommunity>
            <SignupForm>
              <div className="signup_form_container">
                <div className="signup_form">
                  <SignupFormContainer className="signup_form_name">
                    <label htmlFor="sinup_form_displayname">Display name</label>
                    <input
                      type="name"
                      id="name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                  </SignupFormContainer>
                  <SignupFormContainer className="signup_form_id">
                    <label htmlFor="sinup_form_email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </SignupFormContainer>
                  <SignupFormContainer className="signup_form_security">
                    <label htmlFor="sinup_form_password">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </SignupFormContainer>
                  <p>
                    Password munst contatin at least eight characters, including
                    at least 1 letter and 1 number
                  </p>
                  <div className="signup_form_check">
                    <input
                      type="checkbox"
                      id="checkbox"
                      // 체크 여부를 관리하기 위해 value가 아닌 checked로 사용
                      checked={checkbox}
                      onChange={(e) => setCheckbox(e.target.value)}
                    />
                    <span className="text_check">
                      Opt-in to receive occastional product updates, user
                      research invitations, company announcements, and digests.
                    </span>
                  </div>
                  <div className="signup_form_submit">
                    <button
                      className="sinup_submit_btn"
                      onClick={() => {
                        handleSignup();
                        setUsername('');
                        setEmail('');
                        setPassword('');
                        setCheckbox('');
                      }}
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="signup_form_agree">
                    <span className="signup_agree_text">
                      By clicking {"'"}Sign up{"'"}, you agree to our terms fo
                      servicea and acknowledge that you have read and understand
                      our privacy and code of conduct
                    </span>
                  </div>
                </div>
              </div>
            </SignupForm>
          </div>
        </div>
      </SignUpPage>
    </>
  );
}
