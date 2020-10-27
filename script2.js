console.log("hi");

function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


/*Défi 1*/

function addition() {
  var c1 = Number(document.getElementById("c1").value);
  var c2 = Number(document.getElementById("c2").value);
  var total = c1 + c2;

  // Afficher la valeur
  alert(total);
}

/*Défi 2*/
function multiple() {
  var k = 0;
  var mul;
  var liste = [];
  var cp1 = Number(document.getElementById("cp1").value);
  while (k <= cp1) {
    mul = cp1 % k;
    if (mul == 0) {
      liste.push(k);
    }
    k++;
  }
  alert(liste);
}
/*Défi 3*/
function premier() {
  var pre = Number(document.getElementById("pre").value);
  var k = 2;
  var div;
  if (div = pre % k == 0) {
    alert("Votre chiffre n'est pas premier");
  } else {
    alert("Votre chiffre est premier");
  }
}

/*Défi 4*/

/* ----------tableau.sort---------- */

/*Défi 5*/

/* ----------mot et mot.reverse---------- */

/*Défi 6*/

/* -------------------- */