// ------------------card1----------------
const card1 = localStorage.getItem("name");
if (card1 == "Deadpool: Great Irresponsibility") {
    document.getElementById("card1").style.display = "block";
}


removecard1.addEventListener("click", function () {
    document.getElementById("card1").style.display = "none";
    localStorage.removeItem("name");
    localStorage.removeItem("price");
    displayTotal();
});

// --------------------card2--------------
const card2 = localStorage.getItem("name2");
if (card2 == "Spider-Man: Friendly Neighbourhood Hero") {
    document.getElementById("card2").style.display = "block";
}
removecard2.addEventListener("click", function () {
    document.getElementById("card2").style.display = "none";
    localStorage.removeItem("name2");
    localStorage.removeItem("price2");
    displayTotal();
});

// --------------------card3--------------
const card3 = localStorage.getItem("name3");
if (card3 == "Deadpool: Action Packed") {
    document.getElementById("card3").style.display = "block";
}
removecard3.addEventListener("click", function () {

    document.getElementById("card3").style.display = "none";
    localStorage.removeItem("name3");
    localStorage.removeItem("price3");
    displayTotal();
});

// --------------------card4--------------
const card4 = localStorage.getItem("name4");
if (card4 == "TMNT: Cowabunga") {
    document.getElementById("card4").style.display = "block";
}
removecard4.addEventListener("click", function () {
    document.getElementById("card4").style.display = "none";
    localStorage.removeItem("name4");
    localStorage.removeItem("price4");
    displayTotal();
});

// --------------------card5--------------
const card5 = localStorage.getItem("name5");
if (card5 == "Kung Fu Panda: Warrior Business") {
    document.getElementById("card5").style.display = "block";
}
removecard5.addEventListener("click", function () {
    document.getElementById("card5").style.display = "none";
    localStorage.removeItem("name5");
    localStorage.removeItem("price5");
    displayTotal();
});

// --------------------card6--------------
const card6 = localStorage.getItem("name6");
if (card6 == "TSS Originals: Souled Thread") {
    document.getElementById("card6").style.display = "block";
}
removecard6.addEventListener("click", function () {
    document.getElementById("card6").style.display = "none";
    localStorage.removeItem("name6");
    localStorage.removeItem("price6");
    displayTotal();
});

// --------------------card7--------------
const card7 = localStorage.getItem("name7");
if (card7 == "Disney: Fire, Magic, Desire") {
    document.getElementById("card7").style.display = "block";
}
removecard7.addEventListener("click", function () {
    document.getElementById("card7").style.display = "none";
    localStorage.removeItem("name7");
    localStorage.removeItem("price7");
    displayTotal();
});

// --------------------card8--------------
const card8 = localStorage.getItem("name8");
if (card8 == "TSS Originals: Soul Spark") {
    document.getElementById("card8").style.display = "block";
}
removecard8.addEventListener("click", function () {
    document.getElementById("card8").style.display = "none";
    localStorage.removeItem("name8");
    localStorage.removeItem("price8");
    displayTotal();
});

// --------------------card9--------------
const card9 = localStorage.getItem("name9");
if (card9 == "Garfield: Attitude") {
    document.getElementById("card9").style.display = "block";
}
removecard9.addEventListener("click", function () {
    document.getElementById("card9").style.display = "none";
    localStorage.removeItem("name9");
    localStorage.removeItem("price9");
    displayTotal();
});

// --------------------card10--------------
const card10 = localStorage.getItem("name10");
if (card10 == "Harry Potter: Gryffindor") {
    document.getElementById("card10").style.display = "block";
}
removecard10.addEventListener("click", function () {
    document.getElementById("card10").style.display = "none";
    localStorage.removeItem("name10");
    localStorage.removeItem("price10");
    displayTotal();
});

// ------------------billing----------------- 


function displayTotal(){
const a1 = parseFloat(localStorage.getItem("price")) || 0;
const a2 = parseFloat(localStorage.getItem("price2")) || 0;
const a3 = parseFloat(localStorage.getItem("price3")) || 0;
const a4 = parseFloat(localStorage.getItem("price4")) || 0;
const a5 = parseFloat(localStorage.getItem("price5")) || 0;
const a6 = parseFloat(localStorage.getItem("price6")) || 0;
const a7 = parseFloat(localStorage.getItem("price7")) || 0;
const a8 = parseFloat(localStorage.getItem("price8")) || 0;
const a9 = parseFloat(localStorage.getItem("price9")) || 0;
const a10 = parseFloat(localStorage.getItem("price10")) || 0;

const cartTotal = a1 + a2+a3+a4+a5+a6+a7+a8+a9+a10;
document.getElementById("amtprt").innerText = cartTotal;

const gst = cartTotal*0.05;
document.getElementById("gstprt").innerText = gst.toFixed(2);

const grandtotal = cartTotal+gst;
document.getElementById("grandtotal").innerText = grandtotal;
}

window.onload = displayTotal;





