

function init(){
    document.getElementById("account").innerHTML = JSON.parse(localStorage.getItem("account")).tendangnhap;
    let cart= '{"listmon":[],"sdtkhachhang":"","diachigiaohang":"","tuychon":"","tongtien":0}';
    var object = JSON.parse(cart);
    window.localStorage.setItem("cart",JSON.stringify(object));
}

function showToast(message,icon){
    $.toast({
      heading: 'Thông báo',
      text: message,
      position: 'top-right',
      icon: icon
  })
  }