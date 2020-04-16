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
  return(
    <span>{getComputedTokenValue(props.token, props.property, props.elementClass)}</span>
  )
}


export function getThemeStyleSheets() {
  return [...document.styleSheets].filter(styleSheet => {
    return styleSheet.href && styleSheet.href.indexOf('themes') > 0;
  });
}

export function getActiveThemeStyleSheet() {
  return getThemeStyleSheets().find(stylesheet => {
    let isAlternate = stylesheet.ownerNode && stylesheet;
    return !stylesheet.ownerNode.relList.contains('alternate');
  });
} 

export function getComputedTokenValue(token, property, elementClass) {
  let tempDiv = document.createElement("DIV");
  tempDiv.classList.add(elementClass);
  document.body.append(tempDiv);
  if (token.indexOf("color") < 0) {
    tempDiv.style[property] = `rgb(var(${token}))`;
  } else {
    tempDiv.style[property] = `var(${token})`;
  }
  debugger;
  let tokenValue = window.getComputedStyle(tempDiv)[property];
  document.body.removeChild(tempDiv);
  return tokenValue;
}

export function getRawTokenValue(token) {
  let activeTheme = getActiveThemeStyleSheet();
  let rule = [...activeTheme.cssRules].find(
    rule => rule.selectorText === ":root"
  );
  let matcher = new RegExp(`${token}:\\s*([\\w\\(\\)-]+)`);
  let matches = rule.cssText.match(matcher);
  let tokenValue = matches && matches[1];
  return tokenValue || "";
}

export function prettifyToken(token) {
  function cleanVarName(string) {
    return string
      .replace("var(", "")
      .replace("--color-", "")
      .replace(")", "")
      .replace(/-/g, " ");
  }
  function titleCase(string) {
    return string.split(' ').map(s => s && s[0].toUpperCase() + s.slice(1)).join(' ');
  }
  return titleCase(cleanVarName(token)).trim();
}