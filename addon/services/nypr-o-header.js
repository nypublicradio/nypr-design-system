import Service from '@ember/service';
import { observer } from '@ember/object';
import { inject } from '@ember/service';

/**
  Backing service for arbitrary variables based on UI state of the `nypr-o-header` component.

  The `addRule` API specifies values to be yielded by the header based on its `floating` or `resting `state`.

  Rulesets are namespaced by a route identifier and updated when the header's `outOfViewport` state changes or when the router's `currentRouteName` changes.

  You only need to specify a truthy value for a state you want a value switched on for. If the key is undefined or falsey for the inverse state, it will be claeared for you. For instance, if you need `nav` to be true when `resting`, but false when `floating`, you only need to specify nav in the `resting` state. You don't need to specify a corresponding `nav: false`.

  Usage:
  ```js
  header: inject('nypr-o-header'),

  beforeModel() {
    this.header.addRule('route.name', {
      resting: {
        nav: true,
        search: true,
      },
      floating: {
        donate: true,
        share: true,
      }
    });
  }
  ```

  @class `nypr-o-header`
*/
export default Service.extend({
  router: inject(),

  init() {
    this._super(...arguments);
    this.set('rulesets', {});
  },

  /**
    Rulesets map. Keys are route names and values are an object with a set of rules for `resting` and `floating` states.

    @field rulesets
    @type {Object}
  */
  // rulesets: null,

  /**
    Header component calls this when it is initialized so the service can access its state.

    @method register
    @param {Component} component
    @return {void}
  */
  register(component) {
    this.set('component', component);
  },

  /**
    Add a set of rules, or values, to be yielded out by the header for a given route and floating/resting state combination.

    @method addRule
    @param {String} route Dotted route name identifier, e.g. `article.gallery`
    @param {Object} ruleset Hash of values to be applied to the header when the given route is entered, e.g. `{floating: { foo: true }, resting: {bar: true}}`. `floating` and `resting` keys are required
    @return {void}
  */
  addRule(route, ruleset = {}) {
    if (!ruleset.resting) {
      ruleset.resting = {};
    }
    if (!ruleset.floating) {
      ruleset.floating = {};
    }
    this.rulesets[route] = ruleset;

    this._updateRules();
  },

  observer: observer('component.outOfViewport', 'router.currentRouteName', function() {
    this._updateRules()
  }),

  /**
    Looks at the current route and `outOfViewport` state to determine which, if any, rulesets to apply to the registered header component.

    @method _updateRules
    @return {void}
  */
  _updateRules() {
    if (!this.component) {
      return;
    }
    let { currentRouteName:route } = this.router;
    let { outOfViewport:isFloating } = this.component;

    let ruleset = this.rulesets[route];
    if (ruleset) {
      let rules = ruleset[isFloating ? 'floating' : 'resting'];

      // replace rules wholesale to keep rule management sane and "truty only"
      this.component.setProperties({rules});
    }
  },
});
