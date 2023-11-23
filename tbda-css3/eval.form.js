var envoyer = document.getElementById("soumettre");
envoyer.addEventListener("click", function () {

    validation();
});


function validation() {

    var nom = document.getElementById("nom").value;
    var n_manquant = document.getElementById("n_manquant");
    var n_validation = /^[a-z]+$/;

    var prenom = document.getElementById("prenom").value;
    var p_manquant = document.getElementById("p_manquant");
    var p_validation = /^[a-z]+$/;

    var femme = document.querySelector('input[name="femme"][value="femme"]');
    var homme = document.querySelector('input[name="homme"][value="homme"]');
    var se_manquant = document.getElementById("se_manquant");

    var date = document.getElementById("date").value;
    var d_manquant = document.getElementById("d_manquant");
    var d_validation = /^[0-9]+[-0-9]+[-0-9]+$/;

    var cp = document.getElementById("cp").value;
    var c_manquant = document.getElementById("c_manquant");
    var c_validation = /^[0-9]{5}$/;

    var email = document.getElementById("email").value;
    var e_manquant = document.getElementById("e_manquant");
    var email_validation = /^[a-z]+@[a-z]+\.[a-z]+$/;


    var sujet = document.getElementById("sujet");
    var s_manquant = document.getElementById("s_manquant");

    var valider = document.querySelector('input[name="traitement"]:checked');
    var va_manquant = document.getElementById("va_manquant");

    var question = document.getElementById("informations").value;
    var i_manquant = document.getElementById("i_manquant");
    var i_validation = /^[a-z]+$/;




    if (n_validation.test(nom) == false) {
        n_manquant.textContent = "entrer en minuscule le nom de la societer s.v.p !";
        n_manquant.style.color = "red";
    }
    else {
        n_manquant.textContent = "";
    };


    if (p_validation.test(prenom) == false) {
        p_manquant.textContent = "entrer la personne à contacter s.v.p !";
        p_manquant.style.color = "red";
    }
    else {
        p_manquant.textContent = "";
    };


    if (!homme.checked && !femme.checked) {
        se_manquant.textContent = "cochez une case s.v.p !";
        se_manquant.style.color = "red";
    }
    else {
        se_manquant.textContent = "";
    };


    if (d_validation.test(date) == false) {
        d_manquant.textContent = "entrer la date s.v.p !";
        d_manquant.style.color = "red";
    }
    else {
        d_manquant.textContent = "";
    };


    if (c_validation.test(cp) == false) {
        c_manquant.textContent = "entrer code postal s.v.p !";
        c_manquant.style.color = "red";
    }
    else {
        c_manquant.textContent = "";
    };


    if (email_validation.test(email) == false) {
        e_manquant.textContent = "entrer le mail s.v.p !";
        e_manquant.style.color = "red";
    }
    else {
        e_manquant.textContent = "";
    };


    if (sujet.value === "sujett") {
        s_manquant.textContent = "Sélectionnez un sujet dans la liste.";
        s_manquant.style.color = "red";
    } else {
        s_manquant.textContent = "";
    };


    if (!i_validation.test(question)) {
        i_manquant.textContent = "veuillez tapez votre question uniquement en minuscule s.v.p !";
        i_manquant.style.color = "red";
    }
    else {
        i_manquant.textContent = "";
    };


    if (!valider) {
        va_manquant.textContent = "Cochez l'une des options s.v.p !";
        va_manquant.style.color = "red";
    } else {
        va_manquant.textContent = "";
    }
};

