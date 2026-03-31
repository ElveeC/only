const screenHeight = document.documentElement.clientHeight;
const animateBlock = document.querySelector('.footer__slogan');

function scrolling() {
  const animateElements = document.querySelectorAll('.footer__slogan-element');

  if (isHalfVisible(animateBlock)) {
    for (let i = 0; i < animateElements.length; i++) {
      animateElements[i].classList.add('footer__slogan-element--animated');
    }
  }
}

function isHalfVisible(element) {
  const elementBoundary = element.getBoundingClientRect();
  const top = elementBoundary.top;
  const height = elementBoundary.height;

  return (top + height >= 0) && (top + 0.5 * height <= screenHeight);
}

const initFooterAnimation = () => {
  window.addEventListener('scroll', scrolling);
};

export {initFooterAnimation};
