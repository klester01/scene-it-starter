document.addEventListener('DOMContentLoaded', function () { //creating an event listener for the anonymous function
    function renderMovies(movieArray) {//function taking one parameter i.e. movieArray
        var movieHTML = movieArray.map(function (currentMovie) {//1.writting a .map() loop on movieArray.
            //2.This function accepts one parameter called currentMovie. 
            //3. Set movieHTML as the variable for the results of the .map()
            return `
           <div class="movie card col-2 mx-1 my-1" >
            <div class="card-body">
				<img class="card-img-top" src="${currentMovie.Poster}"/><!--movie posters go here-->
				<h5 class="movie-title card-title"> ${currentMovie.Title}</h5> <!--movie title go here-->
				<p class="movie-release-date badge badge-secondary">${currentMovie.Year}</p><!--movie release date go here-->
                <a href="#" class="btn btn-primary">Add Movie</a>
                
            </div>
			</div>
            `

        }).join("");//why did we do the join like this? We did not store values in an empty array
        return movieHTML;

    }

    var movieContainer = document.getElementById("movie-container");
    var searchList = document.getElementById("search-form");
    searchList.addEventListener("submit", function (e) {
        e.preventDefault();
        movieContainer.innerHTML = renderMovies(movieData);
    });


});