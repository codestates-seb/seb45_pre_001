import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  border: 1px solid black;
  width: 200px;
  margin-right: 0.5rem;
  font-size: 13px;
  .sidebar_widget_firstitem1 {
    display: flex;
    margin-right: 0.5rem;
  }
  .sidebar_widget_firstitem2 {
    display: flex;
  }
  .sidebar_widget_seconditem1 {
    display: flex;
  }
  .sidebar_widget_seconditem2 {
    display: flex;
  }
  .sidebar_widget_seconditem3 {
    display: flex;
  }
  .sidebar_widget_seconditem4 {
    display: flex;
  }
  .sidebar_widget_seconditem5 {
    display: flex;
  }
`;
export default function Sidebar() {
  return (
    <SidebarContainer>
      <div className="sidebar_container">
        <ul className="sidebar_widget">
          <li className="sidebar_widget_first">The Overflow Blog</li>
          <li className="sidebar_widget_firstitem1">
            <FontAwesomeIcon icon={faPencil} />
            <div className="sidebar_widget_firstitem1_text">
              Speeding up the I/O-heavy app: Q&A with Malte Ubl of Vercel
            </div>
          </li>
          <li className="sidebar_widget_firstitem2">
            <FontAwesomeIcon icon={faPencil} />
            <div className="sidebar_widget_firstitem2_text">
              Understanding SRE (Ep. 597)
            </div>
          </li>
          <li className="sidebar_widget_second">Featured on Meata</li>
          <li className="sidebar_widget_seconditem1">
            <FontAwesomeIcon icon={faMessage} />
            <div className="sidebar_widget_seconditem1_text">
              Moderation strike: Results of negotiations
            </div>
          </li>
          <li className="sidebar_widget_seconditem2">
            <FontAwesomeIcon icon={faMessage} />
            <div className="sidebar_widget_seconditem2_text">
              Our Design Vision for Stack Overflow and the Stack Exchange
              network
            </div>
          </li>
          <li className="sidebar_widget_seconditem3">
            <FontAwesomeIcon icon={faStackOverflow} />
            <div className="sidebar_widget_seconditem3_text">
              Temporary policy: Generative AI (e.g.,ChatGPT) is banned
            </div>
          </li>
          <li className="sidebar_widget_seconditem4">
            <FontAwesomeIcon icon={faStackOverflow} />
            <div className="sidebar_widget_seconditem4_text">
              Preview of SEarch and Question-Asking Powered by GenAI
            </div>
          </li>
          <li className="sidebar_widget_seconditem5">
            <FontAwesomeIcon icon={faStackOverflow} />
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
