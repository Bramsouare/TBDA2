var age;
var petit = 0;
var moyen = 0;
var grand = 0;
var vieux = 0;

do {
    age = parseInt(window.prompt("Tapez votre âge"));

    if (age < 20) 
    {
        petit++;
    }
    else if (age >= 20 && age <= 40) 
    {
        moyen++;
    }
    else if (age > 40 && age < 100) 
    {
        grand++;
    }
    else if (age >= 100) 
    {
        vieux++;
    }
} while (age < 100);

if (vieux > 0) 
{
    alert("Vous avez atteint 100 ans");
}

window.alert("age petit : " + petit);
window.alert("age moyen : " + moyen);
window.alert("age grand : " + grand);
window.alert("age vieux : " + vieux);