import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCaretUp,
  faCaretDown,
  faTags,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

export default function SignupPage() {
  return (
    <div className="signup_page">
      <div className="signup_page_container">
        <div className="signup_community">
          <h1>Join the Stack Overflow community</h1>
          <div className="signup_community_question">
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className="icon_question"
            />
            <span className="text_question">Get unstuck - ask a question</span>
          </div>
          <div className="signup_community_comment">
            <div className="icon_comment_set">
              <FontAwesomeIcon icon={faCaretUp} className="icon_arrowup" />
              <FontAwesomeIcon icon={faCaretDown} className="icon_arrowdown" />
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
      </div>
    </div>
  );
}
