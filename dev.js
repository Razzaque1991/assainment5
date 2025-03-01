// background color change-------
function bgColorChange() {
         const color = '#' + Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = color;
}

// btn click 

let btn1 = document.getElementById('btn1');
let numberDicrease = document.getElementById('numberDicrease');
let numberIncrease = document.getElementById('numberIncrease'); 

btn1.addEventListener('click', function () {
    alert('You are select');  
    let numberValue1 = parseInt(numberDicrease.innerText, 10);
    let numberValue2 = parseInt(numberIncrease.innerText, 10);
    numberValue1 -= 1; 
    numberValue2 += 1;  
    numberDicrease.innerText = numberValue1;
    numberIncrease.innerText = numberValue2;
    btn1.disabled = true;
});