new fullpage('.luna', {
  //options here
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  sectionSelector: '.luna__section',
  autoScrolling: true,
  onLeave: function(origin, dest, dir) {
    var selector = "";
    var destNum = 0;
    if (dest.index === 1) {
      selector = ".second" 
      destNum = 21;
    }
    else {
      return true;
    }

    var toAnimateList = document.querySelectorAll(selector + " .to-animate");
    console.log(toAnimateList)
    toAnimateList.forEach(function(elem) {
      elem.classList.add("to-animate--active")
    });

    anime({
      targets: selector + " .number",
      textContent: destNum,
      easing: 'easeOutSine',
      round: 1, 
      duration: 3000,
    });
  }
});