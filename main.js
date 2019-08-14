var button = $('.submit');
var genre = $('.drop-down');
var subgenre = $('.drop-down-two');
var rating = $('.drop-down-three');
var empty = $('.acceptinformation');

button.on("click", allInformation);

function allInformation() {
  event.preventDefault();
  var genre = $('.drop-down').val();
  var subgenre = $('.drop-down-two').val();
  var rating = $('.drop-down-three').val();
  empty.append(`you picked a ${rating} ${genre} ${subgenre} movie!`);
  $('.drop-down').val("");
  $('.drop-down-two').val("");
  $('.drop-down-three').val("");
}
