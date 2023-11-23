var nombre1 = parseInt(window.prompt("tapez un nombre"));
var operateur = window.prompt("tapez +,-,*,/");
var nombre2 = parseInt(window.prompt("tapez un nombre"));
var resultat;

if (operateur == "-")
{
    resultat = nombre1 - nombre2;
}

else if (operateur == "+")
{
    resultat = nombre1 + nombre2;
}

else if (operateur == "/")
{
    resultat = nombre1 / nombre2;
}

else if (operateur == "*")
{
    resultat = nombre1 * nombre2;
}

else
{
    window.alert("error");
}
window.alert(resultat)

