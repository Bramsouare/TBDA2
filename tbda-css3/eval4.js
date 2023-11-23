var article = parseInt(window.prompt("tapez le prix d'un produit"));
var quantite = parseInt(window.prompt("tapez la quantité des produit"));
var tot = article * quantite;
var remise;
var port;
var totalfinal;
var remiseeuro = 0;

if (tot >= 100 && tot <= 200) 
{
    remise = 5;
}

else if (tot > 200) 
{
    remise = 10;
}

else  
{
    remise = 0;
}

remiseeuro = (remise / 100) * tot; 
var totalremise = tot - remiseeuro;

if (tot - remise > 500) 
{
    port = 0;
}
else if (totalremise <= 500)
{ 
    port = totalremise * 0.02 ;
        if (port < 6) 
    {
        port = 6;

    }

}
var porteuro = port;
totalfinal = totalremise + porteuro - remiseeuro;

console.log("l'article + la quantité est de "+tot);
console.log("la remise est de " + remise + " %");
console.log("la remise en euro est de "+remiseeuro);
console.log("le total - la remise est de " + totalremise + " euro");
console.log("les frais de port sont de " + port + " euro");
console.log("le montant total à payer est de " + totalfinal + " euro");
