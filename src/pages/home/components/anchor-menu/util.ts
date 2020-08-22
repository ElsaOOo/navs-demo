export const getElementTop = (element: HTMLElement) => {
  var actualTop = element.offsetTop;
  var current = element.offsetParent as HTMLElement | null;

  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent as HTMLElement | null;
  }

  return actualTop;
};
