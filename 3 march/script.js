
let body = document.getElementsByTagName('body')[0];
function randomColor() {
    let color = "#";
    let hex = "0123456789ABCDEF";
    for (i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16);
        color += hex[randomNumber];
    }
    return color;
}



let start;
function startChangingColor() {
    start = setInterval(theColor, 500)
    function theColor() {
        body.style.backgroundColor = randomColor();
    }


    
}
function stopChangingColor() {
    clearInterval(start);
}

