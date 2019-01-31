import { helper } from '@ember/component/helper';
import Color from 'color';

export function colorFn([ hex, method, ...args ]/*, hash*/) {
  const color = Color(hex);
  if (color[method]) {
    return color[method](...args);
  } else {
    return hex;
  }
}

export default helper(colorFn);
