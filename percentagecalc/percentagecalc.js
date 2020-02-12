var n1 = document.getElementById('num1');
var n2 = document.getElementById('num2');
var text = document.getElementById('result');
var click = document.getElementById('clickcalculate');
click.addEventListener('submit' , function(event){
    if(!n1.value  || !n2.value) {
        alert("ERROR ::: missing any field value...!!!")
    } else {
        var x = parseFloat(n1.value);
        var y = parseFloat(n2.value);
        var percent = (x/y) * 100;
        text.innerText = "Answer : " + percent + "%";
        event.preventDefault();
    }
    
});