import Component from '@ember/component';
import layout from '../templates/components/component-lineage';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
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
    return routes;
  }

  return [key, safeLinks];
}

export default Component.extend({
  layout,
  router: inject(),

  manifest: computed('name', function() {
    return ComponentManifest[this.name];
  }),

  children: computed(...makeSafeLinks('manifest.children')),
  parents: computed(...makeSafeLinks('manifest.parents')),
});
