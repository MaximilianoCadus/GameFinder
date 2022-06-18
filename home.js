// GameFinder API
let page = 1;
let c = 0;
let d = 0;
let lastGame;


const gameContainer = document.querySelector('.game-list');
const url = 'https://api.rawg.io/api/games?key=a007b006cea84f8bb09947706a510fd5';

// Infinite scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entrie => {
        if(entrie.isIntersecting){
            page++;
            getGames();
        }
    });
}, {
    rootMargin: '0px 0px 800px 0px',
    threshold: 1.0
})




// Get the games with fetch
function getGames(){
    fetch(url + '&page=' + page)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results);
        for (var i = 0; i < data.results.length; i+=1){
            // Create a game for every result
            createGame(data.results , i);
        }
    })
}

function createGame(game , i){

    // Get the image
    const  img = document.createElement('img');
    img.src = game[i].background_image;

    const div = document.createElement('div');
    div.appendChild(img);
    div.classList.add('game');


    // Get the description
    const topDesc = document.createElement('div');
    div.appendChild(topDesc);
    topDesc.classList.add('top-desc');

    const title = document.createElement('h4');
    title.textContent = game[i].name;
    topDesc.appendChild(title);
    title.classList.add('game-title');

    const ranking = document.createElement('p');
    ranking.textContent = '#' + (c+1);
    topDesc.appendChild(ranking);

    const gameDesc = document.createElement('div');
    div.appendChild(gameDesc);
    gameDesc.classList.add('game-desc');

    const desc = document.createElement('div');
    gameDesc.appendChild(desc);
    desc.classList.add('desc');

    const infoDate = document.createElement('p');
    infoDate.textContent = 'Release date:';
    infoDate.classList.add('info');
    desc.appendChild(infoDate);

    const date = document.createElement('p');
    date.textContent = game[i].released;
    date.classList.add('data');
    desc.appendChild(date);

    const plat = document.createElement('div');
    plat.classList.add('plat');
    gameDesc.appendChild(plat);

    for (var k = 0; k < game[i].parent_platforms.length; k+=1){
        if (game[i].parent_platforms[k].platform.name === 'PC'){
            const windows = document.createElement('img');
            windows.src = '/img/Windows.svg';
            plat.appendChild(windows);
        }
        if (game[i].parent_platforms[k].platform.name === 'PlayStation'){
            const playstation = document.createElement('img');
            playstation.src = '/img/PlayStation.svg';
            plat.appendChild(playstation);
        }
        if (game[i].parent_platforms[k].platform.name === 'Xbox'){
            const xbox = document.createElement('img');
            xbox.src = '/img/Xbox.svg';
            plat.appendChild(xbox);
        }
        if (game[i].parent_platforms[k].platform.name === 'Nintendo'){
            const nintendo = document.createElement('img');
            nintendo.src = '/img/Nintendo.svg';
            plat.appendChild(nintendo);
        }
    }

    const infoGenre = document.createElement('p');
    infoGenre.textContent = 'Genres:';
    infoGenre.classList.add('info');
    desc.appendChild(infoGenre);

    const genre = document.createElement('p');
    for (var k = 0; k < game[i].genres.length; k+=1){
        genre.textContent += game[i].genres[k].name + ' ';
        genre.classList.add('data');
        desc.appendChild(genre);
    }

    gameContainer.appendChild(div);

    c = c + 1;

    if (lastGame){
        observer.unobserve(lastGame);
    }

    if (i === game.length - 1){
        const games = document.querySelector('.game-list');
        const gamesInScreen = Array.from(games.children);
        lastGame = gamesInScreen[gamesInScreen.length - 1];
        observer.observe(lastGame);
    }
}

const searchInput = document.querySelector('.search');

function searchGame(game , i){

    // Get the image
    const img = document.createElement('img');
    img.src = game[i].background_image;

    const div = document.createElement('div');
    div.appendChild(img);
    div.classList.add('game');


    // Get the description
    const topDesc = document.createElement('div');
    div.appendChild(topDesc);
    topDesc.classList.add('top-desc');

    const title = document.createElement('h4');
    title.textContent = game[i].name;
    topDesc.appendChild(title);
    title.classList.add('game-title');

    const ranking = document.createElement('p');
    ranking.textContent = '#' + (d+1);
    topDesc.appendChild(ranking);

    const gameDesc = document.createElement('div');
    div.appendChild(gameDesc);
    gameDesc.classList.add('game-desc');

    const desc = document.createElement('div');
    gameDesc.appendChild(desc);
    desc.classList.add('desc');

    const infoDate = document.createElement('p');
    infoDate.textContent = 'Release date:';
    infoDate.classList.add('info');
    desc.appendChild(infoDate);

    const date = document.createElement('p');
    date.textContent = game[i].released;
    date.classList.add('data');
    desc.appendChild(date);

    const plat = document.createElement('div');
    plat.classList.add('plat');
    gameDesc.appendChild(plat);

    for (var k = 0; k < game[i].parent_platforms.length; k+=1){
        if (game[i].parent_platforms[k].platform.name === 'PC'){
            const windows = document.createElement('img');
            windows.src = '/img/Windows.svg';
            plat.appendChild(windows);
        }
        if (game[i].parent_platforms[k].platform.name === 'PlayStation'){
            const playstation = document.createElement('img');
            playstation.src = '/img/PlayStation.svg';
            plat.appendChild(playstation);
        }
        if (game[i].parent_platforms[k].platform.name === 'Xbox'){
            const xbox = document.createElement('img');
            xbox.src = '/img/Xbox.svg';
            plat.appendChild(xbox);
        }
        if (game[i].parent_platforms[k].platform.name === 'Nintendo'){
            const nintendo = document.createElement('img');
            nintendo.src = '/img/Nintendo.svg';
            plat.appendChild(nintendo);
        }
    }

    const infoGenre = document.createElement('p');
    infoGenre.textContent = 'Genres:';
    infoGenre.classList.add('info');
    desc.appendChild(infoGenre);

    const genre = document.createElement('p');
    for (var k = 0; k < game[i].genres.length; k+=1){
        genre.textContent += game[i].genres[k].name + ' ';
        genre.classList.add('data');
        desc.appendChild(genre);
    }

    gameContainer.appendChild(div);

    d = d + 1;
}

const container = document.getElementById('game-list')




searchInput.addEventListener('input', e =>{
    const value = e.target.value;
    const char = '123'
    console.log(value);
    if(value.length > char.length){
        fetch(url + '&search=' + value)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);
            d = 0;
            container.innerHTML = '';
            for (var i = 0; i < 4 ; i+=1){
                searchGame(data.results , i , d);
            }
        });
    } else if(value.length <= char.length || !value){
        page = 1;
        container.innerHTML = '';
        c = 0;
        getGames();
    }
});

getGames();