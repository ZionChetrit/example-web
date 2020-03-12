function checkOrder() {
    let orderNumberView = document.getElementById("orderNumber");
    let orderNumber = orderNumberView.value;
    if (orderNumber === "1000") {
        alert("Coo Coo!");
    } else {
        alert("Wrong id number: " + orderNumber);
    }
}

function load() {
    let sendButton = document.getElementById("sendButton");
    sendButton.onclick = checkOrder;
}