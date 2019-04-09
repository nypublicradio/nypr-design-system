/**
  Positions the dropdown on the right side of the trigger, center-aligned.

  @function positionRightCenter
  @param {HTMLElement} trigger
  @param {HTMLElement} content
  @param {Number} rightOffset Specify an optional offset from the right edge
*/
export function positionRightCenter(trigger, content, rightOffset = 0) {
  if (typeof rightOffset !== 'number') {
    rightOffset = 0;
  }
  let { top, left, width, height } = trigger.getBoundingClientRect();
  let { height: contentHeight } = content.getBoundingClientRect();
  let style = {
    left: left + width + rightOffset,
    top: top + window.pageYOffset + (height / 2) - (contentHeight / 2)
  };

  return { style };
}

/**
  Positions the dropdown on the top side of the trigger, center-aligned.

  @function positionTopCenter
  @param {HTMLElement} trigger
  @param {HTMLElement} content
  @param {Number} topOffset Specify an optional offset from the top edge
*/
export function positionTopCenter(trigger, content, topOffset = 0) {
  if (typeof topOffset !== 'number') {
    topOffset = 0;
  }
  let { top, left: triggerLeft, width: triggerWidth } = trigger.getBoundingClientRect();
  let { height: contentHeight, width: contentWidth } = content.getBoundingClientRect();

  let offset = Math.abs(triggerWidth - contentWidth) / 2;

  let style = {
    left: contentWidth > triggerWidth ? triggerLeft - offset : triggerLeft + offset,
    top: (top + window.pageYOffset) - contentHeight - topOffset,
  };

  return { style };
}

/**
  Positions the dropdown on the bottom side of the trigger, center-aligned.

  @function positionBottomCenter
  @param {HTMLElement} trigger
  @param {HTMLElement} content
  @param {Number} bottomOffset Specify an optional offset from the bottom edge
*/
export function positionBottomCenter(trigger, content, bottomOffset = 0) {
  if (typeof bottomOffset !== 'number') {
    bottomOffset = 0;
  }
  let { top, left: triggerLeft, width: triggerWidth, height: triggerHeight } = trigger.getBoundingClientRect();
  let { width: contentWidth } = content.getBoundingClientRect();

  let offset = Math.abs(triggerWidth - contentWidth) / 2;

  let style = {
    left: contentWidth > triggerWidth ? triggerLeft - offset : triggerLeft + offset,
    top: (top + window.pageYOffset) + triggerHeight + bottomOffset,
  };

  return { style };
}
