import user from './models/userModel';
import controller from './controllers/userController';
import view from './views/homePage';

window.onload = () => {
  controller.setModel(user);
  controller.setViews(view);
  controller.renderHero();

  const app = document.getElementById('app');
  app.addEventListener('click', event => {
    console.log(event);
    if (event.target.localName === 'button' && event.target.id === 'join') {
      controller.renderForm(() => {
        const form = document.getElementById('formAction');
        form.addEventListener('submit', event => {
          event.preventDefault();
          console.log(event.target[0].value);
        });
      });
    }
    if (event.target.localName === 'a' && event.target.id === 'logo') {
      controller.renderHero();
    }
  });
};
