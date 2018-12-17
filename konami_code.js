const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(event) {
  console.log(event.keyCode);
  
}

document.body.addEventListener('keydown', onKeyDownHandler)
