import Controller from '@ember/controller';

import {
  positionRightCenter,
  positionTopCenter,
  positionBottomCenter,
} from '../../../utils/toggle-box-positions';

const POSITIONS = {
  positionRightCenter,
  positionTopCenter,
  positionBottomCenter,
};

export default Controller.extend({
  POSITIONS,
});
