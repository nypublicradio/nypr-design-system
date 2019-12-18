import React from 'react';
import { STORY_RENDERED } from '@storybook/core-events';
import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'lineage';
const PARAM_KEY = 'lineage';
const PANEL_ID = `${ADDON_ID}/panel`;

const LineagePanel = () => {
  const options = useParameter(PARAM_KEY);
  console.log(options);
  const name = options && options.name;
  if (!name) {
    return <div>No name parameter set for the lineage addon. This story may not be a component.</div>;
  }
  const manifest = options && options.manifest;
  const lineage = manifest && manifest[name];
  if (!lineage) {
    return <div>No lineage data found for <code>{name}</code>.</div>;
  }

  const parents = lineage.parents;
  const children = lineage.children;
  return(
    <div>
        <h2><code>{name}</code> is used in:</h2>
        <ul>
        {parents.map((value, index) => {
            return <li key={index}>{value}</li>
        })}
        </ul>
        <h2><code>{name}</code> uses:</h2>
        <ul>
        {children.map((value, index) => {
            return <li key={index}>{value}</li>
        })}
        </ul>
    </div>
    );
}

addons.register(ADDON_ID, api => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <LineagePanel />
    </AddonPanel>
  );
  const title = 'Lineage';

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
    paramKey: PARAM_KEY,
  });
});