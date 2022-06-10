// GameFinder API

const loadGames = async() => {

    try{
    const response = await fetch('https://api.rawg.io/api/games?key=a007b006cea84f8bb09947706a510fd5&dates=2019-09-01,2019-09-30&platforms=18,1,7');
    console.log(response);

    if(response.status === 200){

        const data = await response.json();
        console.log(data);
    }else if(response.status === 401){
        console.log('Wrong key');
    }else if(response.status === 404){
        console.log('Not found');
    }else{
        console.log('xx Error');
    }



    } catch(error){

        console.log(error);

    }

}

loadGames();