function fetchdata(url) {
    const posterImage = document.getElementById('posterImage');
    const ratingDisplay = document.getElementById('ratingDisplay');
    const titleDisplay = document.getElementById('titleDisplay');
    const detailsDisplay = document.getElementById('detailsDisplay');
    const more = document.querySelector('.more');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const title = data.Title;
            const poster = data.Poster;
            const year = data.Year;
            const rating = data.imdbRating;
            const type = data.Type;
            const genre = data.Genre;
            const country = data.Country;

            posterImage.src = poster;
            ratingDisplay.textContent = rating;
            titleDisplay.textContent = title;
            detailsDisplay.innerHTML = `
                <p>Genre: ${genre}<br>
                Type: ${type}<br>
                Released Year: ${year}<br>
                Release Country: ${country}</p>
            `;

            const plot = data.Plot;
            const director = data.Director;
            const actors = data.Actors;
            const writer = data.Writer;

            more.innerHTML = `
                <p class="txt" hidden>
                    Synopsis: <br>
                    ${plot} <br><br>
                    Director: ${director} <br>
                    Actors: ${actors} <br>
                    Writer: ${writer}
                </p>
            `;
            })
            .catch(error => console.error('Error fetching movie data:', error));
        }
        
        let searchButton = document.querySelector('.search-btn');
        searchButton.addEventListener('click', () => {
            let movieName = document.getElementById('inputName');
            console.log(movieName.value);
            let url = `https://www.omdbapi.com/?t=${movieName.value}&apikey=cdeb8fe2`;
            fetchdata(url);
            
            movieName.value = '';
        });
        const moreBtn = document.querySelector('.more-info-btn');
        moreBtn.addEventListener('click',()=>{
            let txt = document.querySelector('.txt');
            txt.hidden = (txt.hidden)? false : true;
        });