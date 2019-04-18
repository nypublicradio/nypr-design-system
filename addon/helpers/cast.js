import { helper } from '@ember/component/helper';

export function cast([value, type]/*, hash*/) {
  switch(type) {
    case 'number':
    case 'Number':
      return Number(value);
    case 'string':
    case 'String':
      return String(value);
  }
}

export default helper(cast);
