document.addEventListener('DOMContentLoaded', function () { //creating an event listener for the anonymous function
    function renderMovies(movieArray) {
        var movieHTML = movieArray.map(function (currentMovie) {
            return `
           <div class="movie card col-2 mx-1 my-1" >
            <div class="card-body">
				<img class="card-img-top" src="${currentMovie.Poster}"/><!--movie posters go here-->
				<h5 class="movie-title card-title"> ${currentMovie.Title}</h5> <!--movie title go here-->
				<p class="movie-release-date badge badge-secondary">${currentMovie.Year}</p><!--movie release date go here-->
                <button class="btn btn-primary">Add</button> <!--movie add button go here-->
            </div>
			</div>
            `

        }).join("");//why did we do the join like this? We did not store values in an empty array
        return movieHTML;

    }
    var moviesContainer = document.getElementById('movie-container')//created a variable that selects the movies from the movie container

    moviesContainer.innerHTML = renderMovies(movieData);//rendering the results onto the page using innerHTML


});
