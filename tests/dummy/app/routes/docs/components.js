import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model, transition) {
    this._super(controller, model);
    controller.set('targetName', transition.to.localName);
  },

  actions: {
    willTransition(transition) {
      this.controller.set('targetName', transition.to.localName);
    }
  }
});
