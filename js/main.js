/**
 * Mon premier JavaScript
 * @author Lucien Crelier <Lucien.Crelier@divtec.ch>
 * @verison 0.1
 * @since 2023.08.29
 */
'use strict';

// Récupère le premier h1
let h1 = document.querySelector('h1');

// Retourne tout les <p> dans un tableau
let tabPara = document.querySelectorAll('p');

// Affiche le contenu des variables h1 et TabPara
console.log(h1, tabPara);

// Affiche le premier <p>
console.log(tabPara[0]);

// Récupération bouton Ajouter
let btAjouter = document.querySelector('.ajouter');
let inputArticle = document.getElementById('article');
let ulArticles = document.querySelector('ul.Articles');
console.log(ulArticles);

// Ecoute événement click du bouton
btAjouter.addEventListener('click', () => {
    ulArticles.innerHTML += '<li>' + inputArticle.value + '</li>';
    //vide le champs Article
    inputArticle.value = '';
} );

// Demander l'âge du visiteur
let ageVisiteur = prompt('Quel âge as-tu ?');

// Transformer l'âge du visiteur en entier
ageVisiteur = parseInt(ageVisiteur);
console.log();

// Tester si c'est un nombre
if (isNaN(ageVisiteur)) {
    alert('Erreur, entre un nombre !');
} else {
    // affiche l'âge du visiteur
    alert(`Tu as ${ageVisiteur} ans`);
}