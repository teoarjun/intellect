import {Dimensions, Platform} from 'react-native';

/* istanbul ignore next */
const KEYBOARD_BEHAVIOUR = Platform.OS === 'ios' ? 'padding' : 'height';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
/* istanbul ignore next */
const SCREEN_WIDTH = WIDTH < HEIGHT ? WIDTH : HEIGHT;
/* istanbul ignore next */
const SCREEN_HEIGHT = WIDTH < HEIGHT ? HEIGHT : WIDTH;
/* istanbul ignore next */
const IS_PORTRAIT = WIDTH < HEIGHT ? true : false;

let GRADIENT_HEIGHT = 197;

/* istanbul ignore next */
if (HEIGHT < 600) {
  GRADIENT_HEIGHT = 50;
} else if (HEIGHT > 900) {
  GRADIENT_HEIGHT = 250;
}

let GRADIENT_HEIGHT_LANDSCAPE = 100;

/* istanbul ignore next */
if (WIDTH < 600) {
  GRADIENT_HEIGHT_LANDSCAPE = 50;
} else if (WIDTH > 900) {
  GRADIENT_HEIGHT_LANDSCAPE = 250;
}

const THERAPY_ICON_SIZE = 80;
const THERAPY_ICON_SIZE_LANDSCAPE = 50;
const DRAWER_ICON_SIZE = 23;
const DRAWER_FONT_SIZE = 18;

export {
  DRAWER_FONT_SIZE,
  DRAWER_ICON_SIZE,
  WIDTH,
  HEIGHT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  IS_PORTRAIT,
  GRADIENT_HEIGHT,
  GRADIENT_HEIGHT_LANDSCAPE,
  THERAPY_ICON_SIZE,
  THERAPY_ICON_SIZE_LANDSCAPE,
  KEYBOARD_BEHAVIOUR,
};
