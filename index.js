var count = 0;

function increase() {
    count ++;
    
    element.innerText = count;
}

function decrease() {
    count --;
    
    element.innerText = count;
}

function reset() {
    count = 0;
    
    element.innerText = count;
    element.innerHTML = "<mark>" + "count" + "</mark>"
}

var element = document.getElementById("counter")

function selectTheme(theme) {
    document.getElementsByTagName("body")[0].className = theme;
    document.getElementsByTagName("main")[0].className = theme;
    const buttons = document.getElementsByTagName("button")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
    }
}

