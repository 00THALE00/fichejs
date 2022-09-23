console.log("hello");
let age;
age=17;
console.log(age);
console.log("string");
console.log(typeof(age));
const prenom = 'Arthur';
console.log(typeof(prenom));


// exemple d'une addition 
let addition = 4 + 12;
console.log(addition);


// exemple d'une soustraction 
let soustraction = 2 - 50;
console.log(soustraction);





// exemple d'une multiplication
let multiplication = 3*8;
console.log(multiplication);



// exemple d'une division 
let division = 7/2;
console.log(division);


// exemple d'un modulo
let modulo = 5% 2;
console.log(modulo);


// exemple d'un booléan
let test = 3>5;
console.log(test);
console.log(typeof(test));




// alors les 8 opérateurs sont ; 1.< 2.<= 3. > 4.>= 5.== 6.=== 7.!= 8.!== 


const identity = "Bonjour" + " " + prenom + " " + "vous avez" + " " + age + " " + "ans";
console.log(typeof(identity));
let majuscule = identity.toUpperCase();
console.log(identity);
console.log(majuscule);


// j'ai copier le contenu de "identity" et l'est mis en majuscule "ToUpperCase"


age= prompt("age");
if (age <= 0) {
    console.log("VOUS ÊTES UN POISSON (PANÉ)");
}


if  (age <= 120 && age > 0) {
   console.log("Votre âge est validé");
} else {
    console.log("Je ne suis pas d'accord");
}


if (age >= 21 ) {
    console.log("VOUS ÊTES MAJEUR");
}else if (age < 21 && age >= 18) {
    console.log("VOUS ÊTES MAJEUR MAIS PAS AUX USA");
}else {
    console.log("VOUS ÊTES MINEUR");
}
    



// 1.! 2.&& 3.||
































