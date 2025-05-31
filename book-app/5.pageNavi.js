import { currentBookData } from './2.currentBookData.js';

function activatePageNavTools() {
  // 5- page navigator
  const pageInputNumberElement = document.getElementById('PageInput');
  const pageInputRangeElement = document.getElementById('PageInput2');
  
  pageInputNumberElement.addEventListener('keydown', (e) => {
    if (['+', '-', '.', 'e', 'E'].includes(e.key)) {e.preventDefault();}
  });
  
  pageInputNumberElement.addEventListener('input', () => {
    const value = Number(pageInputNumberElement.value);
    const max = Number(pageInputNumberElement.max);
    if (value > max) {pageInputNumberElement.value = pageInputNumberElement.value.slice(0, -1)}
    currentBookData.goToPage(pageInputNumberElement.value);
  });
  
  pageInputRangeElement.addEventListener('input', () => {
    currentBookData.goToPage(pageInputRangeElement.value);
  });
  
  document.getElementById('PrevPageBtn').addEventListener('click', () => currentBookData.goToPrevPage());
  
  document.getElementById('NextPageBtn').addEventListener('click', () => currentBookData.goToNextPage());
  
  // inja age khaasti mitooni kaari koni ke inputet baa enter kaar kone
  let selectedPageNumberOnFocus = currentBookData.observingPageNumber;
  pageInputNumberElement.addEventListener('focus', () => {
    selectedPageNumberOnFocus = pageInputNumberElement.value;
    pageInputNumberElement.select();
  });
  
  pageInputNumberElement.addEventListener('blur', () => {
    if (pageInputNumberElement.value === "") {currentBookData.goToPage(selectedPageNumberOnFocus);}
  });
}

export { activatePageNavTools };

