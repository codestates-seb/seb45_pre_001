import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px #ffecaf;
  height: 450px;
  width: 300px;
  margin-right: 0.5rem;
  font-size: 13px;
  background-color: #fbf3d5;
  margin-top: 80px;
  .sidebar_widget_first {
    color: #3b4045;
    background-color: #f1e5bc;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: bold;
    font-size: 12px;
  }
  .sidebar_widget_second {
    color: #3b4045;
    background-color: #f1e5bc;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: bold;
    font-size: 12px;
  }
  .sidebar_widget_third {
    color: #3b4045;
    background-color: #f1e5bc;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: bold;
    font-size: 12px;
    list-style: none;
  }
  .sidebar_widget_firstitem1 {
    display: flex;
    margin: 10px 0px 10px 15px;
  }
  .sidebar_widget_firstitem2 {
    display: flex;
    margin: 0px 0px 10px 15px;
  }
  .sidebar_widget_seconditem1 {
    display: flex;
    margin: 10px 0px 10px 15px;
  }
  .sidebar_widget_seconditem2 {
    display: flex;
    margin: 10px 0px 10px 15px;
  }
  .sidebar_widget_seconditem3 {
    display: flex;
    margin: 10px 0px 10px 15px;
  }
  .sidebar_widget_seconditem4 {
    display: flex;
    margin: 10px 0px 10px 15px;
  }
  .sidebar_widget_seconditem5 {
    display: flex;
    margin: 10px 0px 10px 15px;
  }
  .sidebar_widget_thirditem1 {
    list-style: none;
  }
  .sidebar_widget_thirditem1_text {
    margin: 10px 0px 10px 15px;
  }

  .icon_pencil {
    margin-right: 0.5rem;
  }
  .icon_message {
    margin-right: 0.5rem;
    color: #4682a9;
  }
  .icon_stackoverflow {
    margin-right: 0.5rem;
  }
`;
export default function Sidebar() {
  return (
    <SidebarContainer>
      <div className="sidebar_container">
        <ul className="sidebar_widget">
          <li className="sidebar_widget_first">The Overflow Blog</li>
          <li className="sidebar_widget_firstitem1">
            <FontAwesomeIcon icon={faPencil} className="icon_pencil" />
            <div className="sidebar_widget_firstitem1_text">
              Speeding up the I/O-heavy app: Q&A with Malte Ubl of Vercel
            </div>
          </li>
          <li className="sidebar_widget_firstitem2">
            <FontAwesomeIcon icon={faPencil} className="icon_pencil" />
            <div className="sidebar_widget_firstitem2_text">
              Understanding SRE (Ep. 597)
            </div>
          </li>
          <li className="sidebar_widget_second">Featured on Meta</li>
          <li className="sidebar_widget_seconditem1">
            <FontAwesomeIcon icon={faMessage} className="icon_message" />
            <div className="sidebar_widget_seconditem1_text">
              Moderation strike: Results of negotiations
            </div>
          </li>
          <li className="sidebar_widget_seconditem2">
            <FontAwesomeIcon icon={faMessage} className="icon_message" />
            <div className="sidebar_widget_seconditem2_text">
              Our Design Vision for Stack Overflow and the Stack Exchange
              network
            </div>
          </li>
          <li className="sidebar_widget_seconditem3">
            <FontAwesomeIcon
              icon={faStackOverflow}
              className="icon_stackoverflow"
            />
            <div className="sidebar_widget_seconditem3_text">
              Temporary policy: Generative AI (e.g.,ChatGPT) is banned
            </div>
          </li>
          <li className="sidebar_widget_seconditem4">
            <FontAwesomeIcon
              icon={faStackOverflow}
              className="icon_stackoverflow"
            />
            <div className="sidebar_widget_seconditem4_text">
              Preview of SEarch and Question-Asking Powered by GenAI
            </div>
          </li>
          <li className="sidebar_widget_seconditem5">
            <FontAwesomeIcon
              icon={faStackOverflow}
              className="icon_stackoverflow"
            />
            <div className="sidebar_widget_seconditem5_text">
              Collections: A New Feature for Collectives on Stack Overflow
            </div>
          </li>
          <li className="sidebar_widget_third">Hot Meta Posts</li>
          <li className="sidebar_widget_thirditem1">
            <FontAwesomeIcon />
            <div className="sidebar_widget_thirditem1_text">
              Will Stack Overflox ban the GPT web crawler?
            </div>
          </li>
        </ul>
      </div>
    </SidebarContainer>
  );
}
