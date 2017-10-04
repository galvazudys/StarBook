import user from './models/userModel';
import controller from './controllers/userController';
import view from './views/homePage';

window.onload = () => {
  controller.setModel(user);
  controller.setViews(view);
  controller.createNav();
};
