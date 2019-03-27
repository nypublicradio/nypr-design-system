import Component from '@ember/component';
import layout from '../templates/components/component-lineage';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { A } from '@ember/array';
import ComponentManifest from 'dummy/component-manifest';
import RouteOverrides from 'dummy/component-route-overrides';

/**
  Render out the component "lineage" for a given component `name`.
  The lineage is defined as the components used in the give template, i.e. `children`,
  and where this component is itself invoked, i.e. `parents`.

  @class component-lineage
*/
export default Component.extend({
  layout,
  router: inject(),

  /**
    Dasherized component name to render out
    @argument name
    @type {String}
  */
  name: null,

  /**
    A hash of `parents` and `children` component names that were found statically at build-time

    @accessor manifest
    @type {Object}
  */
  manifest: computed('name', function() {
    return ComponentManifest[this.name];
  }),

  /**
    The list of components found on the template of the component with the given `name`

    @accessor children
    @type {Array<Object{label, value}>} Array of objects that can be used to render links
  */
  children: computed(...makeSafeLinks('manifest.children')),
  parents: computed(...makeSafeLinks('manifest.parents')),
});

const ATOMIC_REGEX = /nypr-(.)-.*/;
const ATOMIC_ROUTES = {
  a: 'atoms',
  m: 'molecules',
  o: 'organisims',
}

/**
  Generate a curried function that returns a valid computed property signature.

  The curried function closes over the passed in key path to produce a list of valid
  dummy application routes that can be used in `link-to` components on the template

  @function makeSafeLinks
  @param {String} key The keypath from which to pull a list of component names
  @return {Array<String, Function>} The original `key` and a function to compute the value of valid routes
*/
function makeSafeLinks(key) {
  function safeLinks() {
    let routes = [];
    let templates = this.get(key) || [];
    templates.forEach(template => {
      try {
        let route = RouteOverrides[template];

        if (!route) {
          let [, match] = ATOMIC_REGEX.exec(template);
          route = `docs.${ATOMIC_ROUTES[match]}.${template}`;
        }
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
