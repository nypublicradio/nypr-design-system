import { helper } from '@ember/component/helper';

const DEFAULT_OPTIONS = {
  threshold: 0,
};

const DEFAULT_OFFSET = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

export function inViewport (element, options = {}) {
  options = {
    ...DEFAULT_OPTIONS,
    ...options,
    offset: {
      ...DEFAULT_OFFSET,
      ...options.offset,
    }
  };

  const { top, right, bottom, left, width, height } = element.getBoundingClientRect();

  const intersection = {
    t: bottom,
    r: window.innerWidth - left,
    b: window.innerHeight - top,
    l: right
  };

  const threshold = {
    x: options.threshold * width,
    y: options.threshold * height
  };

  return intersection.t > (options.offset.top    + threshold.y)
    && intersection.r > (options.offset.right  + threshold.x)
    && intersection.b > (options.offset.bottom + threshold.y)
    && intersection.l > (options.offset.left   + threshold.x);

}

function makeHelper(element, options) {
  return inViewport([element], options)
}

export default helper(makeHelper);
