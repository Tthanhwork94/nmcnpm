// Modal exampleModal
var modal = document.getElementById("exampleModal");
var btn = document.getElementById("detail");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
btn.onclick  = function () {
  var check =document.getElementById("madonhang").value ;
  if (check!="")
  {
    modal.style.display = "block";
  }
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

// button đã giao
var btn2 = document.getElementById("dagiao");
btn2.onclick  = function () {
  var check =document.getElementById("madonhang").value ;
  if (check!="")
  {
    alert("Đơn hàng giao thành công")
  }
}

