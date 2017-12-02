
import { css, keyframes } from 'styled-components';

export const appearKeyframes = keyframes`
    from {
        opacity: 0;
		transform: scale(0);
	}

	to {
        opacity: 1;
		transform: scale(1);
	}
`;

export const animationDefaults = {
    keyframes: appearKeyframes,
    duration: '250ms',
    timingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
    delay: '0s',
    iterationCount: '1',
    direction: 'alternate',
    transformOrigin: 'top left'
};

export const animate = ({
    keyframes = animationDefaults.keyframes,
    duration = animationDefaults.duration,
    timingFunction = animationDefaults.timingFunction,
    delay = animationDefaults.delay,
    direction = animationDefaults.direction,
    iterationCount = animationDefaults.iterationCount,
    transformOrigin = animationDefaults.transformOrigin
} = {}) => css`
    transform-origin: ${ transformOrigin };
    animation-name: ${ keyframes };
    animation-duration: ${ duration };
    animation-timing-function: ${ timingFunction };
    animation-delay: %{ delay };
    animation-direction: ${ direction };
    animation-iteration-count: ${ iterationCount };
`;

export const appear = options => css`
    ${ animate({ 
        ...options,
        keyframes: appearKeyframes
    }) };
`;

export const transitionDefaults = {
    property: 'all',
    duration: '450ms',
    timingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
    delay: '0s'
};

export const transition = ({
    property = transitionDefaults.property,
    duration = transitionDefaults.duration,
    timingFunction = transitionDefaults.timingFunction,
    delay = transitionDefaults.delay
} = {}) => css`
    transition: ${ property } ${ duration } ${ timingFunction } ${ delay };
`;
