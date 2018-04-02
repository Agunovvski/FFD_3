var header = document.querySelector('header');
var section = document.querySelector('section');

var headerInfo = document.querySelector('header.info');

var container = document.createElement('div');
container.setAttribute('class', 'container');






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
    movies.plot = movies[i].plot.substring(0, 300);
    p.textContent = `${movies.plot}...`;


    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);

    section.appendChild(container);
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
//   }

}
