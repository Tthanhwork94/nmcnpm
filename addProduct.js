// button thêm sản phẩm
var btn3 = document.getElementById("themsp");
btn3.onclick  = function () {
  var check =document.getElementById("tensanpham").value ;
  var check2 =document.getElementById("soluongton").value ;
  var check3 =document.getElementById("giasanpham").value ;
  if (check!="" && check2!="" && check3!="")
  {
    alert("Thêm sản phẩm thành công")
  }
}