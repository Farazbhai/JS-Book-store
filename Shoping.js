shoping();
function shoping() {
    let cartItem = []
    if (!localStorage.getItem('cart')) {
        cartItem = [];
    } else {
        cartItem = JSON.parse(localStorage.getItem('cart'));
    }
    let html = ""
    let totalQty = 0;
    let totalPrice = 0;
    for (index = 0; index < cartItem.length; index++) {
        let item = cartItem[index]
        totalQty += item.quantity
        totalPrice += item.price * item.quantity;
        html += `<tr>
         <td scope="col">${item.id}</td>
         <td colspan="2"> <img width="50px" src="${item.img}"></td>
         <td scope="col">${item.description}</td>
         <td scope="col">${item.quantity}</td>
         <td scope="col">${item.price}</td>
         <td scope="col">${item.price * item.quantity}</td>
         <th scope="col"><button class="btn btn-warning text-light fs-3" onclick="deleteCartItem(${index})">-</button></th>
     </tr>`;
    };
    document.getElementById('CartTable').innerHTML = html;
    document.getElementById('totalQty').innerHTML = totalQty;
    document.getElementById('totalPrice').innerHTML = totalPrice;
}
function deleteCartItem(index) {
    let cartItem = []
    if (!localStorage.getItem('cart')) {
        cartItem = [];
    } else {
        cartItem = JSON.parse(localStorage.getItem('cart'));
    }
    cartItem.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItem))
    shoping();
};


