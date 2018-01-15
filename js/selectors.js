// declare your functions here...
function paragraphSelector () {
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('#baby-ninja');
}

function divSelector() {
  return $('.pics');
}

function firstListItem() {
  return $('li #pic-list:first-child');
}


/* 
Because we want to select the first image inside a div, we put div first. Next comes the element we want to select, which is img, followed by :first-child:
$('div img:first-child')


*/
