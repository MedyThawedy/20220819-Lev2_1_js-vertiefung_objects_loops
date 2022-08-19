let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

/*
Greife auf die Objekte im Array mit Hilfe von map(), forEach(), filter() zu.
Der Code dazu ist im Kommentarbereich.*/
let index1 = 0;

//Verwende map() und greife auf alle namen zu.
//Verwende map() und greife auf alle preiseGramEuro zu.
//Verwende map() und greife auf alle veraenderung zu.
edelMetallPreise.map(({ name, preiseGramEuro, veraenderung }) => {

    console.log("Es wurde auf diesem Objekt im Array mit Hilfe von einer map() Funktion zugegriffen! ");
    console.log('Index = ' + index1 + ', Name = ' + name + ', PreiseGramEuro = ' + preiseGramEuro + ', Veranderung = ' + veraenderung);
    index1 = index1 + 1;
});

// Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.
// Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.
// Verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array.
console.log('---------------------------------------forEach()---------------------------------------');
let index2 = 0;
let arrayNames = [];
let arrayPreiseGramEuro = [];
let arrayVeraenderung = [];
edelMetallPreise.forEach(({ name, preiseGramEuro, veraenderung }) => {
    //arrayNames[index2] = name;
    arrayNames.push(name);
    //preiseGramEuro[index2] = preiseGramEuro;
    arrayPreiseGramEuro.push(preiseGramEuro);
    arrayVeraenderung.push(veraenderung);

    console.log("Es wurde auf diesem Objekt im Array mit Hilfe von einer forEach() zugegriffen! ");
    console.log('Index = ' + index2 + ', Name = ' + name + ', PreiseGramEuro = ' + preiseGramEuro + ', Veranderung = ' + veraenderung);
    index2 = index2 + 1;
});

console.log('--------------------------------------- Array mit Namen ---------------------------------------');
console.log('Array mit Namen = ' + arrayNames);
console.log('Array mit PreiseGramEuro = ' + arrayPreiseGramEuro);
console.log('Array mit Veraenderungen = ' + arrayVeraenderung);

//Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu 
console.log('--------------------------------------- filter ---------------------------------------');
let erg = edelMetallPreise.filter(
    ({ name, preiseGramEuro, veraenderung }) => {
        return preiseGramEuro > 50;
    }
);
console.log(erg);

/*
Gib alles als Tabelle in deinem HTML - Dokument aus.
*/
function gebeAllesAlsTabelleAus() {
    document.write('<table><tr><th>Name</th><th>Preise Gram Euro</th><th>Veraenderung</th></tr>');


    for (let i = 0; i < edelMetallPreise.length; i++) {
        document.write('<tr><td>' + edelMetallPreise[i].name + '</td><td>' + edelMetallPreise[i].preiseGramEuro + '</td><td>' + edelMetallPreise[i].veraenderung + '</td></tr>');
    }
    document.write('</table>');
}
gebeAllesAlsTabelleAus();



