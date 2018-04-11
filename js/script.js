

var url = 'https://api.icndb.com/jokes/random';  //adres do dowcipu

var button = document.getElementById('get-joke'); //pobiera element po ID
button.addEventListener('click', function(){  //dodaje listener do buttona
  getJoke();
});

var paragraph = document.getElementById('joke');

window.onload= getJoke;

function getJoke() {  //implementacja funkji
  var xhr = new XMLHttpRequest(); //nowa instancja obiektu
  xhr.open('GET', url);  //otwarcie polaczenia z wybranym adresem
  xhr.addEventListener('load', function(){ //listener
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}
