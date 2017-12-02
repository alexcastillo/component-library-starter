
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import * as colors from '../styles/colors';
import { transition } from '../styles/animations';

const Container = styled.div`
    min-width: 80px;
    display: flex;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${ ({ stretch }) => stretch && 'flex: 1' };
    ${ transition() };
`;

const buttonStylesByKind = {
    raised: css`
        border: 0;
        color: ${ colors.white };
        background-color: ${ colors.primary };
        box-shadow: 0 0 2px 0 ${ colors.neutralMedium },
                    0 2px 2px 0 ${ colors.neutralMedium };

        &:focus {
            outline: none;
            box-shadow: 0 0 2px 0 ${ colors.neutralMedium },
                        0 2px 2px 0 ${ colors.neutralMedium };
        }

        &:hover {
            background-color: ${ colors.primaryHover };
            box-shadow: 0 0 8px 0 ${ colors.neutralLight }, 
                        0 8px 8px 0 ${ colors.neutralMedium };
        }

        &:active {
            background-color: ${ colors.primaryActive };
            box-shadow: 0 0 2px 0 ${ colors.neutralMedium },
                        0 2px 2px 0 ${ colors.neutralMedium };
        }

        &:disabled {
            background-color: ${ colors.neutralLight };
            color: ${ colors.neutralDark };
            box-shadow: none;
        }
    `,
    flat: css`
        border: 0;
        color: ${ colors.primary };
        background-color: ${ colors.white };

        &:focus {
            outline: none;
        }

        &:hover {
            background-color: ${ colors.neutralLight };
        }

        &:active {
            background-color: ${ colors.neutralMedium };
        }

        &:disabled {
            background-color: ${ colors.white };
            color: ${ colors.neutralDark };
            box-shadow: none;
        }
    `
};

const buttonStyles = css`
    height: 32px;
    font-size: 13px;
    font-weight: 500;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    ${ transition() };
    ${ ({ disabled }) => !disabled && 'cursor: pointer' };
    ${ ({ kind }) => kind && buttonStylesByKind[kind] };
`;

const defaultKind = 'raised';
const isDefault = ({ kind }) => kind && kind === defaultKind;

const ButtonElement = styled.button`
    ${ buttonStyles };
    ${ ({ stretch }) => stretch && 'flex: 1' };
    border-radius: 2px;
    padding: 0 36px;
    z-index: 1;
`;

const Text = styled.span`
    position: relative;
    display: inline-flex;
`;

/**
 * Renders a <button> element with custom props.
 */
class Button extends Component {

    render () {
        
        const {
            name,
            kind,
            type,
            disabled,
            onClick,
            stretch,
            children,
            className,
            ...otherProps,
        } = this.props;


        const iconsColor = disabled 
            ? 'gray400' 
            : isDefault({ kind }) ? 'white' : 'blue';

        return (
            <Container stretch= { stretch }
                className={ `button ${ className }` }>
                <ButtonElement
                    className={ `button-label` }
                    name={ name }
                    kind={ kind }
                    type={ type }
                    disabled= { disabled }
                    stretch= { stretch }
                    onClick={ onClick }
                    { ...otherProps }>
                    <Text className={ `button-text` }>
                        { children }
                    </Text>
                </ButtonElement>
            </Container>
        );
    }
}

Button.propTypes = {
    name: PropTypes.string,
    kind: PropTypes.oneOf([
        'raised',
        'flat'
    ]),
    type: PropTypes.oneOf([
        'button',
        'submit'
    ]),
    disabled: PropTypes.bool,
    stretch: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired,
    className: PropTypes.string
};

Button.defaultProps = {
    type: 'button',
    kind: defaultKind,
    disabled: false,
    stretch: false,
    className: ''
};

export default Button;
