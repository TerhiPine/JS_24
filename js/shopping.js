function calculate() {
    var quantity = parseInt(document.getElementById('quantity').value);
    var price = parseFloat(document.getElementById('price').value);
    var tax = parseFloat(document.getElementById('tax').value);
    var discount = parseFloat(document.getElementById('discount').value);
    var shipping = parseFloat(document.getElementById('shipping').value);

    // Apply discount doubling if quantity is greater than 100
    if (quantity > 100) {
        discount *= 2;
    }

    var subtotal = quantity * price;
    var totalTax = (subtotal * tax) / 100;
    var totalDiscount = (subtotal * discount) / 100;

    var total = subtotal + totalTax - totalDiscount + shipping;

    document.getElementById('total').value = total.toFixed(2);
}

document.getElementById('submit-calculate').addEventListener('click', calculate);
