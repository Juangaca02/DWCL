<nav class="navbar navbar-expand-sm navbar-dark bg-dark" id="mainNav">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="./assets/img/portfolio/usuario.png" width="50px" alt="Logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link" href="">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Link</a>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="text" placeholder="Search">
                <button class="btn btn-primary" data-toggle="modal" data-target="#loginModal">Login</button>
            </form>
        </div>
    </div>
</nav>
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="loginModalLabel">Iniciar sesión</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Nombre: <input type="text">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            </div>
        </div>
    </div>
</div>
<ul class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Pictures</a></li>
    <li><a href="#">Summer 15</a></li>
    <li>Italy</li>
</ul>