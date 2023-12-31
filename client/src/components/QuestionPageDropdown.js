import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';
import PropTypes from 'prop-types'; // PropTypes 불러오기

const DropdownContainer = styled.div`
  background-color: #f4f6f6;
  position: relative;

  .dropdown-button {
    padding: 12px 16px;
    display: flex;
    width: 100%;
  }

  .dropdown-box {
    color: #6a737c;
    font-size: 16px;
    width: 100%;
    display: flex;
  }

  .icon-button {
    margin-left: auto;
  }

  .dropdown-content {
    position: absolute;
    top: 100%;
    width: 100%;
    border: 1px solid #d5d9dc;
    overflow-x: hidden;
    background-color: #ffffff;
    z-index: 1;
    height: 214px;
  }

  .dropdown-text {
    height: 102px;
    border-bottom: 1px solid #efeff2;
    padding: 12px 16px;
  }
`;

function QuestionPageDropdown({ isOpen, onToggle }) {
  return (
    <DropdownContainer>
      <div className="dropdown-container ">
        <button
          className="
                dropdown-button"
          onClick={onToggle}
        >
          <div className="dropdown-box">
            Do any of these posts answer your question?
            <button className="icon-button">
              <FontAwesomeIcon
                className="faChevronIcon"
                icon={isOpen ? faChevronUp : faChevronDown}
              />
            </button>
          </div>
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <div className="dropdown-text-container">
              <div className="dropdown-text">질문 상세페이지 이동 1</div>
              <div className="dropdown-text">질문 상세페이지 이동 2</div>
              <div className="dropdown-text">질문 상세페이지 이동 3</div>
            </div>
          </div>
        )}
      </div>
    </DropdownContainer>
  );
}

// PropTypes 설정
QuestionPageDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default QuestionPageDropdown;
