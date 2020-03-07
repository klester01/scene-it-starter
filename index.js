document.addEventListener('DOMContentLoaded', function () {
    function renderMovies(movieArray) {
        var moviewHTML = movieArray.map(function (currentMovie) {
            return `
           <div class="movie" >
				<img src="${currentMovie.Poster}"/><!--movie posters go here-->
				<div class="movie-title">${currentMovie.Title}</div> <!--movie title go here-->
				<div class="movie-release-date">${currentMovie.Year}</div><!--movie release date go here-->
				<button>ADD</button> <!--movie add button go here-->
			</div>
            `

        }).join("");

        return moviewHTML;

    }
    var moviesContainer = document.getElementById('movie-container')

    moviesContainer.innerHTML = renderMovies(movieData);


});
