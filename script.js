const prenom = "Victor"
const nom = "Puillet"
let age = 18 
    //nom = "oui" //il ne peut que y avoir une seul constante dans meme nom

console.log(prenom)
console.log(nom)
console.log(age)

if (age <13) {
    console.log("Accès interdit aux moins de 13 ans.")
} else if (age <18) {
    console.log("Vous pouvez accéder à la section ado.")
} else {
    console.log("Bienvenue dans l'espace adulte.")
}

for (let i = 0 ; i <= 10; i++) {
    console.log("7*"+i+"="+(7*i))
}       

const calculerMoyenne = (note1, note2) => {
    const moyenne = (note1 + note2) / 2;
    return moyenne;
};

// Raccourci ultime si la fonction ne fait qu'un return sur une seule ligne
const additionner = (a, b) => a + b;

const saluer = (prenom) => {
    return "Bonjour," + prenom + " ! Comment vas-tu ?"
}
console.log(saluer("Victor"));






const toto = "kayak";
const inversé = toto.split('').reverse('').join('');

console.log(inversé);


