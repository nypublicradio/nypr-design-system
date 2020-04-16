import React from 'react';
import { SpacingSwatch } from './Swatches';
import { getComputedTokenValue } from './Utils';

function SpacingTableRow(props) {      
  return <tr>
      <td>Space {props.number} </td>
        {props.classes.map((spacingClass) => 
        <>
            <td className={'storybook-' + spacingClass}>
                <SpacingSwatch className={`space${props.number}`} size={`var(--space-${props.number})`} />
            </td>
            <td>
            {getComputedTokenValue(`--space-${props.number}`, 'width', 'storybook-' + spacingClass)}
            </td>
        </>
        )}
    </tr>
}

export function SpacingTable() {
    const spacingRows = 11;
    const spacingClasses = ['Compact', 'Default', 'Loose'];

    return <div>
    <table className={'storybook-spacing-table'}>
      <tbody>
      <tr>
        <th>Token</th>
        {spacingClasses.map((spacingClass) => <><th>{spacingClass}</th><th>Size</th></>)}
      </tr>
      {Array.from(Array(spacingRows).keys()).map(
        (n) => <SpacingTableRow number={n+1} classes={spacingClasses} key={n} />)
      }        
      </tbody>
    </table>
  </div>

}
