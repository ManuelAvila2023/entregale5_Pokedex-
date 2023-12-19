const paginateData = (items, currentPage) => {
  //Amount of items per page
  const ITEM_PER_PAGE = 20;
  //The items on the current page
  const sliceEnd = currentPage + ITEM_PER_PAGE;
  const sliceStart = sliceEnd - ITEM_PER_PAGE;
  const itemsInCurrentPage = items.slice(sliceStart, sliceEnd);

  //last page
  const lastPage = Math.ceil(items.length / ITEM_PER_PAGE);
  //Current block
  const PAGES_PER_BLOCK = 5;
  const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK);

  //Pages to be displayed in the current block
  const pagesInCurrentBlock = [];
  const maxPage = actualBlock * PAGES_PER_BLOCK;
  const minPage = maxPage - PAGES_PER_BLOCK + 1;
  for (let i = minPage; i <= maxPage; i++) {
    if(i<= lastPage){
        pagesInCurrentBlock.push(i);
    }
    
  }
  return{
    itemsInCurrentPage,
    lastPage,
    pagesInCurrentBlock
  }
};

export { paginateData };
