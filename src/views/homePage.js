export default {
  createHeader() {
    const app = document.getElementById('app');
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
            <a class="nav-link" href="#">friends</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
            </li>
        </ul>
        </div>
        <button id="join" class="btn  .col-md-3 .ml-md-auto">Join Now!</button>
    </nav>`;
  }
};
