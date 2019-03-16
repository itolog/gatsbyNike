export default function throttled(delay: number, fn: Function) {
  let lastCall = 0;
  return (...args: []) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return window.requestAnimationFrame(() => fn(...args));
  };
}
