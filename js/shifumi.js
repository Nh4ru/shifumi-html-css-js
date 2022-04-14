// Déclaration des variables
const choix = ["Pierre", "Feuille", "Ciseaux"];


/* Fonction random */
function randomz() {
    let out = "";
    out = Math.floor(Math.random() * 3);
    return out;
}

/* Fonction jeu qui renvoi e, v, d en cas de victoire, défaite ou égalité */
function jeu(joueur, ordi) {
    /* Premier IF */
    if (joueur === ordi) {
        return "e";
    }
    /* Deuxieme IF */
    if (joueur === 0) {
        if (ordi === 2) {
            return "v";
        } else {
            return "d";
        }
    }
    /* Troisieme IF */
    if (joueur === 1) {
        if (ordi === 0) {
            return "v";
        } else {
            return "d";
        }
    }
    /* Quatrieme IF */
    if (joueur === 2) {
        if (ordi === 1) {
            return "v";
        } else {
            return "d";
        }
    }
}

/**** Partie DOM *****/
//Nous allons récupérer ou insérer des valeurs se trouvant sans des balises

let win = document.getElementById("vict");
let loss = document.getElementById("def");
let draw = document.getElementById("draw");
let reset = document.getElementById("btn_reset")

// historique
let hist_win = document.getElementById("hist_vict");
let hist_loss = document.getElementById("hist_def");
let hist_draw = document.getElementById("hist_draw");

/* Je vais placer un (ecouteur) sur chaques element ayant une classe .image */
//Déclaration d'une variable
let ls_img = document.querySelectorAll(".objet-jeu");

ls_img.forEach((element, keys) => {
    element.addEventListener('click', () => {
        // window.alert(key);
        console.log(jeu(keys, randomz()));
        save(jeu(keys, randomz()));
    });
});

// Création d'une fonction de stockage
function save(result) {
    if (result === 'v') {
        win.textContent = Number(win.textContent) + 1;
        localStorage.setItem("win", win.textContent);
        localStorage.setItem("win",Number(victStock)+Number(win.textContent));
    }
    else if (result === 'd') {
        loss.textContent = Number(loss.textContent) + 1;
        localStorage.setItem("loss", loss.textContent);
        localStorage.setItem("loss",Number(lossStock)+Number(loss.textContent));
    }
    else {
        draw.textContent = Number(draw.textContent) + 1;
        localStorage.setItem("draw", draw.textContent);
        localStorage.setItem("draw",Number(drawStock)+Number(draw.textContent));
    }
}

// Création d'une fonction de comptage
win.textContent = localStorage.getItem("win");
loss.textContent = localStorage.getItem("loss");
draw.textContent = localStorage.getItem("draw");

let victStock = localStorage.getItem("win");
let lossStock = localStorage.getItem("loss");
let drawStock = localStorage.getItem("draw");

hist_win.textContent = localStorage.getItem("win");
hist_loss.textContent = localStorage.getItem("loss");
hist_draw.textContent = localStorage.getItem("draw"); 

// Réinitialisation des scores
reset.addEventListener("click", function () {
    win.textContent = localStorage.clear("win");
    loss.textContent = localStorage.clear("loss");
    draw.textContent = localStorage.clear("draw");
    location.reload();
})

