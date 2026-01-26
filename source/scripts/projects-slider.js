const GAP_DESKTOP = 20;
const GAP_COUNT_DESKTOP = 3;
const PADDING_LARGE = 30;
const PADDING_MEDIUM = 20;
const PADDING_COUNT = 2;
const DESKTOP_STANDARD_WIDTH = 1439;
const TABLET_MAX_WIDTH = 1279;
const ITEM_WIDTH_MOB = 315;
const ITEMS_PER_PAGE_COUNT = 4;

const nextButton = document.querySelector('.top-projects__button--next');
const backButton = document.querySelector('.top-projects__button--back');
const list = document.querySelector('.top-projects__list');
const items = list.querySelectorAll('.top-projects__item');

const windowWidth = document.body.clientWidth;

let currentOffset = 0;
let itemWidth = ITEM_WIDTH_MOB;
let activeIndex = 0;
backButton.disabled = true;

if (windowWidth > DESKTOP_STANDARD_WIDTH) {
  itemWidth = Math.floor((windowWidth - GAP_DESKTOP * GAP_COUNT_DESKTOP - PADDING_LARGE * PADDING_COUNT) / ITEMS_PER_PAGE_COUNT);

  items.forEach((item) => {
    item.style.width = `${itemWidth}px`;
    item.style.minWidth = `${itemWidth}px`;
  });
} else if (windowWidth > TABLET_MAX_WIDTH) {
  itemWidth = Math.floor((windowWidth - GAP_DESKTOP * GAP_COUNT_DESKTOP - PADDING_MEDIUM * PADDING_COUNT) / ITEMS_PER_PAGE_COUNT);

  items.forEach((item) => {
    item.style.width = `${itemWidth}px`;
    item.style.minWidth = `${itemWidth}px`;
  });
}

const handleNextButtonClick = () => {
  currentOffset = currentOffset - itemWidth - GAP_DESKTOP;
  list.style.transform = `translateX(${currentOffset}px)`;
  activeIndex += 1;

  if (activeIndex !== 0) {
    backButton.disabled = false;
  }
  if (activeIndex === items.length - ITEMS_PER_PAGE_COUNT) {
    nextButton.disabled = true;
  }
};

const handleBackButtonClick = () => {
  currentOffset = currentOffset + itemWidth + GAP_DESKTOP;
  list.style.transform = `translateX(${currentOffset}px)`;
  activeIndex -= 1;

  if (activeIndex !== items.length - ITEMS_PER_PAGE_COUNT) {
    nextButton.disabled = false;
  }

  if (activeIndex === 0) {
    backButton.disabled = true;
  }
};

const initProjectsSlider = () => {
  nextButton.addEventListener('click', handleNextButtonClick);
  backButton.addEventListener('click', handleBackButtonClick);
};

export { initProjectsSlider };
