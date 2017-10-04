export default {
  model: {},
  views: {},
  setModel(model) {
    this.model = model;
  },
  setViews(view) {
    this.views = view;
  },
  createNav(cb) {
    this.views.createHeader(cb);
  },
  renderForm() {
    this.views.renderForm();
  },
  renderHero(cb) {
    this.views.renderHero(cb);
  }
};
