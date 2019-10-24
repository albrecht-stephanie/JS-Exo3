var prenom = prompt("Entrer votre prénom");//boite de dial et récupération de la donnée
if (prenom.trim() != ("")){ //verifie que le champ n'est pas vide
  alert(`Bonjour, ${prenom}`);
}
else{
  alert('Veuillez saisir quelque chose.')
}
/* while(lastName == ''){
  lastName = windows.prompt('entrer votre prénom');
}*///bonus
