//Events of Javascript


//EventListener
let sampleButton = document.getElementById('sampleButton');
let divArea = document.querySelector('#container');
divArea.classList.add('bg-gray-200');


// divArea.addEventListener('mousemove', message)
//console.log(sampleButton);


// function message(e) {
//     let val = e;
//     val = e.target.id;
//     val = e.timeStamp;
//     val = e.type;

//     val = e.clientX;

//     val = e.offsetX;
    

//     val = this;
//     this.style.background = `#${e.offsetX}`;
//     console.log(e.offsetX,e.offsetY);
//     console.log(val);

//     console.log('Reyad');
// }


let fromFiled = document.querySelector('#fullName');
let fromResult = document.querySelector('#demo');

fromFiled.addEventListener('focus',test);
fromFiled.addEventListener('keyup',test2);

function test(e)
{
   this.classList.add('hover:bg-rose-500');
   this.classList.add('hover:text-white');
   console.log('Focused!');
}

function test2(e)
{
    fromResult.innerText = this.value;
    console.log(this.value);  
}

