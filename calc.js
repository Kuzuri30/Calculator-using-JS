let screen = document.getElementById('screen');
buttons = document.getElementsByTagName('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        buttonId = e.target.id;
        if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue);
        }
       else if(buttonText == "DEL"){
           screen.value = screen.value.substr(0, screen.value.length -1);   
           screenValue = screen.value;
       }
       else if(buttonText =="ABS"){
           screen.value = Math.abs(screen.value);
           screenValue = screen.value;
       }
        else {
            screenValue += buttonText
            screen.value = screenValue;
        }
    })
}