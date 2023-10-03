let char='jezjrojkprkgptktrkotprhptrkhrthpkothkorkhpok458663255';
let randomPass='';
let lengthOfPass=8;
for(let i=0;i<lengthOfPass;i++){
    randomPass+=char.charAt(Math.floor(Math.random()*char.length));
}
console.log(randomPass);