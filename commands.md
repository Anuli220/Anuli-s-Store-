HTML

<!-- This page represents a simple e-commerce website where users can view products and manage a shopping cart -->

<!-- The navbar is used to display the website name and the cart status -->
<!-- The cart count shows how many items the user has added so far -->

<!-- The products section is kept empty initially -->
<!-- JavaScript will dynamically insert product cards inside this section -->

<!-- Each product card will contain an image, name, price, and an Add to Cart button -->

<!-- The cart section displays all selected items -->
<!-- Cart items will be shown one below another -->
<!-- The total price section calculates and displays the sum of all product prices -->
____

CSS

/* This reset removes default spacing and ensures consistent sizing across browsers */

/* The body styling gives the page a clean background and readable layout */

/* The navbar uses flexbox to align logo and cart info on the same line */
/* Background color and padding are added to make it visually distinct */

__________________________________

/* The cart count badge is styled as a small circle to highlight number of items */

/* The products container uses CSS Grid to display items in rows and columns */
/* Auto-fit allows products to adjust according to screen size */

/* Each product card is styled to look like a clickable card */
/* Box shadow and border radius give a modern card effect */

/* Images are resized and cropped properly so all product cards look uniform */

/* Buttons are styled clearly so users understand they are clickable actions */

/* The cart section is separated visually from products for better clarity */

/* Each cart item row aligns product name and remove option neatly */

_________________________

/* ================= GLOBAL RESET ================= */
/* Remove default margin and padding from all elements */
/* Apply box sizing so width and height include padding and border */
/* Set a clean, readable font for the whole website */


/* ================= BODY STYLING ================= */
/* Give the page a full screen height */
/* Apply a modern background (solid color or gradient) */
/* Add spacing around the page so content does not touch edges */
/* Set default text color */


/* ================= NAVBAR ================= */
/* Make the navbar a flex container */
/* Place logo on the left and cart section on the right */
/* Align navbar items vertically in the center */
/* Add padding inside the navbar */
/* Apply a background color or glass effect */
/* Round the corners of the navbar */
/* Add margin below the navbar */


/* ================= CART COUNT BADGE ================= */
/* Style the cart count as a small badge */
/* Use a contrasting background color */
/* Make the badge circular */
/* Adjust font size */
/* Add spacing between cart text and badge */


/* ================= PRODUCTS CONTAINER ================= */
/* Make the products container a flex container */
/* Allow product cards to wrap to the next row */
/* Add spacing between product cards */
/* Center product cards horizontally */


/* ================= PRODUCT CARD ================= */
/* Give each product card a fixed width */
/* Add padding inside the card */
/* Apply a background color */
/* Round the corners of the card */
/* Add shadow to create depth */
/* Align text to center */

/* Use flex inside the product card */
/* Arrange card content vertically */
/* Distribute space evenly between elements */


/* ================= PRODUCT IMAGE ================= */
/* Set image width to fill the card */
/* Fix image height for uniform look */
/* Crop image properly without stretching */
/* Round image corners */


/* ================= PRODUCT TEXT ================= */
/* Add spacing above and below product name */
/* Adjust font size for readability */
/* Reduce opacity for price text */


/* ================= ADD TO CART BUTTON ================= */
/* Make button full width */
/* Add padding for comfortable clicking */
/* Remove default border */
/* Round button corners */
/* Apply background color */
/* Change cursor to pointer */
/* Add hover effect for interaction */


/* ================= CART SECTION ================= */
/* Separate cart section from products using margin */
/* Apply background color */
/* Add internal padding */
/* Round corners of cart section */
/* Increase font size of cart heading */


/* ================= CART ITEM ROW ================= */
/* Make each cart item row a flex container */
/* Place item name on the left */
/* Place remove option on the right */
/* Align items vertically */
/* Add space between rows */
/* Add subtle bottom border */


/* ================= REMOVE BUTTON ================= */
/* Use red color to indicate delete action */
/* Change cursor to pointer */
/* Slightly reduce font size */


/* ================= TOTAL PRICE ================= */
/* Add spacing above total price */
/* Increase font size */
/* Make total price bold */

______________________________________________________

JS

/* ================= PRODUCT LIST ================= */
/* Create an array to store product names */
/* Create another array to store product prices */
/* Create another array to store product images */
/* Keep same index for name, price, and image */


/* ================= CART ARRAYS ================= */
/* Create an empty array to store cart product names */
/* Create an empty array to store cart product prices */
/* Cart arrays will grow when user adds products */


/* ================= SHOW PRODUCTS ================= */
/* Create a function to show products on the page */
/* Select the products container from HTML */
/* Clear old content from the container */
/* Use a loop to go through product name array */
/* For each index, display product name */
/* Display price using price array at same index */
/* Display image using image array at same index */
/* Add an Add to Cart button for each product */
/* Pass the index number when button is clicked */


/* ================= ADD TO CART ================= */
/* Create a function to add product to cart */
/* Receive index number of clicked product */
/* Push product name into cart name array */
/* Push product price into cart price array */
/* Save cart arrays into localStorage */
/* Call function to update cart display */


/* ================= UPDATE CART ================= */
/* Create a function to show cart items */
/* Select cart container from HTML */
/* Clear old cart display */
/* Set total price variable to zero */
/* Use a loop to go through cart arrays */
/* Display cart product name and price */
/* Add product price to total */
/* Show total price on page */
/* Show number of items in cart */


/* ================= REMOVE ITEM ================= */
/* Create a function to remove item from cart */
/* Receive index number of cart item */
/* Remove product name from cart name array */
/* Remove product price from cart price array */
/* Update localStorage */
/* Refresh cart display */


/* ================= PAGE LOAD ================= */
/* When page opens, show products */
/* Load cart arrays from localStorage */
/* Update cart display */


________________________


# 🛒 Cart Page – Commands / Instructions

> Purpose:  
> These are **commands only**.  
> No code is written here.  
> Anuli will convert these instructions into actual HTML, CSS, and JavaScript.

---

## 1️⃣ Page Setup
- Create a new HTML page named **cart.html**
- Set the page title as **“FlexShop – Cart”**
- Apply the **same gradient background** used on the product page
- Use the **same font family** to maintain design consistency

---

## 2️⃣ Cart Container
- Create a **centered main container** for the cart
- Apply a **glassmorphism style**
  - Semi-transparent background
  - Blur effect
  - Rounded corners
- Set a **maximum width** so the cart looks clean on large screens
- Add internal padding for spacing

---

## 3️⃣ Cart Heading
- Add a heading at the top of the container
- Text should be: **“Your Cart”**
- Add spacing below the heading

---

## 4️⃣ Load Cart Data
- Read cart data from **localStorage**
- Use the **same key name** as the product page
- If no data is found:
  - Treat the cart as empty

---

## 5️⃣ Empty Cart Handling
- If the cart is empty:
  - Display the message: **“Your cart is empty 🛒”**
- Do not render cart item rows in this case

---

## 6️⃣ Cart Items Display
For each item in the cart:
- Display the **product name**
- Display the **quantity**
- Arrange content in a **horizontal row**
- Add a divider line between items

---

## 7️⃣ Quantity Controls
For each cart item:
- Add a **minus (−) button**
  - Decreases quantity by 1
- Add a **plus (+) button**
  - Increases quantity by 1
- If quantity becomes **zero**:
  - Remove the item from the cart completely
- Save the updated cart back to localStorage after every change

---

## 8️⃣ Price Calculation
- Calculate total price using:
  - `price × quantity` for each item
- Display the **final total price** at the bottom of the cart
- Update the total dynamically whenever quantities change

---

## 9️⃣ Clear Whole Cart Button
- Add a **full-width button** at the bottom of the cart
- Button text: **“Clear Whole Cart”**
- On click:
  - Ask for confirmation
  - If confirmed:
    - Remove cart data from localStorage
    - Reset cart to empty
    - Show empty cart message

---

## 🔟 Navigation
- Add a **“Continue Shopping”** link below the cart
- Clicking it should navigate back to the product page

---

## 1️⃣1️⃣ User Experience Rules
- All cart interactions should:
  - Update cart items
  - Update quantities
  - Update total price
- No page reloads allowed
- Layout should remain clean, readable, and user-friendly

---

## 🎯 Explanation Note
This cart page:
- Only manages cart operations
- Does not display products
- Shares data with the product page using **localStorage**