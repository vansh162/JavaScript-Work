// -------------goto cart btn------------
document.getElementById("cartbtn").addEventListener("click", function(){
    window.open("cart.html","_blank");
})


// -------------filters checkbox------------

document.getElementById("alldisplay").addEventListener("change", function(){
    if(this.checked){
        document.getElementById("cardd1").style.display="block";
        document.getElementById("cardd2").style.display="block";
        document.getElementById("cardd3").style.display="block";
        document.getElementById("cardd4").style.display="block";
        document.getElementById("cardd5").style.display="block";

        document.getElementById("cardd6").style.display="block";
        document.getElementById("cardd7").style.display="block";
        document.getElementById("cardd8").style.display="block";
        document.getElementById("cardd9").style.display="block";
        document.getElementById("cardd10").style.display="block";
    }
});

document.getElementById("mendisplay").addEventListener("change", function(){
    if(this.checked){
        document.getElementById("cardd1").style.display="block";
        document.getElementById("cardd2").style.display="block";
        document.getElementById("cardd3").style.display="block";
        document.getElementById("cardd4").style.display="block";
        document.getElementById("cardd5").style.display="block";

        document.getElementById("cardd6").style.display="none";
        document.getElementById("cardd7").style.display="none";
        document.getElementById("cardd8").style.display="none";
        document.getElementById("cardd9").style.display="none";
        document.getElementById("cardd10").style.display="none";
    }
});

document.getElementById("womendisplay").addEventListener("change", function(){
    if(this.checked){
        document.getElementById("cardd1").style.display="none";
        document.getElementById("cardd2").style.display="none";
        document.getElementById("cardd3").style.display="none";
        document.getElementById("cardd4").style.display="none";
        document.getElementById("cardd5").style.display="none";

        document.getElementById("cardd6").style.display="block";
        document.getElementById("cardd7").style.display="block";
        document.getElementById("cardd8").style.display="block";
        document.getElementById("cardd9").style.display="block";
        document.getElementById("cardd10").style.display="block";
    }
});


// -----------card1-------------------
document.getElementById("cartcheckbox").addEventListener("change", function(){
    if(this.checked){
        document.getElementById("outcart").style.display= "block";
        document.getElementById("incart").style.display="none";

        localStorage.setItem("name", "Deadpool: Great Irresponsibility");
        localStorage.setItem("price", 999);
    }
    
    else{
        document.getElementById("outcart").style.display="none";
        document.getElementById("incart").style.display="block";


        localStorage.removeItem("name","Deadpool: Great Irresponsibility");
        localStorage.removeItem("price",999);
    }
});

// -----------card2-------------------
document.getElementById("cartcheckbox2").addEventListener("change", function(){
    if(this.checked){
        document.getElementById("outcart2").style.display= "block";
        document.getElementById("incart2").style.display="none";

        localStorage.setItem("name2", "Spider-Man: Friendly Neighbourhood Hero");
        localStorage.setItem("price2", 1799);
    }
    
    else{
        document.getElementById("outcart2").style.display="none";
        document.getElementById("incart2").style.display="block";


        localStorage.removeItem("name2", "Spider-Man: Friendly Neighbourhood Hero");
        localStorage.removeItem("price2", 1799);
    }
});
// -----------card3-------------------
document.getElementById("cartcheckbox3").addEventListener("change", function(){
    if(this.checked){
        document.getElementById("outcart3").style.display= "block";
        document.getElementById("incart3").style.display="none";

        localStorage.setItem("name3", "Deadpool: Action Packed");
        localStorage.setItem("price3", "1199");
    }
    
    else{
        document.getElementById("outcart3").style.display="none";
        document.getElementById("incart3").style.display="block";


        localStorage.removeItem("name3", "Deadpool: Action Packed");
        localStorage.removeItem("price3", "1199");
    }
});
// -----------card4-------------------
document.getElementById("cartcheckbox4").addEventListener("change", function(){
    if(this.checked){
        document.getElementById("outcart4").style.display= "block";
        document.getElementById("incart4").style.display="none";

        localStorage.setItem("name4", "TMNT: Cowabunga");
        localStorage.setItem("price4", "1049");
    }
    
    else{
        document.getElementById("outcart4").style.display="none";
        document.getElementById("incart4").style.display="block";


        localStorage.removeItem("name4", "TMNT: Cowabunga");
        localStorage.removeItem("price4", "1049");
    }
});
// -----------card5-------------------
document.getElementById("cartcheckbox5").addEventListener("change", function(){
    if(this.checked){
        document.getElementById("outcart5").style.display= "block";
        document.getElementById("incart5").style.display="none";

        localStorage.setItem("name5", "Kung Fu Panda: Warrior Business");
        localStorage.setItem("price5", "999");
    }
    
    else{
        document.getElementById("outcart5").style.display="none";
        document.getElementById("incart5").style.display="block";


        localStorage.removeItem("name5", "Kung Fu Panda: Warrior Business");
        localStorage.removeItem("price5", "999");
    }
});
// -----------card6-------------------
document.getElementById("cartcheckbox6").addEventListener("change", function(){
    if(this.checked){
        document.getElementById("outcart6").style.display= "block";
        document.getElementById("incart6").style.display="none";

        localStorage.setItem("name6", "TSS Originals: Souled Thread");
        localStorage.setItem("price6", "1299");
    }
    
    else{
        document.getElementById("outcart6").style.display="none";
        document.getElementById("incart6").style.display="block";


        localStorage.removeItem("name6", "TSS Originals: Souled Thread");
        localStorage.removeItem("price6", "1299");
    }
});
// -----------card7-------------------
document.getElementById("cartcheckbox7").addEventListener("change", function(){
    if(this.checked){
        document.getElementById("outcart7").style.display= "block";
        document.getElementById("incart7").style.display="none";

        localStorage.setItem("name7", "Disney: Fire, Magic, Desire");
        localStorage.setItem("price7", "699");
    }
    
    else{
        document.getElementById("outcart7").style.display="none";
        document.getElementById("incart7").style.display="block";


        localStorage.removeItem("name7", "Disney: Fire, Magic, Desire");
        localStorage.removeItem("price7", "699");
    }
});
// -----------card8-------------------
document.getElementById("cartcheckbox8").addEventListener("change", function(){
    if(this.checked){
        document.getElementById("outcart8").style.display= "block";
        document.getElementById("incart8").style.display="none";

        localStorage.setItem("name8", "TSS Originals: Soul Spark");
        localStorage.setItem("price8", "999");
    }
    
    else{
        document.getElementById("outcart8").style.display="none";
        document.getElementById("incart8").style.display="block";


        localStorage.removeItem("name8", "TSS Originals: Soul Spark");
        localStorage.removeItem("price8", "999");
    }
});
// -----------card9-------------------
document.getElementById("cartcheckbox9").addEventListener("change", function(){
    if(this.checked){
        document.getElementById("outcart9").style.display= "block";
        document.getElementById("incart9").style.display="none";

        localStorage.setItem("name9", "Garfield: Attitude");
        localStorage.setItem("price9", "799");
    }
    
    else{
        document.getElementById("outcart9").style.display="none";
        document.getElementById("incart9").style.display="block";


        localStorage.removeItem("name9", "Garfield: Attitude");
        localStorage.removeItem("price9", "799");
    }
});
// -----------card10-------------------
document.getElementById("cartcheckbox10").addEventListener("change", function(){
    if(this.checked){
        document.getElementById("outcart10").style.display= "block";
        document.getElementById("incart10").style.display="none";

        localStorage.setItem("name10", "Harry Potter: Gryffindor");
        localStorage.setItem("price10", "899");
    }
    
    else{
        document.getElementById("outcart10").style.display="none";
        document.getElementById("incart10").style.display="block";


        localStorage.removeItem("name10", "Harry Potter: Gryffindor");
        localStorage.removeItem("price10", "899");
    }
});