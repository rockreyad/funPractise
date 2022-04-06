// Error handeling

//console.log('Before Error');

let a = 2;

try {
    if (a > 15) throw 'Too Big';
    else if (a < 24) throw 'Too Small';
} catch (e) {
    //console.log(e);

}