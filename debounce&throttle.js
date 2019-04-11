function debounce(fn) {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn();
    }, 400);
  };
}
function throttle(fn, wait = 300) {
  let prev = +new Date();
  return function() {
    const args = argument,
      now = +new Date();
    if (now > prev + wait) {
      prev = now;
      fn.apply(this, args);
    }
  };
}
