
function num(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    var result = document.getElementById('result').value;
    do {
        var finalResult = eval(result);
        document.getElementById('result').value = finalResult;
    } while (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearAll() {
    document.getElementById('result').value = '';
}


let heading = document.getElementById('heading')
let name = prompt('what is your name ?')
heading.innerHTML += name ? name : 'user'