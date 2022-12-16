// Modal  Model-fix-inf
var modal = document.getElementById("Model-fix-inf");
var btn = document.getElementById("fix-inf");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick  = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  var check =document.getElementById("hoten").value ;
  var check2 =document.getElementById("diachi").value ;
  var check3 =document.getElementById("email").value ;
  if (check!="" && check2!="" && check3!="")
  {
    alert("Chỉnh sửa thông tin thành công");
  }
  
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
