/* From Modernizr */
function whichTransitionEvent() {
  const el = document.createElement('fakeelement');
  const transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
  };

  let returnVal = '';

  Object.keys(transitions).forEach((key) => {
    if (el.style[key] !== undefined) {
      returnVal = transitions[key];
    } else {
      returnVal = false;
    }
  });

  return returnVal;
}

export default whichTransitionEvent;
