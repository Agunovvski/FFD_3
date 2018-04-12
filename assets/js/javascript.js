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

    var img = document.createElement('img');
    img.src = movies[i].cover;

    var loadMore = document.createElement('img');
    loadMore.setAttribute('class', 'more');
    loadMore.src = "./images/arrow-grey.png";
    // loadMore.textContent = "Read more";

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


    var selectCc = document.querySelector('div.container-content');  // selecteer alle containers
    var cards = document.querySelectorAll('div.card');

     for (b = 0; b < cards.length; b++) { // for loop voor de buttons
      cards[b].addEventListener('click', containerAdd);  // click event op buttons: run function
    }

  } // einde van een bovenste for loop

} // einde function showMovies

function containerAdd(){ // functie toggle de container en doe allerlei dingen
  this.childNodes[5].classList.toggle('container-content-clicked');
  if (this.childNodes[5].classList.contains('container-content-clicked')) {
    this.childNodes[1].style.transform = 'translate3D(0, -15px, 10px)';
    this.childNodes[1].style.boxShadow = '2px 8px 45px rgba(0, 0, 0, .15)';
    this.childNodes[6].style.transform = 'rotate(180deg)';
  }else {
    this.childNodes[1].style.transform = 'translate3D(0, 0, 0)';
    this.childNodes[1].style.boxShadow = '2px 4px 25px rgba(0, 0, 0, .1)';
    this.childNodes[6].style.transform = 'rotate(0deg)';
  }
  console.log(this);
}



// progress indicator

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.addEventListener('scroll', myFunction);


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
