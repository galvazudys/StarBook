export default {
  app: '',
  setApp() {
    this.app = document.getElementById('app');
  },
  createHeader(callback) {
    app.innerHTML = '';
    app.innerHTML = `<nav id="nav" class="navbar bg-info navbar-expand-lg navbar-light">
        <a id="logo" class="navbar-brand" href="#">Bro)(Talks</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Friends</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
            </li>
        </ul>
        </div>
        <button id="join" class="btn  .col-md-3 .ml-md-auto">Join Now!</button>
    </nav>
    </div>
    `;
    console.log(app);
    callback(app);
  },
  renderHero(app) {
    app.innerHTML += `    <div id="hero">
    <div class="talk-bubble tri-right left-in">
        <div class="talktext">
        <p>Once i been like you,and then I <span id="bro">BRO)(TALK....</span></p>
    </div>
</div>`;
  },
  renderForm() {
    app.innerHTML += `
    <div class="container">
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-check">
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input">
        Check me out
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
  `;
  }
};
