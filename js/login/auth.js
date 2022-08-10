// JSON SERVER AUTH

var form = document.getElementById('form');

const login = (emailAddress , pass) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    // Save mail and pass in variables
    var raw = JSON.stringify({
        email: emailAddress,
        password: pass,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch('http://localhost:3000/login', requestOptions)
        .then((res) => res.json())
        .then((result) => {

            console.log(result);

            // If result has the acess token, then redirect to the GameFinder
            if (result.hasOwnProperty('accessToken')){
                location.href = '/home.html';
            };
        })
        .catch((error) => console.log(error));
};

// If the form receives a submit event, then save the email and pass values
form.addEventListener('submit', e => {

    e.preventDefault();

    var inputEmail = document.querySelector('.email').value;
    var inputPass = document.querySelector('.pass').value;

    // Send email and pass values to the login function
    login(inputEmail , inputPass);
});

// PASSWORD TOGGLE

var passToggle = document.querySelector('.passToggle');
var passToggleImg = document.querySelector('.passToggle-img');
var state;


passToggle.addEventListener('click' , e => {

    e.preventDefault();

    if (state){
        document.querySelector('.pass').setAttribute('type' , 'password');
        state = false;
        passToggleImg.src = '/img/Eye.svg';
    }else{
        document.querySelector('.pass').setAttribute('type' , 'text');
        state = true;
        passToggleImg.src = '/img/NoEye.svg';
    }

});