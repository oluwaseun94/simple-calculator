let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map((button, index) => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'DEL' :
              if(display.innerText) {
                display.innerText = display.innerText.slice(0, -1)
              }
              break;
            case '=' : 
              if(display.innerText) {
                display.innerText = eval(display.innerText);
              }
              break;
              case '√' :
              if(display.innerText) {
                display.innerText = sqrt(display.innerText)
              }

            default :
              display.innerText += e.target.innerText;
        }
    })
})