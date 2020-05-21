import React from 'react';
import { styled } from '@storybook/theming';
import { css } from '@storybook/theming';
import chroma from 'chroma-js';
import { getComputedTokenValue, prettifyToken, getRawTokenValue } from './Utils';

export function FontSample (props) {
  const style = {...props.styles};
  return <div style={style}>{props.text}</div>;
}

export function FontSamples (props) {
  return props.samples.map((sample, index) =>
    <FontSample key={index} {...sample} />
  )
}

/* *
* Display a square div of a given size.
*
* Usage: <SwatchSquare size={'16px'} />
*
* @class SwatchSquare
*/
const SwatchSquare = styled.div`
  /**
    The height/width of the square.
 
    @property size
    @type {String}
  */
  ${props =>
    props.size &&
    css`
      width: ${props.size};
      height: ${props.size};
      paddingBottom: '16px';
      border: ${props.showBorder ? "1px solid black" : "none"};
    `}
`;

// To match the swatches in figma for color and border
const SwatchLabel = styled.div({
  fontWeight: 'bold',
  fontSize: '14.222px',
  lineHeight: '20px',
  paddingBottom: '4px'
})

const SwatchDetails = styled.div({
  fontSize: '14.222px',
  lineHeight: '20px',
})

// A styled square to demonstrate spacing value
export const SpacingSwatch = styled(SwatchSquare)`
  background-color: aliceblue;
  border: 1px solid steelblue;
`;

export function ColorSwatch(props) {
  let label1, label2, token;
  if (props.roleToken) {
    token = props.roleToken
    label1 = props.roleToken;
    label2 = prettifyToken(getRawTokenValue(props.roleToken))
  } else if (props.colorToken) {
    token = props.colorToken
    label1 =  prettifyToken(props.colorToken);
  }
  let color = chroma(getComputedTokenValue(token, "color"));
  let needsBorder = chroma.contrast(color, "white") < 2;
  return (
    <div style={{paddingRight:"32px"}}>
      <SwatchSquare
        size={"77px"}
        showBorder={needsBorder}
        style={{
          backgroundColor: `rgb(var(${token}))`
        }}
      />
      <SwatchLabel>{label1}</SwatchLabel>
      <SwatchLabel>{label2}</SwatchLabel>
      <SwatchDetails>{color.hex()}</SwatchDetails>
    </div>
  );
}