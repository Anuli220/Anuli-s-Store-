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