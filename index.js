
document.getElementById("per5").onclick=function(){
    var bill=document.getElementById("billAmt").value;
    var tipTotal=(0.05)*bill;
    var noOfPpl=document.getElementById("ppl").value;
    var perPerson= tipTotal/noOfPpl;
    document.getElementById("tipToDisp").innerHTML=document.getElementById("tipToDisp").innerHTML+" "+perPerson.toFixed(2);
    var total=(bill/noOfPpl)+perPerson;
    document.getElementById("tipToDisp1").innerHTML=document.getElementById("tipToDisp1").innerHTML+" "+total.toFixed(2);
}
document.getElementById("per10").onclick=function(){
    var bill=document.getElementById("billAmt").value;
    var tipTotal=(0.1)*bill;
    var noOfPpl=document.getElementById("ppl").value;
    var perPerson= tipTotal/noOfPpl;
    document.getElementById("tipToDisp").innerHTML=document.getElementById("tipToDisp").innerHTML+" "+perPerson.toFixed(2);
    var total=(bill/noOfPpl)+perPerson;
    document.getElementById("tipToDisp1").innerHTML=document.getElementById("tipToDisp1").innerHTML+" "+total.toFixed(2);
}
document.getElementById("per15").onclick=function(){
    var bill=document.getElementById("billAmt").value;
    var tipTotal=(0.15)*bill;
    var noOfPpl=document.getElementById("ppl").value;
    var perPerson= tipTotal/noOfPpl;
    document.getElementById("tipToDisp").innerHTML=document.getElementById("tipToDisp").innerHTML+" "+perPerson.toFixed(2);
    var total=(bill/noOfPpl)+perPerson;
    document.getElementById("tipToDisp1").innerHTML=document.getElementById("tipToDisp1").innerHTML+" "+total.toFixed(2);
}
document.getElementById("per25").onclick=function(){
    var bill=document.getElementById("billAmt").value;
    var tipTotal=(0.25)*bill;
    var noOfPpl=document.getElementById("ppl").value;
    var perPerson= tipTotal/noOfPpl;
    document.getElementById("tipToDisp").innerHTML=document.getElementById("tipToDisp").innerHTML+" "+perPerson.toFixed(2);
    var total=(bill/noOfPpl)+perPerson;
    document.getElementById("tipToDisp1").innerHTML=document.getElementById("tipToDisp1").innerHTML+" "+total.toFixed(2);
}
document.getElementById("per50").onclick=function(){
    var bill=document.getElementById("billAmt").value;
    var tipTotal=(0.5)*bill;
    var noOfPpl=document.getElementById("ppl").value;
    var perPerson= tipTotal/noOfPpl;
    document.getElementById("tipToDisp").innerHTML=document.getElementById("tipToDisp").innerHTML+" "+perPerson.toFixed(2);
    var total=(bill/noOfPpl)+perPerson;
    document.getElementById("tipToDisp1").innerHTML=document.getElementById("tipToDisp1").innerHTML+" "+total.toFixed(2);
}
var cust= document.querySelector("#custom");
cust.addEventListener('keyup' ,(e) =>{
    if (e.keyCode===13) {
        var bill=document.getElementById("billAmt").value;
        cust=e.target.value;
        var tipTotal=(cust/100)*bill;
        var noOfPpl=document.getElementById("ppl").value;
        var perPerson= tipTotal/noOfPpl;
        document.getElementById("tipToDisp").innerHTML=document.getElementById("tipToDisp").innerHTML+" "+perPerson.toFixed(2);
        var total=(bill/noOfPpl)+perPerson;
        document.getElementById("tipToDisp1").innerHTML=document.getElementById("tipToDisp1").innerHTML+" "+total.toFixed(2);
        
    }
})


document.getElementById("reset").onclick=function(){
    document.getElementById("billAmt").value=" ";
    document.getElementById("custom").value=" ";
    document.getElementById("ppl").value=" ";
    document.getElementById("tipToDisp").innerHTML=" ";
    document.getElementById("tipToDisp1").innerHTML=" ";
}




