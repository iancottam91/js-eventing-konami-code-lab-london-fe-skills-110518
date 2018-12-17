const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
     
    // This is the function that would be invoked by the event listener.
    function onKeyDownHandler(e) {
      console.log(e);
      const key = parseInt(e.detail || e.which);
      console.log(key);
    }
    
    document.body.addEventListener('keydown', onKeyDownHandler)
}

init();
