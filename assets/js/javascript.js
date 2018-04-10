var header = document.querySelector('header');
var section = document.querySelector('section');

var container = document.createElement('div');
container.setAttribute('class', 'container');

var headerInfo = document.querySelector('header.card-info');




var requestURL = 'http://dennistel.nl/movies';


var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();



request.onload = function() {
  var jsonObj = request.response;
  console.log(jsonObj);

  showMovies(jsonObj);
  // objMovies(jsonObj);


};

function showMovies(jsonObj){
  var movies = jsonObj;

  for(var i=0; i < movies.length; i++){
    var card = document.createElement('div');
      card.setAttribute('class', 'card');

    var h1 = document.createElement('h1');
      h1.textContent = movies[i].title;

    var p = document.createElement('p');
    p.textContent = movies[i].simple_plot;

    var pRd = document.createElement('h5');
    pRd.className = "release-date";
    pRd.textContent = movies[i].release_date;

    var pGenre = document.createElement('h5');
    pGenre.className = "genre";
    pGenre.textContent = movies[i].genres;

    // var pActors = document.createElement('p');
    // pActors.className = "acteurs";
    // pActors.textContent = movies[i].actors[i].actor_name;

    var dirTitel = document.createElement('h5');
    dirTitel.setAttribute('class', 'titel');
    dirTitel.textContent = "Directors";

    var actorsTitel = document.createElement('h5');
    actorsTitel.setAttribute('class', 'titel');
    actorsTitel.textContent = "Actors";

    var directorsUl = document.createElement('ul');
    directorsUl.setAttribute('class', 'actors-ul');
    for (var g = 0; g < movies[i].directors.length; g++) {
      var directorName = document.createElement('li');
      directorName.textContent = movies[i].directors[g].name;
      directorsUl.appendChild(directorName);
    }

    var actorsUl = document.createElement('ul');
    actorsUl.setAttribute('class', 'actors-ul');
    for (x=0; x < movies[i].actors.length; x++) {
      var actorsLi = document.createElement('li');
      actorsLi.textContent = movies[i].actors[x].actor_name + ' as ' + movies[i].actors[x].character;
      actorsUl.appendChild(actorsLi);
    }

    if (movies[i].actors.length > 4) {
      var moreActors = document.createElement('li');
      moreActors.textContent = "+" + movies[i].actors.length -4 + ' more';
      actorsUl.appendChild(moreActors);
    }

    var img = document.createElement('img');
    img.src = movies[i].cover;

    var loadMore = document.createElement('button');
    loadMore.setAttribute('class', 'more');
    loadMore.textContent = "Read more";

    var containerContent = document.createElement('div');
    containerContent.setAttribute('class', 'container-content');

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img);
    card.appendChild(pRd);
    card.appendChild(pGenre);
    card.appendChild(p);
    card.appendChild(containerContent);
    containerContent.appendChild(dirTitel);
    containerContent.appendChild(directorsUl);
    containerContent.appendChild(actorsTitel);
    containerContent.appendChild(actorsUl);
    card.appendChild(loadMore);

    section.appendChild(container);


    var loadButtons = document.querySelectorAll('button.more'); // selecteer alle buttons
    var selectCc = document.querySelectorAll('div.container-content');  // selecteer alle containers

    for (b = 0; b < loadButtons.length; b++) { // for loop voor de buttons
      loadButtons[b].addEventListener('click', containerAdd);  // click event op buttons: run function
    }

    function containerAdd(){
      this.previousSibling.classList.toggle('container-content-clicked');
      // bij de button wat je clickt, selecteer Nodechild binnen in hetzelfde DOM Tree: previousSibling
      // toggle deze class 

    }

  } // einde van een bovenste for loop

}



// progress indicator
window.onscroll = function() {myFunction();};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// showanimation

// var counter = document.querySelector('p.counter');
//
// function countHeight(){
//   counter.innerHTML="scrollpos = " + window.pageYOffset + " en heightWindow = " + window.innerHeight;
// }
//
// window.addEventListener('scroll', countHeight);

var portAbout = document.querySelector('div.container card:first-child img');
var portOne = document.querySelector('div.container card:nth-child(2) img');
var portTwo = document.querySelector('div.container card:nth-child(3) img');
var portThree = document.querySelector('div.container card:nth-child(4) img');
var portFour = document.querySelector('div.container card:nth-child(5) img');

var w = window.innerWidth;
var h = window.innerHeight;

function showSection(){
  var height = window.pageYOffset;

}

window.addEventListener('scroll', showSection);

// randomcolor



window.onload = function(e){
  var colors = ["linear-gradient(to right, #ff0844 0%, #ffb199 100%)", "linear-gradient(to right, #c79081 0%, #dfa579 100%", "linear-gradient(to right, #f9d423 0%, #ff4e50 100%)", "linear-gradient(to right, #243949 0%, #517fa4 100%)", "linear-gradient(to right, #e14fad 0%, #f9d423 100%)" ];

  var color = colors[Math.floor(Math.random()*colors.length)];
  var headerBanner = document.querySelector('header.banner');
  var headerTitle = document.querySelector('h1.welcome');
  headerBanner.style.backgroundImage = color;
  headerTitle.style.backgroundImage = color;
  document.getElementById("myBar").style.backgroundImage = color;
};
