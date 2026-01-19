const productsData = [
    { id: 1, name: "Shoes", price: 30, image: "data:image/webp;base64,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" },
    { id: 2, name: "Jackets", price: 25, image: "https://th.bing.com/th/id/OIP.XG8oa1aGaGKQqfMaBJxmOAHaJ3?w=185&h=308&c=7&r=0&o=7&pid=1.7&rm=3" },
    { id: 3, name: "Headphones", price: 10, image: "data:image/webp;base64,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" },
    { id: 4, name: "Plants", price: 13, image: "https://th.bing.com/th/id/OIP.RUhNTS3WPgvJ6O9U4VEyAAHaE8?w=208&h=150&c=6&o=7&pid=1.7&rm=3" },
    { id: 5, name: "Tissues", price: 5, image: "https://th.bing.com/th/id/OIP.vvOfZZFZ6vI19L-HeMr3NAHaHa?w=266&h=200&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 6, name: "Clocks", price: 15, image: "https://th.bing.com/th/id/OIP.6xlxCp2WW1tfdtfu8Y8OjQHaIJ?w=237&h=192&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 7, name: "Water", price: 1, image: "https://th.bing.com/th/id/OIP.dXO8crcv4pEkpbCg7Hj1MAHaLE?w=115&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 8, name: "Books", price: 3, image: "https://th.bing.com/th/id/OIP.Rvbiarj69MV6wk_E5NvV_AHaHa?w=219&h=219&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 9, name: "Pens", price: 2, image: "https://th.bing.com/th/id/OIP.1vA--VJ_3b5naDajCktFzgHaHj?w=187&h=191&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 10, name: "Pencils", price: 2, image: "https://th.bing.com/th/id/OIP.hxsa9seXGgXZgWnc8W2UHAHaHT?w=208&h=206&c=7&r=0&o=7&pid=1.7&rm=3"}
]

// let cart = JSON.parse(localStorage.getItem("cart")) || [];
// // If you can get the cart class from HTML, get it or leave it empty

// function renderProducts(data) {
//     const box = document.getElementById("products");
//     box.innerHTML = "";
//     data.forEach(product => {
//         box.innerHTML += `
//         <div class = "product">
//           <img src = "${product.image}">
//           <h3>${product.name}</h3>
//           <p>${product.price}</p>
//           <button onclick = "addToCart(${product.id})">Add To Cart</button>
//           <button onclick = "explore(${product.id})">Explore</button>
//         </div>
//         `
//     });
// }

// function addToCart(id) {
//     const item = productsData.find(p => p.id === id);
//     // cart.push(item);
//     // localStorage.setItem("cart",JSON.stringify(cart));
//     // updateCart();
//     const existing = cart.find(p => p.id === id);
//     if (existing) {
//         existing.qty++;
//     } else {
//         cart.push({ ...item, qty: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
// }


// // function updateCart(){
// //     const cartsItemsDiv = document.getElementById("cartItems");
// //     const totalE1 = document.getElementById("total");
// //     const cartCount = document.getElementById("cartCount");
// //     cartsItemsDiv.innerHTML = "";
// //     let total = 0;
// //     cart.forEach((item, index) => {
// //         total += item.price;
// //         cartsItemsDiv.innerHTML += `
// //         <div class = "cartItem">
// //             <span>${item.name} - £${item.price}</span>
// //             <span class = "remove" onclick = "removeItem(${index})">Remove</span>
// //         </div>
// //         `;
// //     });
// //     totalE1.innerText = total;
// //     cartCount.innerText = cart.length;
// // }


// // UpsateCartCount function

// function updateCartCount() {
//     document.getElementById("cartCount").innerText = cart.reduce((a, b) => a+b.qty, 0);
// }

// // function removeItem(index) {
// //     cart.splice(index, 1);
// //     localStorage.setItem("cart", JSON.stringify(cart));
// //     updateCart();
// // }

// // Search function

// document.getElementById("search").addEventListener("input", e => {
//     const val = e.target.value.toLowerCase();
//     renderProducts(
//         productsData.filter(p => p.name.toLowerCase().includes(val))
//     );
// })

// function explore(){
    
// }

// renderProducts(productsData);
// updateCartCount();



const box = document.getElementById("products");

productsData.forEach(p=>{
  box.innerHTML += `
    <div class="product">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>

      <!-- ONLY EXPLORE BUTTON -->
      <button onclick="exploreCategory('${p.category}')">
        Explore
      </button>
    </div>
  `;
});

/* ========== EXPLORE FUNCTION ========== */
function exploreCategory(category){
  window.location.href =
    "explore.html?category=" + category;
}