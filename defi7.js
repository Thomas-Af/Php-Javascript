function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function defi1() {
  let n1 = window.prompt("Nombre 1?");
  let n2 = window.prompt("Nombre 2?");
  let result =  parseFloat(n1) + parseFloat(n2);
  // ou "eval"
  alert("The result is: " + result);
}

function defi2() {
  let multiples = [];
  let n = window.prompt("De quel nombre voulez-vous connaitre les multiples?");
  for (var i = 0; i <= eval(n); i++) {
    if (n % i == 0) {
      multiples.push(i);
    }
  }
  alert("The result is: " + multiples);
}

function mul(n) {
  let multiples = [];
  for (var i = 0; i <= eval(n); i++) {
    if (n % i == 0) {
      multiples.push(i);
    }
  }
  return multiples;
}

function defi3() {
  let n = window.prompt("Entrez un nombre:");
  let multiples = mul(n);
  if (multiples.length == 2) {
    alert("Le nombre renseigné est PREMIER");
  } else {
  alert("Le nombre renseigné n'est PAS PREMIER");
  }
}

function defi3_alternative() {
  let n = window.prompt("Entrez un nombre:");
  let multiples = mul(n);
  if (multiples[0] == 1 && multiples[1] == n) {
    alert("Le nombre renseigné est PREMIER");
  } else {
  alert("Le nombre renseigné n'est PAS PREMIER");
  }
}

function defi4() {
  let length = window.prompt("Combien d'éléments a votre tableau?");
  let tableau = [];
  for (var i = 0; i < eval(length); i++) {
    tableau[i] = window.prompt("Quel est l'element no "  + i + " du tableau?");
  }
  alert("Le tableau trié est: " + tableau.sort());
}

function defi5() {
  let length = window.prompt("Combien d'éléments a votre tableau?");
  let tableau = [];
  for (var i = 0; i < eval(length); i++) {
    tableau[i] = window.prompt("Quel est l'element no "  + i + " du tableau?");
  }
  alert("Le tableau trié est: " + tableau.sort());
}

function normalizeString(string) {
  return string.toLowerCase().replace(" ", "");
}

function defi6() {
  let word = window.prompt("Quel est votre mot?");
  word = normalizeString(word);
  let isPalindrome = true;
  for (var i = 0; i < word.length/2; i++) {
    if (word[i] != word[word.length - 1 - i]) {
      isPalindrome = false;
    }
  }
  if (isPalindrome == true) {
    alert("Le mot EST un palindrome");
  } else {
    alert("Le mot N'EST PAS un palindrome");
  }
}

function defi6_alternative() {
  let word = window.prompt("Quel est votre mot?");
  word = normalizeString(word);
  let reverse = word.reverse();
  if (word == reverse) {
    alert("Le mot EST un palindrome");
  } else {
    alert("Le mot N'EST PAS un palindrome"); 
  }
}

function defi7() {
  let word = window.prompt("Quel est votre mot?");
  window.open("http://fr.wikipedia.org/wiki/" + word);
}