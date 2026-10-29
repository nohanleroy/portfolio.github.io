/* Changement de couleurs */

const selecteur = document.querySelector("#theme"); /* Choisir le thème */
 
function appliquerTheme(nom) {
    document.documentElement.setAttribute("data-theme", nom);
} /* Appliquer le thème */
 
/* Récupère le thème de la visite précédente */

let themeSauvegarde = null; 
try {
    themeSauvegarde = localStorage.getItem("theme");
} catch (e) {
} /* Intercepte une erreur */
 
/* Applique le thème sauvegardé */

if (themeSauvegarde) {
    appliquerTheme(themeSauvegarde);
    selecteur.value = themeSauvegarde;
}
 
/* Détecter le changement de thème */

selecteur.addEventListener("change", () => {
    appliquerTheme(selecteur.value);
    try {
        localStorage.setItem("theme", selecteur.value);
    } catch (e) {
    }
});

/* Déplier les listes de missions */

document.querySelectorAll("#parcours li > ul, #parcours li > .detail").forEach((contenu) => { /* exécute le bloc entre accolades */
    const li = contenu.parentElement; /* Donne l'élément qui contient la sous-liste ou le détail */
    li.classList.add("depliable"); /* Crée la classe depliable pour déclencher les règles du CSS */
    li.addEventListener("click", () => li.classList.toggle("ouvert")); /* Attend le clic et ajoute ou retire la classe ouvert */
});