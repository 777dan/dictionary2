let words = {
    "apple": "яблуко",
    "house": "будинок",
    "mouse": "миша",
};

let statistics = {};

let isWordsReversed = false;

function play() {
    let mistakes = 0;
    let correctAnsws = 0;
    let n = +prompt("How many?");
    loop1:
    for (let i = 0; i < n; i++) {
        for (const key in words) {
            let input = prompt("Input translation of " + key);
            if (input == "" || input == "!") {
                alert("!!!");
                break loop1;
            }
            if (input === words[key]) {
                alert("!");
                statistics[key] = input;
                correctAnsws++;
            } else {
                alert("?");
                statistics[key] = input;
                mistakes++;
            }
            alert(key + " " + words[key]);
        }
    }
    alert(correctAnsws + " " + mistakes);
    for (const key in statistics) {
        let cssClass = "";
        if (statistics[key] === words[key]) {
            cssClass = "correct";
        } else {
            cssClass = "incorrect";
        }
        document.getElementById("statistics").insertAdjacentHTML(
            "beforeend",
            `<tr class="${cssClass}"><td>${key}</td><td>${statistics[key]}</td><td>${words[key]}</td></tr>`
        );
    }
}

function enUa() {
    if (isWordsReversed) {
        words = reverseWords(words);
        isWordsReversed = false;
    }
    play();
}

function uaEn() {
    words = reverseWords(words);
    isWordsReversed = true;
    play();
}

function reverseWords(words) {
    const reversedWords = {};
    for (const key in words) {
        reversedWords[words[key]] = key;
    }
    return reversedWords;
}

// function collectStatistics() {

// }