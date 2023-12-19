const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {
  const FIRST_PAGE = 1;
  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };

  const handleLastpage = () => setCurrentPage(lastPage);

  const handlePreviusPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage - 1;
      if (newPage >= FIRST_PAGE) return newPage;
      return prevPage;
    });
  };

  const handleFirstPage = () => setCurrentPage(FIRST_PAGE);
  return (
    <ul className="flex justify-center gap-4 p-4 items-center">
      {currentPage >= 2 && <li className="flex items-center justify-center bg-[#DD1A1A] text-white w-[30px] h-[40px] rounded" onClick={handleFirstPage}>{"<<"}</li>}
      {currentPage >= 2 && <li className="flex items-center justify-center bg-[#DD1A1A] text-white w-[30px] h-[40px] rounded" onClick={handlePreviusPage}>{"<"}</li>}
      {pagesInCurrentBlock.map((page) => (
        <li
          className={`p-2 ${
            currentPage == page ? "text-white bg-red-500" : ""
          }`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}
      {currentPage < lastPage && <li className="flex items-center justify-center bg-[#DD1A1A] text-white w-[30px] h-[40px] rounded" onClick={handleNextPage}>{">"}</li>}
      {currentPage < lastPage && <li className="flex items-center justify-center bg-[#DD1A1A] text-white w-[30px] h-[40px] rounded" onClick={handleLastpage}>{">>"}</li>}
    </ul>
  );
};

export default Pagination;
