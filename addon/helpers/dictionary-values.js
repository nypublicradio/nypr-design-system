import { helper } from '@ember/component/helper';

export function dictionaryValues(params/*, hash*/) {
  if (!params || !params[0]) {
    return [];
  }
  return Object.values(params[0]);
}

export default helper(dictionaryValues);
