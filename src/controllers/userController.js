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
  renderForm(cb) {
    this.createNav(app => {
      this.views.renderForm(app, cb);
    });
  },
  renderHero() {
    this.createNav(app => {
      this.views.renderHero(app);
    });
  }
};
