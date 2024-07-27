const display = document.getElementById("display");
let historyList = document.getElementById("history");
let history = [];

function appendToDisplay(input) {
    if(display.value === "ERROR") {
        clearDisplay();
        display.value += input;
    }
    else {
        display.value += input;
    }
    display.scrollLeft = display.scrollHeight;
    
}

function clearValue() {
    let value = display.value.toString().split('').slice(0,-1).join('');
    display.value = value;
    console.log(value)
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try{
        // display.value = eval(display.value).toFixed(2);
        let total = eval(display.value);
        if(!Number.isInteger(total)){
            total = total.toFixed(2);
        }
        
        history.push(`${display.value} = ${total}`);
        updateHistory();
        display.value = total;
    }
    catch(error) {
        display.value = "ERROR";
        console.log(error)
    }
}

function updateHistory() {
    historyList.innerHTML = "";
    history.forEach(calc => {
        let li = document.createElement("li");
        li.textContent = calc;
        historyList.appendChild(li);

        historyList.scrollTop = historyList.scrollHeight;
    });
}

function changeTheme() {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')) {
        let cal = document.querySelector(".calculator");
    cal.style.backgroundColor = "hsl(0, 0%, 30%)";

    let body = document.querySelector("body");
    body.style.backgroundColor = "beige";

    display.setAttribute("class", "changeColor")

    let btn = document.querySelectorAll("button");
    btn.forEach(button => {
        button.classList.add('changeColor');
    });
    }
    else {
        let cal = document.querySelector(".calculator");
        cal.style.backgroundColor = "beige";

        let body = document.querySelector("body");
        body.style.backgroundColor = "hsl(0, 0%, 30%)";

        display.classList.remove('changeColor')

        let btn = document.querySelectorAll("button");
        btn.forEach(button => {
            button.classList.remove('changeColor');
        })
    }
}