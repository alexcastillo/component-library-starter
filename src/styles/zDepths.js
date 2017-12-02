
import { gray100 } from './colors';

export const zDepths = {
    '0': '',
    '1': `box-shadow: 0 0 0 1px ${ gray100 }`,
    '2': 'box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.24), 0 2px 2px 0 rgba(0, 0, 0, 0.12)',
    '3': 'box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    '4': 'box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16), 0 3px 10px rgba(0, 0, 0, 0.23)',
    '5': 'box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24)',
    '6': 'box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)',
    '7': 'box-shadow: 0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)',
    '8': 'box-shadow: 0 19px 60px rgba(0, 0, 0, 0.3), 0 15px 20px rgba(0, 0, 0, 0.22)'
};

export default zDepths;
