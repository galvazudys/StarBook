import user from './models/userModel';
import controller from './controllers/userController';
import view from './views/homePage';
import loginController from './controllers/loginUserController';
import loginUser from './models/loginUserModel';
import hash from 'password-hash';

window.onload = () => {
  controller.setModel(user);
  controller.setViews(view);
  controller.renderHero();
  loginController.setModel(loginUser);
  loginController.setViews(view);

  const app = document.getElementById('app');
  app.addEventListener('click', event => {
    console.log(event);
    if (event.target.localName === 'button' && event.target.id === 'join') {
      controller.renderForm(() => {
        const form = document.getElementById('formAction');
        form.addEventListener('submit', event => {
          event.preventDefault();
          const email = event.target[0].value;
          const password = event.target[1].value;
          console.log(password);
          const hashedPass = hash.generate(password);
          console.log(hashedPass);
        });
      });
    }
    if (event.target.localName === 'a' && event.target.id === 'logo') {
      controller.renderHero();
    }
  });
};
