confirm("Would you like to go on a date with me?");
var a=prompt("where do you want to go with me? (press 1 for indoor date, 2 for outdoor date.)");
if(a==1){
var b=prompt("For cafe date press 1. For date at home press 2.");
}
else if(a==2){
var c=prompt("For movie date press 1. For dinner date press 2. For lunch date press 3.");
}
else{
    alert("You choose a wrong answer.");
}
if(b==1 || b==2 || c==1 || c==2 || c==3){
    alert("Chalo chalte hai fhir");
}
else{
    alert("Tu nai chale tu badhu khotu khotu lakhe che byeee!!!");
}