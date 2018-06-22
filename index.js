// Write your code in this file!
function scuberGreetingForFeet(number) {
  if (number <= 400) {
    return 'This one is on me!';
  } else if (number > 2000) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(place) {
  let city, go;
  let cityPicked = 'NYC';
  let goTo = (city = 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(response) {
  switch (new response().getResponse()) {
    case 'generous':
      response = 'Thank you so much';
      break;
    case 'not as generous':
      respone = 'Thank you.';
      break;
    case 'Thanks for everything.':
      response = 'Bye.';
      break;
  }
}
