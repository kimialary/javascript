let userEntries = prompt("Salut bienvenue dans ma super pyramide! Combien d'étages veux tu?");

for (let i = 1; i <= userEntries; i++){
    console.log(` ${" ".repeat(userEntries - i) + "#".repeat(i)}`);
}