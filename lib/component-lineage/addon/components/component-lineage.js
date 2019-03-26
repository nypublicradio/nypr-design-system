import Component from '@ember/component';
import layout from '../templates/components/component-lineage';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { A } from '@ember/array';
import ComponentManifest from 'dummy/component-manifest';

export default Component.extend({
  layout,
  router: inject(),
  name: null,
  manifest: computed('name', function() {
    return ComponentManifest[this.name];
  }),
  children: computed(...makeSafeLinks('manifest.children')),
  parents: computed(...makeSafeLinks('manifest.parents')),
});

const ATOMIC_REGEX = /nypr-(.)-.*/;
const ATOMIC_ROUTES = {
  a: 'atoms',
  m: 'molecules',
  o: 'organisims',
}

function makeSafeLinks(key) {
  function safeLinks() {
    let routes = [];
    let templates = this.get(key) || [];
    templates.forEach(template => {
      try {
        let [, match] = ATOMIC_REGEX.exec(template);
        let route = `docs.${ATOMIC_ROUTES[match]}.${template}`;
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
