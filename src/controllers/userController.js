export default {
  model: {},
  views: {},
  setModel(model) {
    this.model = model;
  },
  setViews(view) {
    this.views = view;
  },
  createNav() {
    this.views.createHeader();
  }
};
