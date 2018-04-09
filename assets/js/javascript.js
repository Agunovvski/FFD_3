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


    var loadButtons = document.querySelectorAll('button.more');
    var selectCc = document.querySelectorAll('div.container-content');

    // function toggleInfo(b){
    //   for (var o = 0; o < selectCc.length; o++) {
    //     selectCc[o].classList.add('container-content-clicked');
    //   }
    // }
    // loadButtons.addEventListener('click', function(){
    //   for (o = 0; o < selectcc.length; o++) {
    //     selectcc[o].classList.toggle.toggle('container-content-clicked');
    //   }
    // });

    for (b = 0; b < loadButtons.length; b++) {
      loadButtons[b].addEventListener('click', function(){
        for (var o = 0; o < selectCc.length; o++) {
          selectCc[o].classList.add('container-content-clicked');
        }
      });
    }


  }

  // var cards = document.querySelectorAll('div.card');
  // var welcomeHead = document.querySelector('h1.welcome');
  //
  // for (i = 0; i < cards.length; i++) {
  //   cards[i].addEventListener('click', showInfo);
  // }
  //
  // function showInfo(e){
  //   e.target.classList.toggle('groter');
  // }



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
