import { helper } from '@ember/component/helper';
import Color from 'color';

export function toColor([ hex, type ]/*, hash*/) {
  const color = Color(hex);
  switch(type) {
    case 'rgb':
      return color.rgb().string();
    case 'cmyk':
      return color.cmyk().round().array().join(', ');
    default:
      return hex;
  }
}

export default helper(toColor);
