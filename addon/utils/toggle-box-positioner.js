import defaultCalculatePosition from 'ember-basic-dropdown/utils/calculate-position';

const ARROW_WIDTH = 16;

export default function calculatePosition(trigger, content, _destination, ref) {
  let icon = trigger.querySelector('.o-icon--caret svg')
  if (icon) {
    trigger = icon
  }
  arguments[0] = trigger;

  // Use the default positioner, but using the ^ arrow as the trigger point to align by
  let obj = defaultCalculatePosition(...arguments)

  let {
    left: triggerLeft,
    width: triggerWidth,
  } = trigger.getBoundingClientRect();

  let {
    width: contentWidth,
  } = content.getBoundingClientRect();

  let { verticalPosition, horizontalPosition } = obj;
  let bottomOffset = (verticalPosition == 'above' ? -10 : 10);

  // Set these attributes on the dropdown object so we can put the tab in the right spot
  content.setAttribute('data-v-pos', verticalPosition);
  content.setAttribute('data-h-pos', horizontalPosition);

  obj['style']['top'] = obj['style']['top'] + bottomOffset;

  if (horizontalPosition == 'left') {
    obj['style']['left'] = Math.abs(triggerLeft - (contentWidth / 3) - (ARROW_WIDTH / 2) + (triggerWidth / 2) + 1);
  }
  else if (horizontalPosition == 'center') {
    obj['style']['left'] = Math.abs(triggerLeft - contentWidth / 2  + (triggerWidth / 2));
  }

  // Apply ember-basic-dropdown's repositioning
  ref.dropdown.applyReposition(trigger, content, obj)

  return obj;
}
