const indexArray = document.querySelectorAll("li a");

function getElementY(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}

function doScrolling(element, duration) {
	var startingY = window.pageYOffset
  var elementY = getElementY(element)
  // If element is close to page's bottom then window will scroll only to some position above the element.
  var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
	var diff = targetY - startingY
  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
  var start

  if (!diff) return

	// Bootstrap our animation - it will get called right before next frame shall be rendered.
	window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
		// Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent)

    window.scrollTo(0, startingY + diff * percent)

		// Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

function changeIndexToHeader() {
  for (i = 0; i < indexArray.length; i++) {
    indexArray[i].style.color = "#008080";
  }
  document.querySelector("li a.header").style.color = "black";
  doScrolling('#header', 1500);
  event.preventDefault();
}

function changeIndexToAbout() {
  for (i = 0; i < indexArray.length; i++) {
    indexArray[i].style.color = "#008080";
  }
  document.querySelector("li a.about").style.color = "black";
  doScrolling('#about', 1500);
  event.preventDefault();
}

function changeIndexToProjects() {
  for (i = 0; i < indexArray.length; i++) {
    indexArray[i].style.color = "#008080";
  }
  document.querySelector("li a.projects").style.color = "black";
  doScrolling('#projects', 1500);
  event.preventDefault();
}

function changeIndexToContact() {
  for (i = 0; i < indexArray.length; i++) {
    indexArray[i].style.color = "#008080";
  }
  document.querySelector("li a.contact").style.color = "black";
  doScrolling('#contact', 1500);  
  event.preventDefault();
}
