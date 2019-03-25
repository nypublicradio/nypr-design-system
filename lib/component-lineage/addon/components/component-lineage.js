import Component from '@ember/component';
import layout from '../templates/components/component-lineage';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { A } from '@ember/array';
import ComponentManifest from 'dummy/component-manifest';

function makeSafeLinks(key) {
  function safeLinks() {
    let routes = [];
    let templates = this.get(key) || [];
    templates.forEach(template => {
      try {
        let route = `docs.${template.replace('/', '.')}`;
        this.router.urlFor(route);
        routes.push({
          label: template,
          value: route,
        })
      } catch(e) {/* */}
    })
    return A(routes);
  }

  return [key, safeLinks];
}

export default Component.extend({
  layout,
  router: inject(),

  name: null,
  prefix: null,

  manifest: computed('name', function() {
    return ComponentManifest[`${this.prefix}/${this.name}`];
  }),

  children: computed(...makeSafeLinks('manifest.children')),
  parents: computed(...makeSafeLinks('manifest.parents')),
});
