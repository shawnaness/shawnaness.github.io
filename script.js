const indexArray = document.querySelectorAll("li a");

function changeIndexToHome() {
  for (i = 0; i < indexArray.length; i++) {
    indexArray[i].style.color = "#008080";
  }
  document.querySelector("li a.header").style.color = "black";
  document.querySelector("li a.header").scrollIntoView(true);
}

function changeIndexToAbout() {
  for (i = 0; i < indexArray.length; i++) {
    indexArray[i].style.color = "#008080";
  }
  document.querySelector("li a.about").style.color = "black";
  document.querySelector("li a.about").scrollIntoView(true);
}

function changeIndexToProjects() {
  for (i = 0; i < indexArray.length; i++) {
    indexArray[i].style.color = "#008080";
  }
  document.querySelector("li a.projects").style.color = "black";
  document.querySelector("li a.projects").scrollIntoView(true);
}

function changeIndexToContacts() {
  for (i = 0; i < indexArray.length; i++) {
    indexArray[i].style.color = "#008080";
  }
  document.querySelector("li a.contact").style.color = "black";
  document.querySelector("li a.contact").scrollIntoView(true);
}
