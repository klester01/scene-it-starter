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
                <a href="#" class="btn btn-primary" onclick="saveToWatchList('${currentMovie.imdbID}')">Add Movie</a><!--inline styling for calling savetoWatchList function with
                the paramters of template literal currentMovie.imdbID-->
    
                
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
        //adding search ability
        var searchString = document.getElementById("search-bar").value;//why are we targeting the search-bar?
        var urlEncodedSearchString = encodeURIComponent(searchString);
        axios.get("http://www.omdbapi.com/?apikey=4367f1ab&s=" + urlEncodedSearchString)
            .then(function (response) {
                console.log(response.data)
                movieArray = response.data.Search;
                movieHTML = renderMovies(response.data.Search);//return line for movieHTML
                movieContainer.innerHTML = renderMovies(response.data.Search)
            })

    })


})
//saveToWatchList

var movieArray = [];

function saveToWatchList(imdbID) { //defining the function within the block
    var movie = movieArray.find(function (currentMovie) {  //.find locate the first element in an array that matches the parameter being passed. 
        console.log("the movie id is " + imdbID);
        return currentMovie.imdbID == imdbID;
    })

    var watchlistJSON = localStorage.getItem("watch-list");
    var watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = [];
    };
    watchlist.push(movie);//pushing movie to watchlist
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem("watch-list", watchlistJSON);
}
