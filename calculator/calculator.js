// addition function
function add() {
    let a = Number(document.getElementById("one").value);
    let b = Number(document.getElementById("two").value);
    ans = a + b;
    document.getElementById("ans").value = ans;
}

// subtraction function
function sub() {
    let a = Number(document.getElementById("one").value);
    let b = Number(document.getElementById("two").value);
    ans = a - b;
    document.getElementById("ans").value = ans;
}

// multi function
function multi() {
    let a = Number(document.getElementById("one").value);
    let b = Number(document.getElementById("two").value);
    ans = a * b;
    document.getElementById("ans").value = ans;
}

// division fucntion
function divi() {
    let a = Number(document.getElementById("one").value);
    let b = Number(document.getElementById("two").value);
    ans = a / b;
    document.getElementById("ans").value = ans;
}