import { styled } from 'styled-components';

const PaginationBtnStyle = styled.div`
  .pagination-buttons {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }

  .pagination-buttons button {
    padding: 8px 12px;
    border: 1px solid #ccc;
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    margin: 0 4px;
  }

  .pagination-buttons button.active {
    background-color: #4477ce;
    color: white;
  }
`;

export default function PaginationBtn({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <PaginationBtnStyle>
      <div className="pagination-buttons">
        여기는 버튼
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </PaginationBtnStyle>
  );
}
