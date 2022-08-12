// GAMEFINDER API

const gameContainer = document.querySelector('.game-list');
const gameContainerId = document.getElementById('game-list')
const searchInput = document.querySelector('.search');
const url = 'https://api.rawg.io/api/games?key=a007b006cea84f8bb09947706a510fd5';
var page = 1;
var c = 0;
var d = 0;
var lastGame;


// Infinite scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entrie => {
        if(entrie.isIntersecting){
            page++;
            getGames();
        }
    });
}, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});




// Get the games with fetch
const getGames = () => {
    fetch(url + '&page=' + page)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results);
        for (var i = 0; i < data.results.length; i+=1){

            // Create a game for every result
            createGame(data.results , i);
        };
    });
};

const createGame = (game , i) => {

    // Create the game box
    var div = document.createElement('div');
    div.classList.add('game');

    // Get the image
    var  img = document.createElement('img');
    img.src = game[i].background_image;
    div.appendChild(img);


    // Create the top description box
    var topDesc = document.createElement('div');
    div.appendChild(topDesc);
    topDesc.classList.add('top-desc');

    // Get the game title
    var title = document.createElement('h4');
    title.textContent = game[i].name;
    topDesc.appendChild(title);
    title.classList.add('game-title');

    // Add a ranking
    var ranking = document.createElement('p');
    ranking.textContent = '#' + (c+1);
    topDesc.appendChild(ranking);

    // Create the down description box
    var gameDesc = document.createElement('div');
    div.appendChild(gameDesc);
    gameDesc.classList.add('game-desc');

    // Create the info box
    var desc = document.createElement('div');
    gameDesc.appendChild(desc);
    desc.classList.add('desc');

    // Get the date
    var infoDate = document.createElement('p');
    infoDate.textContent = 'Release date:';
    infoDate.classList.add('info');
    desc.appendChild(infoDate);

    var date = document.createElement('p');
    date.textContent = game[i].released;
    date.classList.add('data');
    desc.appendChild(date);

    // Create platforms box
    var plat = document.createElement('div');
    plat.classList.add('plat');
    gameDesc.appendChild(plat);

    // Get the platforms
    for (var k = 0; k < game[i].parent_platforms.length; k+=1){
        if (game[i].parent_platforms[k].platform.name === 'PC'){
            var windows = document.createElement('img');
            windows.src = '/img/Windows.svg';
            plat.appendChild(windows);
        };
        if (game[i].parent_platforms[k].platform.name === 'PlayStation'){
            var playstation = document.createElement('img');
            playstation.src = '/img/PlayStation.svg';
            plat.appendChild(playstation);
        };
        if (game[i].parent_platforms[k].platform.name === 'Xbox'){
            var xbox = document.createElement('img');
            xbox.src = '/img/Xbox.svg';
            plat.appendChild(xbox);
        };
        if (game[i].parent_platforms[k].platform.name === 'Nintendo'){
            var nintendo = document.createElement('img');
            nintendo.src = '/img/Nintendo.svg';
            plat.appendChild(nintendo);
        };
    };

    // Get the genres
    var infoGenre = document.createElement('p');
    infoGenre.textContent = 'Genres:';
    infoGenre.classList.add('info');
    desc.appendChild(infoGenre);

    var genre = document.createElement('p');
    for (var k = 0; k < game[i].genres.length; k+=1){
        genre.textContent += game[i].genres[k].name + ' ';
        genre.classList.add('data');
        desc.appendChild(genre);
    };

    // Get the description
    var description = document.createElement('p');
    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    description.classList.add('description');
    div.appendChild(description);

    // Insert the game box in the games list container
    gameContainer.appendChild(div);

    // Update the game rank
    c = c + 1;

    // If there is a last game being observe, stop observing it
    if (lastGame){
        observer.unobserve(lastGame);
    };

    // If the last game is on screen, observe it
    if (i === game.length - 1){
        const games = document.querySelector('.game-list');
        const gamesInScreen = Array.from(games.children);
        lastGame = gamesInScreen[gamesInScreen.length - 1];
        observer.observe(lastGame);
    };
};

const searchGame = (game , i) => {

    // Create the game box
    var div = document.createElement('div');
    div.classList.add('game');

    // Get the image
    var  img = document.createElement('img');
    img.src = game[i].background_image;
    div.appendChild(img);


    // Create the top description box
    var topDesc = document.createElement('div');
    div.appendChild(topDesc);
    topDesc.classList.add('top-desc');

    // Get the game title
    var title = document.createElement('h4');
    title.textContent = game[i].name;
    topDesc.appendChild(title);
    title.classList.add('game-title');

    // Add a ranking
    var ranking = document.createElement('p');
    ranking.textContent = '#' + (d+1);
    topDesc.appendChild(ranking);

    // Create the down description box
    var gameDesc = document.createElement('div');
    div.appendChild(gameDesc);
    gameDesc.classList.add('game-desc');

    // Create the info box
    var desc = document.createElement('div');
    gameDesc.appendChild(desc);
    desc.classList.add('desc');

    // Get the date
    var infoDate = document.createElement('p');
    infoDate.textContent = 'Release date:';
    infoDate.classList.add('info');
    desc.appendChild(infoDate);

    var date = document.createElement('p');
    date.textContent = game[i].released;
    date.classList.add('data');
    desc.appendChild(date);

    // Create platforms box
    var plat = document.createElement('div');
    plat.classList.add('plat');
    gameDesc.appendChild(plat);

    // Get the platforms
    for (var k = 0; k < game[i].parent_platforms.length; k+=1){
        if (game[i].parent_platforms[k].platform.name === 'PC'){
            var windows = document.createElement('img');
            windows.src = '/img/Windows.svg';
            plat.appendChild(windows);
        };
        if (game[i].parent_platforms[k].platform.name === 'PlayStation'){
            var playstation = document.createElement('img');
            playstation.src = '/img/PlayStation.svg';
            plat.appendChild(playstation);
        };
        if (game[i].parent_platforms[k].platform.name === 'Xbox'){
            var xbox = document.createElement('img');
            xbox.src = '/img/Xbox.svg';
            plat.appendChild(xbox);
        };
        if (game[i].parent_platforms[k].platform.name === 'Nintendo'){
            var nintendo = document.createElement('img');
            nintendo.src = '/img/Nintendo.svg';
            plat.appendChild(nintendo);
        };
    };

    // Get the genres
    var infoGenre = document.createElement('p');
    infoGenre.textContent = 'Genres:';
    infoGenre.classList.add('info');
    desc.appendChild(infoGenre);

    var genre = document.createElement('p');
    for (var k = 0; k < game[i].genres.length; k+=1){
        genre.textContent += game[i].genres[k].name + ' ';
        genre.classList.add('data');
        desc.appendChild(genre);
    };

    // Get the description
    var description = document.createElement('p');
    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    description.classList.add('description');
    div.appendChild(description);

    // Insert the game box in the games list container
    gameContainer.appendChild(div);

    // Update de game rank
    d = d + 1;
};

// Receives a keyboard event
searchInput.addEventListener('input', e =>{
    var value = e.target.value;
    console.log(value);
    if(value.length >= 3){
        fetch(url + '&search=' + value + '&page_size=' + 4)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);
            d = 0;
            gameContainerId.innerHTML = '';
            for (var i = 0; i < data.results.length ; i+=1){
                searchGame(data.results , i , d);
            };
        });
    } else if(value.length < 3){
        page = 1;
        gameContainerId.innerHTML = '';
        c = 0;
        getGames();
    };
});

getGames();