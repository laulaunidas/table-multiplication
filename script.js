let ligne;
let colonne;
let index;

const span = document.querySelector("span");
const table = document.querySelector("table");
let html = "";
let nombre;




do {
    nombre = parseFloat(window.prompt("Veuillez saisir un nombre :"));
}
while (isNaN(nombre) == true);

span.innerHTML = nombre;


for (ligne = 1; ligne <= nombre; ligne++) {
    html += "<tr>"
    for (colonne = 1; colonne <= nombre; colonne++) {
        if (ligne == colonne) {
            html += `<td class="carre"> ${ligne * colonne} </td>`
        }


        else {
            html += `<td> ${ligne * colonne} </td>`;
        }
    }

    html += "</tr>";
}

table.innerHTML = html;
