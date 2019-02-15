import Component from '@ember/component';
import layout from '../templates/components/component-lineage';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';
import ComponentManifest from 'dummy/component-manifest';

export default Component.extend({
  layout,

  manifest: computed('name', function() {
    return ComponentManifest[this.name];
  }),

  children: reads('manifest.children'),
  parents: reads('manifest.parents'),
});
