

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(event) {
  console.log(event.keyCode);
}

document.body.addEventListener('keydown', onKeyDownHandler)
