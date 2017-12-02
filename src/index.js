
import components from './components/componentsIndex';
import * as allAnimations from './styles/animations';
import * as allColors from './styles/colors';
import allZDepths from './styles/zDepths';

export const Button = components.Button.component;

export const colors = allColors;
export const animations = allAnimations;
export const zDepths = allZDepths;

export default {
    animations,
    colors,
    zDepths,
    ...components
};
