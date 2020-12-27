const franc = require('franc');
const langs = require('langs');
const input = process.argv[2];
const langcode=franc(input);
//console.log(langcode);
if(langcode==='und'){
    console.log("Sorry couldnot find the language");
}
else{
    const language=langs.where("3",langcode);
console.log(`Our guess : ${language.name}`);
}
