//Regular Expression

let re, str;

re = /hello/i; //i = case Insensitive

//console.log(re);


str = 'Again Hello world Hello';
//console.log(str);
//console.log(re.source);


//exec() return Result in an array or Null ...
let result = re.exec(str);
result = re.test(str);
result = str.match(re);

result = str.search(re);
result = str.replace(re, 'reyad');

//console.log(result);

//Literal Charcter
re = /reyad/i;

//Meta Character 
re = /^reyad/i; // Must start with
re = /boy$/i; //Must end with
re = /rey.d/i; // any matches with position
re = /r*yad/i; // 0 or more times character at that potion.

re = /re?y?ad/i; // optional
re = /reyad\?/i;
str = 'Reyad is a Good Boy';


//console.log(re.exec(str));
//reTest(re, str);

function reTest(re, str) {
    if (re.test(str))
        console.log(`${str} matches ${re.source}`);
    else
        console.log(`${str} doesn't match ${re.source}`);
}