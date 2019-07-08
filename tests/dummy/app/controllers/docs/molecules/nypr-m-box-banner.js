import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    toggleCloseFn() {
      if (this.close) {
        // clearing the checkbox
        this.set('close', null);
      } else {
        // setting a close function to be passed into the box banner component
        this.set('close', () => this.set('close', null));
      }
    }
  }
});
