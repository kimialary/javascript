let number = prompt("De quel nombre veux-tu calculer la factorielle?");
for (let rep = number - 1; rep > 0; rep--){
   number *= (rep);
}
console.log(`Le résultat est ${number}`);