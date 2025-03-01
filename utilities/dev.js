// background color change-------
function bgColorChange() {
         const color = '#' + Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = color;
}

// btn click 

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');

let numberDicrease = document.getElementById('numberDicrease');
let numberIncrease = document.getElementById('numberIncrease');
let fixText = document.getElementById('fixText');
let darkText = document.getElementById('darkText');
let place = document.getElementById('place');

btn1.addEventListener('click', function () {
    updateBoard(btn1, fixText);
});

btn2.addEventListener('click', function () {
    updateBoard(btn2, darkText);
});
btn3.addEventListener('click', function () {
    updateBoard(btn3, hom);
});
btn4.addEventListener('click', function () {
    updateBoard(btn4, emoj);
});
btn5.addEventListener('click', function () {
    updateBoard(btn5, opens);
});
btn6.addEventListener('click', function () {
    updateBoard(btn6, job);
    alert ('Board update successfully finished !');
});
