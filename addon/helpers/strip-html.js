import { helper } from '@ember/component/helper';

export function stripHtml([text]/*, hash*/) {
  var tags = /<(script|style).*?<\/(script|style)>|<[^>]*>/gi;
  return text.replace(tags, '');
}

export default helper(stripHtml);