var prenom = ["audrey", "aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
var chercher = "audrey";
var tr = false;
var i;
for (i = 0; i < prenom.length; i++) {
    if (prenom[i] == chercher) {

        tr = true;
        break;
    }
}

if (tr) {
    for (i = i + 1; i < prenom.length - 1; i++) {
        prenom[i] = prenom[i + 1];
    

    }
    prenom.pop();
    window.alert("le prénom " + chercher + " est trouvé et supprimer et se situe a : " + i);

} else {

    window.alert("le prénon " + chercher + " est pas trouvé");

}
console.log(prenom);