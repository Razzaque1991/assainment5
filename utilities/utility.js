function updateBoard(button, taskText) {
    alert('Board update successfully');  
    
    let numberValue1 = parseInt(numberDicrease.innerText, 10);
    let numberValue2 = parseInt(numberIncrease.innerText, 10);
    let time = new Date();  
    let updateTime = time.toLocaleTimeString();  

    let p = document.createElement('p');
    p.innerText = `You have completed the task ${taskText.innerText} at ${updateTime}`;
    
    place.appendChild(p);
    numberDicrease.innerText = numberValue1 - 1;
    numberIncrease.innerText = numberValue2 + 1;
    button.disabled = true;
}