// асоціативний масив слів та їх перекладів
const words = {
    apple: "яблуко",
    house: "будинок",
    mouse: "миша",
};

let mistakes = 0;
let correctAnsws = 0;
let n = +prompt("How many?");
loop1:
for (let i = 0; i < n; i++) {
    for (const key in words) {
        const element = words[key];
        //alert(key);
        let input = prompt("Input translation of " + key);
        if (input == "" || input == "!") {
            alert("!!!");
            break loop1;
        }
        if (input === words[key]) {
            alert("!");
            correctAnsws++;
        } else {
            alert("?");
            mistakes++;
        }
        alert(key + " " + words[key]);
    }
}
alert(correctAnsws + " " + mistakes);