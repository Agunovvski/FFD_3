var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'http://dennistel.nl/movies';


var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var jsonObj = request.response;
  console.log(jsonObj[1]);

  showInfo(jsonObj);
  objMovies(jsonObj);
};

function showInfo(jsonObj){
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj[1].title;

  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = jsonObj[1].plot;

  header.appendChild(myPara);
}

function objMovies(jsonObj){
  var actors = jsonObj[1].actors;
  console.log(actors);
  for(var i=0; i < actors.length; i++){
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');

    myH2.textContent = actors[i].actor_name;
    myPara1.textContent = 'Secret identity: ' + actors[i].character;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);

    section.appendChild(myArticle);
  }

}
