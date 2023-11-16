<?php include("includes/a_config.php"); ?>
<!DOCTYPE html>
<html>

<head>
    <?php include("includes/head-tag-contents.php"); ?>
</head>

<body>
    <?php include("includes/navigation.php"); ?>
    <main>
        <!-- Portfolio Section-->
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="assets/img/portfolio/612847.jpg" class="d-block">
                </div>
                <div class="carousel-item">
                    <img src="assets/img/portfolio/612847.jpg" class="d-block">
                </div>
                <div class="carousel-item">
                    <img src="assets/img/portfolio/612847.jpg" class="d-block">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <!-- Cards -->
        <div class="row m-2">
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img class="card-img-top" src="./assets/img/portfolio/popo.jpg" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">John Doe</h4>
                        <p class="card-text">Some example text.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img class="card-img-top" src="./assets/img/portfolio/popo.jpg" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">John Doe</h4>
                        <p class="card-text">Some example text.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img class="card-img-top" src="./assets/img/portfolio/popo.jpg" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">John Doe</h4>
                        <p class="card-text">Some example text.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img class="card-img-top" src="./assets/img/portfolio/popo.jpg" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">John Doe</h4>
                        <p class="card-text">Some example text.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img class="card-img-top" src="./assets/img/portfolio/popo.jpg" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">John Doe</h4>
                        <p class="card-text">Some example text.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img class="card-img-top" src="./assets/img/portfolio/popo.jpg" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">John Doe</h4>
                        <p class="card-text">Some example text.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr class="table-dark">
                        <th>#</th>
                        <th>Firstn</th>
                        <th>Last</th>
                        <th>Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@mfat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>The Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr class="table-primary">
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@mfat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>The Bird</td>
                        <td>@twitter</td>
                    </tr>
            </table>
        </div>
    </main>

    <?php include("includes/footer.php"); ?>

</body>

</html>