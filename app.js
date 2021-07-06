let btn = document.querySelector("#valider");
let resultat = document.querySelector("#res");

btn.addEventListener("click", () => {
  let num = document.querySelector("#num").value.toString();
  convert(num);
});

function convert(num) {
  var taille = num.length;
  var nz = 15 - taille;
  for (let i = 0; i < nz; i++) num = "0" + num;
  var res =
    trillionieme(num) +
    " " +
    billionieme(num) +
    " " +
    millionieme(num) +
    " " +
    millieme(num) +
    " " +
    centaine(num, 12) +" Dollar";
  // console.log(num); return;
  resultat.innerHTML = res;
  console.log(res);
}
//15478569856321

function centaine(num, n) {
  // console.log("here "+ centaine2text(num[n], " cent"));
  return (
    centaine2text(num[n], " cent").trimLeft().trimRight() +
    " " +
    (num[n + 1].concat(num[n + 2]) < 17
      ? unite2text(num[n + 1].concat(num[n + 2]))
      : dizaine2text(num[n + 1])
          .trimLeft()
          .trimRight() +
        " " +
        unite2text(num[n + 2])
          .trimLeft()
          .trimRight())
  );
}

function millieme(num) {
  var res =
    num[9] == 0 && num[10] == 0 && num[11] == 0
      ? ""
      : centaine(num, 9) + " mille";
  return res;
}
function millionieme(num) {
  var res =
    num[6] == 0 && num[7] == 0 && num[8] == 0
      ? ""
      : centaine(num, 6) + " million";
  return res;
}
function billionieme(num) {
  var res =
    num[3] == 0 && num[4] == 0 && num[5] == 0
      ? ""
      : centaine(num, 3) + " billion";
  return res;
}
function trillionieme(num) {
  var res =
    num[0] == 0 && num[1] == 0 && num[2] == 0
      ? ""
      : centaine(num, 0) + " trillion";
  return res;
}

function unite2text(n) {
  n = parseInt(n);
  console.log(n);
  var value = "";
  switch (n) {
    case 10:
      value = "dix";
      break;
    case 11:
      value = "onze";
      break;
    case 12:
      value = "douze";
      break;
    case 13:
      value = "treize";
      break;
    case 14:
      value = "quatorze";
      break;
    case 15:
      value = "quinze";
      break;
    case 16:
      value = "seize";
      break;
    case 0:
      value = "";
      break;
    case 1:
      value = "un";
      break;
    case 2:
      value = "deux";
      break;
    case 3:
      value = "trois";
      break;
    case 4:
      value = "quatre";
      break;
    case 5:
      value = "cinq";
      break;
    case 6:
      value = "six";
      break;
    case 7:
      value = "sept";
      break;
    case 8:
      value = "huit";
      break;
    case 9:
      value = "neuf";
      break;
  }
  return value;
}
function dizaine2text(n) {
  n = parseInt(n);
  var value = "";
  switch (n) {
    case 1:
      value = "dix";
      break;
    case 2:
      value = "vingt";
      break;
    case 3:
      value = "trente";
      break;
    case 4:
      value = "quarante";
      break;
    case 5:
      value = "cinquante";
      break;
    case 6:
      value = "soixante";
      break;
    case 7:
      value = "septante";
      break;
    case 8:
      value = "quatre-vingt";
      break;
    case 9:
      value = "noinante";
      break;
  }
  return value;
}
function centaine2text(n, val = "") {
  n = parseInt(n);
  var value = "";
  switch (n) {
    case 1:
      value = val;
      break;
    case 2:
      value = "deux " + val;
      break;
    case 3:
      value = "trois " + val;
      break;
    case 4:
      value = "quatre " + val;
      break;
    case 5:
      value = "cinq " + val;
      break;
    case 6:
      value = "six " + val;
      break;
    case 7:
      value = "sept " + val;
      break;
    case 8:
      value = "huit " + val;
      break;
    case 9:
      value = "neuf " + val;
      break;
  }
  return value;
}
