var x = document.getElementById('myFieldset');
x.style.display = "none";

function myFunction(a){

    return a*7;
}

function myFirstFunction(number){
    for(var i=0; i < number; i++){
        console.log(i);
    }
    return 10;
}

function buttonFunction(){
    console.log('This is event listener function');
    var element = document.getElementById("demo");
    element.innerHTML="This is event listener text";
}

function showXY(e){
    var x = e.clientX; 
    var y = e.clientY;

    var coords = "X coords: " + x + ", <br> Y coords: " + y;
    document.getElementById.apply("coordinates").innerHTML=coords;
}

function validateForm(){
    var fname = document.forms["myForm"]["fname"].value;
    var email = document.forms.myForm.email.value;
    alert(email);

    if(email==null || comments.lenght < 3){
        document.forms.myForm.email.style.borderColor = "red";
        document.getElementById("feedback").innerHTML = "<b>*Fill in properly</b>"
        return false;
    }
}

function showExtraFields(){
    var y = document.getElementById('myFieldset');
    y.style.display="block";
}