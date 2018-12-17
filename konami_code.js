const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(event) {
  console.log(event.keyCode);
  if(event.keyCode === code[index]) {
    console.log('pressed up');
    index++;
  } else {
    console.log('didnt press upp');
  }
  
}

document.body.addEventListener('keydown', onKeyDownHandler)
