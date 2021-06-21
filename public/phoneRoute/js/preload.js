if (/debug=1/.test(window.location.href)){
  window.onerror = function(err) {
    console.log('preload: ', err);
    return true;
  };
}
