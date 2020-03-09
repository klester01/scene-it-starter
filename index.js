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
    //--------------------------OMIT THESE LINES TO CLEAR MOVIES FROM SCREEN-----

/*
var movieContainer = document.getElementById("movie-container");
movieContainer.innerHTML = renderMovies(movieData);
*/



    //--------------------------OMIT THESE LINES TO CLEAR MOVIES FROM SCREEN-----------------------------

    //var movieContainer = document.getElementById("movie-container");
/*
var movieSearchBar = document.forms["search-form"].querySelector('input');//created a variable that selects the movies from the movie container
movieSearchBar.addEventListener("keyup", function (e) {
    e.preventDefault();
    var movieContainers = document.getElementById("movie-container").toLowerCase();
    Array.from(movieContainers).forEach(function (movieContainer) {
        var bookTitles = movieData.textContent;
        if (bookTitles.toLowerCase().indexOf(movieContainers) != -1) {
            movieContainers.style.display = 'block';

        } else {
            movieContainers.style.display = 'none';
        }
    })

});
return movieContainers;

movieContainers.innerHTML = renderMovies(movieData);//rendering the results onto the page using innerHTML
*/

