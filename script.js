document.addEventListener('DOMContentLoaded', function() {
    const moviesContainer = document.getElementById('movies-container');

    // Dummy data for demonstration
    const movies = [
        { title: 'Movie 1', image: 'https://via.placeholder.com/200x300' },
        { title: 'Movie 2', image: 'https://via.placeholder.com/200x300' },
        { title: 'Movie 3', image: 'https://via.placeholder.com/200x300' },
        { title: 'Movie 4', image: 'https://via.placeholder.com/200x300' },
        { title: 'Movie 5', image: 'https://via.placeholder.com/200x300' },
        { title: 'Movie 6', image: 'https://via.placeholder.com/200x300' }
    ];

    // Function to create movie elements
    function createMovieElement(movie) {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const movieImg = document.createElement('img');
        movieImg.src = movie.image;
        movieImg.alt = movie.title;

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;

        movieDiv.appendChild(movieImg);
        movieDiv.appendChild(movieTitle);

        return movieDiv;
    }

    // Function to display movies
    function displayMovies() {
        movies.forEach(movie => {
            const movieElement = createMovieElement(movie);
            moviesContainer.appendChild(movieElement);
        });
    }

    // Call the displayMovies function to initially display movies
    displayMovies();
});
