/**
 * Les variables
 */

let ligne;
let colonne;
let index;
let html = "";
let nombre;
const span = document.querySelector("span");
const table = document.querySelector("table");



/**
 * Main
 */

// tant que l'utilisateur ne rentre pas un chiffre, on passe pas à la suite
do {
    nombre = parseFloat(window.prompt("Veuillez saisir un nombre :"));
    if (nombre < 0) nombre *= -1;
}
while (isNaN(nombre));

// Ajout/modification du nombre dans le titre de la pge html Table de multiplication de x
span.innerHTML = nombre;

//construction du inner html du tableau
for (ligne = 1; ligne <= nombre; ligne++) {
	html += "<tr>";
	for (colonne = 1; colonne <= nombre; colonne++) {
		if (ligne == colonne) {
			html += `<td class="carre"> ${ligne * colonne} </td>`;
		}


		else {
			html += `<td> ${ligne * colonne} </td>`;
		}
	}

	html += "</tr>";
}
// On met le contenu du tableau dans le tableau
table.innerHTML = html;
