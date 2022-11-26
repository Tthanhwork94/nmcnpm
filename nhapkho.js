// xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
  })
}

// update cart 
function updatecart() {
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
      var cart_row = cart_rows[i]
      var price_item = cart_row.getElementsByClassName("cart-price ")[0]
      var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
      var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
      var quantity = quantity_item.value // lấy giá trị trong thẻ input
      total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
    // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
  }

  // thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}

// Thêm vào giỏ
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {

    var button = event.target;
    var product = button.parentElement.parentElement;
    var title = product.getElementsByClassName("content-product-h3")[0].innerText;
    var price = product.getElementsByClassName("price")[0].innerText;
    var maNCU = product.getElementsByClassName("idNCU")[0].innerText;
    addItemToCart(title, price, maNCU);
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    // modal.style.display = "block";
    
    updatecart();
  })
}

function addItemToCart(title, price, maNCU) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cart_title = cartItems.getElementsByClassName('cart-item-title')
  //Nếu title của sản phẩm bằng với title mà bạn thêm vao giỏ hàng thì sẽ thông báo cho user.
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      return
    }
  }

  //var cartNCU = document.getElementsByClassName('cart-maNCU')[0]
  var cart_idNCU = document.getElementById('maNCU').value;
  //Nếu mã nhà cung ứng  khác với mã nhà cung ứng mà bạn thêm vao giỏ hàng thì sẽ thông báo cho user.
  if (cart_idNCU != maNCU) {
    alert('Sản Phẩm được cung cấp bởi nhà cung ứng khác. Vui lòng chọn đúng nhà cung ứng')
    return
  }

  var cartRowContents = `
  <div class="cart-item cart-column">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}

var order = document.getElementById("nhaphang");
order.onclick = function () {
  var check =document.getElementById("ngaynhap").value ;
  if (check!=""){
  for (var i = 0; i < order.length; i++) {
          var button = order[i]
          button.addEventListener("click", function () {
            var button_remove = event.target
            button_remove.parentElement.parentElement.remove()
          })
        }
    alert("Phiếu nhập đã được gửi đến nhà cung ứng thành công")
    }
  }
 