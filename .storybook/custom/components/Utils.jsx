import React from 'react';
import { styled } from '@storybook/theming';

/**
 * Display the value of a css custom property (token).
 * 
 * Usage: <TokenValue name={'--space-2'} property={'width'} />
 * 
 * For example when you ask for the `width` of `--space-2` this will 
 * display `8px`, or if you ask for the `color of `--color-primary` it 
 * might say `rgba(255,0,0,0)`.
 *
 * @class TokenValue
 */
export function TokenValue (props) {
  /**
    The name of the token.
    
    @property token
    @type {String}
  */
  /**
    The CSS property we want the value of.
    
    @property property
    @type {String}
  */
  let tempDiv = document.createElement('DIV');
  tempDiv.classList.add(props.elementClass);
  document.body.append(tempDiv);
  tempDiv.style[props.property] = `var(${props.token})`;
  let tokenValue = window.getComputedStyle(tempDiv)[props.property];
  document.body.removeChild(tempDiv);
  return(
    <span>{tokenValue}</span>
  )
}