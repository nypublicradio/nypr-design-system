import { helper } from '@ember/component/helper';

export function dictionaryLength(params/*, hash*/) {
  if (!params || !params[0]) {
    return 0;
  }
  return Object.keys(params[0]).length;
}

export default helper(dictionaryLength);
