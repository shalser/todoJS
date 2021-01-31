//todo Effect typewriter

function writeTextByJS(id, text, speed) {

    let div = document.getElementById(id),
        txt = text.join("").split("");
    let interval = setInterval(function () {
        if (!txt[0]) {

            return clearInterval(interval);
        }

        div.innerHTML += txt.shift();
    }, speed !== undefined ? speed : 100);

    return false;
}


writeTextByJS(
    "launchTitle",
    [
        "This app is made with HTML, CSS and pure JavaScript. " +
        "The data is stored in the local database (localstorage).",
    ]
);

function buttonChangeClass() {
    let buttonAppears = document.querySelector('.launchButton')
    buttonAppears.style.visibility = 'visible'
}

setTimeout(buttonChangeClass, 11500)