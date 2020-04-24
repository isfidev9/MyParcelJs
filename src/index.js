window.onload = function(){

// import app script
import('./app').then(function (app) {


	// app.welcome();
	// template(this using, this content)
	app.template('bootstrap',
	`<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
		<div class="container">
		  <a class="navbar-brand text-warning" href="#">
		  <i class="fa fa-newspaper-o"></i> News Media View</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse ml-3" id="navbarNavAltMarkup">
		    <div class="navbar-nav">
		      <a class="nav-item nav-link active" href="#"><i class="fa fa-home"></i> Home</a>
		      <a class="nav-item nav-link" href="#"><i class="fa fa-phone"></i> Contact</a>
		      <a class="nav-item nav-link" href="#"><i class="fa fa-info"></i> About</a>
		    </div>
		  </div>
		</div>
	</nav>

	<div class="container mt-5 mb-5">
		<div class="row mb-5">
			<div class="col-md-4 mb-4">
				<div class="card">
				  <img src="https://www.freelogoservices.com/blog/wp-content/uploads/laptop-header-picture-id910806154.jpg" class="card-img-top" height="250" alt="images">
				  <div class="card-body">
				    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  </div>
				</div>
			</div>

			<div class="col-md-4 mb-4">
				<div class="card">
				  <img src="https://www.dynamique-entreprendre.com/wp-content/uploads/2018/08/agence-digitale-690x433.jpg" class="card-img-top" height="250" alt="images">
				  <div class="card-body">
				    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  </div>
				</div>
			</div>

			<div class="col-md-4 mb-4">
				<div class="card">
				  <img src="https://static.cdn-cdpl.com/source/18899/coding-image(700x350-crop).jpg" class="card-img-top" height="250" alt="images">
				  <div class="card-body">
				    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  </div>
				</div>
			</div>
		</div>

		<ul class="row list-unstyled mb-5">
			<li class="col-md-6 mb-5 media">
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTj9JJFL1SwIw9GaiT2bQw2z1Ade2Lz6zLhButgGsnnaH_xPv31&usqp=CAU" class="mr-3" width="150">
			<div class="media-body">
			  <h5 class="mt-0 mb-1">List-based media object</h5>
			  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
			</div>
			</li>
			<li class="col-md-6 mb-5 media">
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTj9JJFL1SwIw9GaiT2bQw2z1Ade2Lz6zLhButgGsnnaH_xPv31&usqp=CAU" class="mr-3" width="150">
			<div class="media-body">
			  <h5 class="mt-0 mb-1">List-based media object</h5>
			  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
			</div>
			</li>
		</ul>
	</div>

	<footer class="footer mt-auto bg-dark py-3">
	  <div class="container">
	    <span class="text-muted">Place sticky footer content here.</span>
	  </div>
	</footer>
	`);

	app.inlineCss({
		body: {
			paddingTop: "50px"
		}
	});
});

}