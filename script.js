/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function change_titre() {
  document.getElementById("titre1").innerHTML = titre_change.value;
}

var titre_color = "black";

function change_titre_c() {
  if (titre_color == "black") {
    document.getElementById("titre1").style.color = "white";
    titre_color = "white";
  } else if (titre_color == "white") {
    document.getElementById("titre1").style.color = "black";
    titre_color = "black";
  }
}

function dispa_titre() {
  document.getElementById("ct").style.display = "none";
}

var backgroundColor = "grey";

function background_change() {
  if (backgroundColor == "grey") {
    document.body.style.backgroundColor = "red";
    backgroundColor = "red";
  } else if (backgroundColor == "red") {
    document.body.style.backgroundColor = "green";
    backgroundColor = "green";
  } else if (backgroundColor == "green") {
    document.body.style.backgroundColor = "pink";
    backgroundColor = "pink";
  } else if (backgroundColor == "pink") {
    document.body.style.backgroundColor = "brown";
    backgroundColor = "brown";
  } else if (backgroundColor == "brown") {
    document.body.style.backgroundColor = "grey";
    backgroundColor = "grey";
  }
}
