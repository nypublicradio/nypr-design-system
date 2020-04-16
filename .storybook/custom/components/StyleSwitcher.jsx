import React from 'react';
import { getThemeStyleSheets } from './Utils';

export default function StyleSwitcher (props) {
  return <div>
    {getThemeStyleSheets().map((s) => {<button>{s.href}</button>})}
  </div>
}
