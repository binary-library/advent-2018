//replacement of - and + to ,- and ,+
var stringdata = "-1-17-4-15-1+6-17+3-14-9-5+16+10+15+13+15+9+15+18-14+2+4-13-1+9-11+18+18-7+13-9+2-16+2+10-11+8-5-8-17+15+4+15-6+21+6-9+16+2+5-6+13-15+7+4-14-18+1+7-21-3+8+10+12-15-3+16+8+13+10+8+1+18+2-13-11+7+13+14-3-1-4+10+11+8+11-13+14+14-5-12-19-5+9+2-3+2-7+13+16+17+16+5+17-9-5+6+17-10+5-20-3-10-10+19+17+5-14+15-13+15+19+7-13-2-18+12+3-2+17-11-16-12-15+3+18-16-15-17-16-20+22-3+6+12+8-15+3+15+13-3-18-8+17-3+13-20+2+15-2-12+15+26+12+1+15+18+3-4+17+5+2-3+7+3+17+1-15+9+10-14+3-19-11-2+9-13-10-1-9+11-9-6-2+18+5+6-18+14-6+16-7-1+19+9+2+13+17+7-19+18+9-2+3+6+16-6+7-15+17-8-14-7+5-7+13+17+3-13+17-19+8+19+1+6-11+8+15-11+7-16-1-9+8-4-3-19+3+2-13-10-7-5-6+3+2+3+7-21-11+18+8+3-8-7+10-18-8+7-16-18+2-11+14+2+2+21-16+22-15+20+26-7+21+12+21-9-7-15-18+5-11-26+15+29-32-23+3-9+3-43-12-6-15-8-9-1-12-31-15+2-7+15+19-4+13+18-7-28-4+1-27-17+11-15-5+12+6+15+10-11-24+6-11+13+3+5-14-14-19-18+9-15+9+11+5+6+4+18-19+17-14+3+6-18+8+12-18-14-21+12-10-18+14+10+14+15-11+8+25+21-31-5-38-52+4-5+11+2-1-3-12+6-19-2+1-17+8-13-4-8+3-20+5-9+8-10+15+14+9-4-9-1+12-16-8+9+18+13+7-9+18-17-9+13+7+8+3-20+19-9-17-24+8+7+4+26-1-12+38-79-15+20-19+9-25+4+1+2+2-19+22-11+25-20+5-14-37+14+12+34+1+40+38-21-12+104+120+14+57-20-1-17+8+6-9-62+29+25-107+236+43+13+68519-16+8-2-17+2-18-1+2+8+10-9+12-7+15+14-7-12+13+19-16-17-19-8-18+4-1+3+4-19+18-16-10-14-6+16+17+1+14+14+3-11-19-21-17-1-10+5-9-15-8-5-4+3+2+1-7+14-19-3+7+18-4-19-12-18+2+15-19+10+16-14-14+19+14-4+1+7-19-3-16-16-17-5-9+3+16+17-2-18-18+7-10+15+13+15+5-6+9+9+3+7+6-7+10-1-5+16-5+20-9+20-13+3+13-9+11+18+10+19-16-18-2+6-15-9+19-4-7+13-9-11+3+6-11-11-10+5+23+5+18+4+9+15-2+18+7+7+16+7-9-19-15+16-2+16-5-8+11+7+19+18+18+16-12-6+8+18+16-17+16+9+9-15+3+7-16-10-11+17-3-10-10-2-5+12-15-19+12-14+19-14-12+13+2-9-14-11+3-6-6+23+13+6+5+6+5+2-10+15+13+9+11-4-9+5+20+1+18+4-10+1-12-6-5+2+1+11+1+4+11-6+12+12-17-15+17+6-2+16-18-9+8+4+19+7-2+12+6-10+2+7+7-3-10+17-12+11-12-1+5+19+8-16-7+12+7-11+19-16+17+3+17+7-8-7+12+19-5+4-12+10+20+10-14+3-13+12-14-22-6-6+11-19+21-6-12+21+6+3+18-17+15-6-16-14-17+8-5+3+3-10+12+25+3-9-20-18+6-2-2-11-6-19-17-12+18-17+6+8+1+10-1-14+9-16+19-18-3+7+19-14+13+4+16+19-11-20-14-18+7-23-37-7-7+23+18+12-17+13-5-14-19+20-13-20+4+3+10+27+3+25+52+1+3-1-19+2-25+32+36+17+10-16-14+28+30+13+10+11+10-19-7+21+16-15+2+16+36+13+10+17+6-8-5+20+7-15+5-9-14-7+17-6+16+10+16-18+12-8-16-14+20-38+25+30+60+2+13+4+19+2+5-22+18-19-13+30-6-45-2+3+7-34-16-130-24-18+4+7-10+12+8-5+12-11-3-4-1+21-15-13-17+1-31+79-1-42-41+20+52+16+54-324+68055-4+2+21+14-15+11-19+11+13-3-18+1-2+13-17+20+19+8-20-18+13-15+1-22-3-5-4+3-1-17-21+12-15+28-136507";
stringdata = stringdata.toLowerCase();
var newstring = stringdata.replace(/[ + ]/gi,",+");
newstring = newstring.replace(/-/gi,",-");
stringdata = newstring.split(/[ , ]/);
//variables we need for actual counting and saving results
var savedresults = [];
let numberarray = [];
var result = numberarray[0];
let resultfound = false;
let resultofresult;
resultofresult = 0;
//console.dir(stringdata); // for testing purposes

//transforming the string into numbers pushing it into an array
for (let i = 0; i < stringdata.length; i++) {
    var temp = Number(stringdata[i]);
    numberarray.push(temp);
}
//now starts the counting
for (let i = 0; i < numberarray.length; i++) {
    result =+ numberarray[i];
    savedresults.push(result);
    if (resultfound === false) {
        for (let j = 0; j < savedresults.length; j++) {
            if (savedresults[j] === result) {
                resultfound = true;
                console.log(result + ' is niet uniek');
                break;
            } else {
                console.log(result + ' is uniek')
            }

        }
    }
    else if(resultfound === true)
    {
    }
}


//lets now check for doubles
//for (let i = 0; i < savedresults.length; i++) {



//console.log(result);
//savedresults.forEach((element) => {
//    if (element === result);
//})


//console.dir(numberarray[0] + numberarray[1]);

// var replresminus = stringtorestoretoarray.replace(/-/gi, ",-");
// var plus = "+";
// var replressurplus = replresminus.replace(/[+]/gi, ",+");
// console.log(replressurplus);
// //we transformed the string into array-worthy characters. finna make an array right now.
// var arrayofitems = [replressurplus]
// console.dir(replressurplus)



