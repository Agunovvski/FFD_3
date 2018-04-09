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

    var pRd = document.createElement('p');
    pRd.className = "release-date";
    pRd.textContent = movies[i].release_date;

    var pGenre = document.createElement('p');
    pGenre.className = "genre";
    pGenre.textContent = movies[i].genres;

    // var pActors = document.createElement('p');
    // pActors.className = "acteurs";
    // pActors.textContent = movies[i].actors[i].actor_name;

    var directorsUl = document.createElement('ul');
    for (var g = 0; g < movies[i].directors.length; g++) {
      var directorName = document.createElement('li');  
      directorName.textContent = movies[i].directors[g].name;
      directorsUl.appendChild(directorName);
    }

    var actorsUl = document.createElement('ul');
    for (x=0; x < movies[i].actors.length; x++) {
      var actorsLi = document.createElement('li');
      actorsLi.textContent = movies[i].actors[x].actor_name;
      actorsUl.appendChild(actorsLi);
    }

    var img = document.createElement('img');
    img.src = movies[i].cover;


    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img);
    card.appendChild(pRd);
    card.appendChild(pGenre);
    card.appendChild(p);
    // card.appendChild(pActors);
    card.appendChild(directorsUl);
    card.appendChild(actorsUl);

    section.appendChild(container);

    // cards.addEventListener('click', showInfo);


  }

  var cards = document.querySelectorAll('div.card');
  var welcomeHead = document.querySelector('h1.welcome');

  for (i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', showInfo);
  }

  function showInfo(e){
    e.target.classList.toggle('groter');
  }



//   var myH1 = document.createElement('h1');
//   myH1.textContent = jsonObj[1].title;
//
//   header.appendChild(myH1);
//
//   var myPara = document.createElement('p');
//   myPara.textContent = jsonObj[1].plot;
//
//   header.appendChild(myPara);
// }
//
// function objMovies(jsonObj){
//   var actors = jsonObj[1].actors;
//   console.log(actors);
//   for(var i=0; i < actors.length; i++){
//     var myArticle = document.createElement('article');
//     var myH2 = document.createElement('h2');
//     var myPara1 = document.createElement('p');
//
//     myH2.textContent = actors[i].actor_name;
//     myPara1.textContent = 'Secret identity: ' + actors[i].character;
//
//     myArticle.appendChild(myH2);
//     myArticle.appendChild(myPara1);
//
//     section.appendChild(myArticle);
  // }

}
