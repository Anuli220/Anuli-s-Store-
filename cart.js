let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    const box = document.getElementById("cartItem");
    const totalE1 = document.getElementById("total");
    box.innerHTML = "";
    let total = 0;
    if (cart.length === 0) {
        box.innerHTML = "<p>Your Cart Is Empty.</p>";
    }
    cart.forEach((item, i) => {
        total += item.price * item.qty;
        box.innerHTML += `
        <div class = "cartItem">
        <span>${item.name} x ${item.qty}</span>
        <div>
        <button class = "qtyBtn" onclick = "changeQty(${i}, -1)">-</button>
        <button class = "qtyBtn" onclick = "changeQty(${i}, +1)">+</button>
        </div>
        </div>
        `;
    });
    
    totalE1.innerText = total;

}

function changeQty(i, change){
    cart[i].qty += change;
    if(cart[i].qty <= 0){
        cart.splice(i, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function clearCart(){
    // There is a confirmation form the user, using the confirm function we will ask the suer if we can clear the entire cart.
    //  if it is confirmed, then we will make the cart empty and we are gonna remove the cart from the local storage. 
    if(confirm("Clear Entire Cart?")){
        cart = [];
        localStorage.removeItem("cart");
        renderCart();
    }

}

renderCart();