import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCaretUp,
  faCaretDown,
  faTags,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';
import Header from '../components/Header';

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
    margin-right: 48px;
    width: 420px;
  }
  .signup_form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default function SignupPage() {
  return (
    <SignUpPage>
      <Header />
      <div className="signup_page">
        <div className="signup_page_container">
          <div className="signup_community">
            <h1>Join the Stack Overflow community</h1>
            <div className="signup_community_question">
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="icon_question"
              />
              <span className="text_question">
                Get unstuck - ask a question
              </span>
            </div>
            <div className="signup_community_comment">
              <div className="icon_comment_set">
                <FontAwesomeIcon icon={faCaretUp} className="icon_arrowup" />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="icon_arrowdown"
                />
              </div>
              <span className="text_comment">
                Unlock new privileges like votin and commenting
              </span>
            </div>
            <div className="signup_community_etc">
              <FontAwesomeIcon icon={faTags} className="icon_etc" />
              <span className="text_etc">
                Save your favorite questions, answers, watch tags, and more
              </span>
            </div>
            <div className="signup_community_badges">
              <FontAwesomeIcon icon={faTrophy} className="icon_badges" />
              <span className="text_badges">Earn reputation and badges</span>
            </div>
            <div className="signup_community_collabogroup">
              Collaborate and share knowledge with a private group for FREE. Get
              Stack Overflow for Teams free for up to 50 users
            </div>
          </div>
          <div className="signup_form_container">
            <div className="signup_form">
              <div className="signup_form_name">
                <label htmlFor="sinup_form_displayname">Display name</label>
                <input type="text"></input>
              </div>
              <div className="signup_form_id">
                <label htmlFor="sinup_form_email">Email</label>
                <input type="text"></input>
              </div>
              <div className="signup_form_security">
                <label htmlFor="sinup_form_password">Password</label>
                <input type="text"></input>
              </div>
              <p>
                Password munst contatin at least eight characters, including at
                least 1 letter and 1 number
              </p>
              <div className="signup_fom_submit">
                <button className="sinup_submit_btn">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SignUpPage>
  );
}
