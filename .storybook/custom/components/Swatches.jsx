import React from 'react';
import { styled } from '@storybook/theming';

export function FontSample (props) {
  const style = {...props.styles};
  return <div style={style}>{props.text}</div>;
}

export function FontSamples (props) {
  return props.samples.map((sample, index) =>
    <FontSample key={index} {...sample} />
  )
}

// To match the swatches in figma for color and border
const SwatchLabel = styled.div({
  fontWeight: 'bold',
  fontSize: '14.222px',
  lineHeight: '20px',
})
const SwatchDetails = styled.div({
  fontSize: '14.222px',
  lineHeight: '20px',
})
const SwatchSquare = styled.div({
  width: '77px',
  height: '77px',
})

// TEST SWATCH RED ONLY
export function ColorSwatch(props) { 
  const {name, token}
  return <div>
    <SwatchSquare style={{backgroundColor: 'red'}} /> 
    <SwatchLabel>RED</SwatchLabel>
    <SwatchSquare>#ff0000</SwatchSquare>
  </div>
}