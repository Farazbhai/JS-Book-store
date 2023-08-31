const object = [
  {
    id: 1,
    price: 2000,
    name: 'Bulle & Pelle',
    description: 'BySAVANNA WALKER',
    img: 'Assats/image/1.jpg'
  },
  {
    id: 2,
    price: 2200,
    name: 'Peter and the Wolf',
    description: 'ByJOHN WALKER',
    img: 'Assats/image/2.jpg'
  },
  {
    id: 3,
    name: 'When the Doves',
    price: 300,
    description: 'ByHOF NURGIN',
    img: 'Assats/image/3.jpg'
  },
  {
    id: 4,
    price: 20,
    name: 'The Assault',
    description: 'ByMESHO BUVAHR, SI MODARSK',
    img: 'Assats/image/4.jpg',
  },
  {
    id: 5,
    price: 20,
    name: 'BySAVANNA WALKER',
    description: 'BySAVANNA WALKER',
    img: 'Assats/image/5.jpg',
  },
  {
    id: 6,
    price: 20,
    name: 'ByJOHN WALKER',
    description: 'Peter and the Wolf',
    img: 'Assats/image/6.jpg',
  },
  {
    id: 7,
    price: 20,
    name: 'ByHOF NURGIN',
    description: 'When the Doves',
    img: 'Assats/image/7.jpg',
  },
  {
    id: 8,
    price: 20,
    name: 'ByMESHO BUVAHR, SI MODARSK',
    description: 'The Assault',
    img: 'Assats/image/8.jpg',
  },
];
getData()
function getData() {
  let html = ''
  for (index = 0; index < object.length; index++) {
    let item = object[index];
    html += `
<div class="col-sm col-md-3">
        <a href="detail.html"><img class="w-100" src="${item.img}" alt=""></a>
        <p class="text-center mt-3">${item.price}</p>
        <span class="spn fw-bold">${item.description}</span>
        <p class="pera mt-3">${item.name}</p>
        QNTY:<input id="qty${index}" minlength="1" maxlength="1" class="w-25 rounded border-1" type="number"><br>
        <button onclick="AddtoCard(${index})"  class="mt-2 rounded border-1 border-black bg-black text-light p-2">Add to card</button><br>
     </div>`
  };
  document.getElementById('TableData').innerHTML = html
}
function AddtoCard(index) {
  let student = object[index];
  let qtyVal = document.getElementById('qty' + index).value
  let cartItems = [];
  if (!localStorage.getItem('cart')) {
    cartItems = [];
  } else {
    cartItems = JSON.parse(localStorage.getItem('cart'));
  }
  let exists = 0;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === student.id) {
      exists = 1;
    }
  }
  if (exists === 0) {
    student = { ...student, ...{ quantity: qtyVal } }
    cartItems.push(student)
    localStorage.setItem('cart', JSON.stringify(cartItems))
  } else {
    alert('Already Exists')
  }
  countCartItems();
}
function countCartItems() {
  let Items = [];
  if (!localStorage.getItem('cart')) {
    Items = [];
  } else {
    Items = JSON.parse(localStorage.getItem('cart'));
  }
  document.getElementById('countCartItems').innerHTML = Items.length;
};


