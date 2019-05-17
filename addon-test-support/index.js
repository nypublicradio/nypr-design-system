import { waitUntil } from '@ember/test-helpers';


/**
  Looks for the `.o-progress` element and checks if the `.value` attribute is greater than 0.
  @private
  @function findProgressBar
  @param owner {TestContext} The value of `this` in a test context
  @return {Boolean}
*/
function findProgressBar(owner) {
  let progress = owner.element.querySelector('.o-progress');
  return progress && progress.value > 0;
}

/**
  Triggers the `NyprOHeader` component's floating state. Measures and manipulate the DOM in order to set a proper window height so that the floating state can be triggered by a native scroll event.

  Returns a `reset` function that is curried over at run time and can be called to revert any DOM updates that are made.

  @function scrollPastHeader
  @param owner {TestContext} The `this` value of the current test
  @param testForFloatingState {Function} Passed to `waitUntil` as a callback and should return true if header is determined to be "floating". This will default to `findProgressBar`.
  @return reset {Function} Curried function that will reset CSS tweaks that allow for floating header testing
*/
export async function scrollPastTarget(owner, target, testForFloatingState) {
  if (!testForFloatingState) {
    testForFloatingState = findProgressBar;
  }
  const testingContainer = document.querySelector('#ember-testing-container');

  // CSS can play factor. without styles, this element is taller than the window
  // with styles, it's rather short, so use the larger of the two.
  // double them so there's enough space to scroll past the element and trigger the progress bar
  const TARGET_Y = owner.element.querySelector(target).offsetTop + window.innerHeight;
  const WINDOW_HEIGHT = window.innerHeight * 2;
  const HEIGHT = TARGET_Y > WINDOW_HEIGHT ? TARGET_Y : WINDOW_HEIGHT;

  const OLD_POSITION = testingContainer.style.position;

  function reset() {
    testingContainer.style.height = '';
    testingContainer.style.position = OLD_POSITION;
    testingContainer.scrollTo(0, 0);
  }

  testingContainer.style.height = `${HEIGHT}px`;
  testingContainer.style.position = 'relative';

  window.scrollTo(0, HEIGHT);

  await waitUntil(() => testForFloatingState(owner), {timeout: 2000})

  return reset;
}

export async function scrollPastHeader(owner, testForFloatingState) {
  return scrollPastTarget(owner, '.c-main-header', testForFloatingState);
}
