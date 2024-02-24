function validateForm(){
    var email = document.forms.myForm.email.value;
    var comment = document.forms.myForm.comment.value;
    alert(email);
    alert(comment);

    // Error messages if email too short etc.

    if(email.length < 6 || email.length > 15){
        document.forms.myForm.email.style.borderColor = "red";
        document.getElementById("feedback").innerHTML = "<b>*Email contains 6-15 characters</b>";
        return false;
    }
    if(comment==null){
        document.forms.myForm.comment.style.borderColor = "red";
        document.getElementById("feedback").innerHTML = "<b>*Field can not be empty</b>";
        return false;
    }
    if(comment.length < 1 || comment.length > 50){
        document.forms.myForm.comment.style.borderColor = "red";
        document.getElementById("feedback1").innerHTML = "*field must be between 1-50 characters";
        return false;
    }
    if(!email.includes('@')){
        document.forms.myForm.email.style.borderColor = "red";
        document.getElementById("feedback").innerHTML = "*Email needs @";
        return false;
    }
    //*if(comment.lenght >= 1 && comment.length <= 50) {
       //*console.log();
    //*
}

 function calculatePrice() {

    var years = parseInt(document.getElementById('years').value);
    var type = document.getElementById('type').value;
    
    var prices = {
        "Basic": 10,
        "Premium": 15,
        "Gold": 20,
        "Platinum": 25
    };
    
    var totalPrice = prices[type] * years;
    
    // Calculating discount for 2 years
    var discount = 0;
    var discountMessage = "";
    
    if (years >= 2) {
        discount = 0.2;
        discountMessage = "Congratulations! You got 20% discount!";
    }

    // Calculating additional discount on top of first
    
    if (years >= 5) {
        discount += 0.05; // extra 5% discount
        discountMessage += " And, after 5 years you will receive an extra 5€ discount!";
    }
    
    totalPrice -= totalPrice * discount;
    
     // Display the total price
    document.getElementById('cost').value = totalPrice.toFixed(2) + "€";
    document.getElementById('discountMessage').innerText = discountMessage;
    }

function showExtraField(){
    var selectContact = document.getElementById("inputType");
    var selectedValue = selectContact.value;
    var extraField = document.getElementById("myFieldset");
    var content = document.getElementById("content");

    if (selectedValue ==="email") {
        extraField.style.display = "block";
        content.innerText = "Provide your email: ";
    } else if (selectedValue ==="phone") {
        extraField.style.display = "block";
        content.innerText = "Provide your phone number with area code: ";
    } else if (selectedValue ==="sms") {
        extraField.style.display = "block";
        content.innerText = "Provide your phone number with area code: ";
    }

}
document.getElementById("type").onchange = showExtraField;
