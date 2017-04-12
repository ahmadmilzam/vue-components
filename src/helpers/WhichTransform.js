/* From Modernizr */
function whichTransform() {
  const el = document.createElement('fakeelement');
  const transforms = {
    transform: 'transform',
    msTransform: 'msTransform',
    webkitTransform: 'webkitTransform',
  };

  let returnVal = '';

  Object.keys(transforms).forEach((key) => {
    if (el.style[key] !== undefined) {
      returnVal = transforms[key];
    } else {
      returnVal = false;
    }
  });

  return returnVal;
}

export default whichTransform;
