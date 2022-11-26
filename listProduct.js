// Modal model-chitietsanpham
var modal2 = document.getElementById("model-chitietsanpham");
var btn2 = document.getElementById("chitietsanpham");
var close2 = document.getElementsByClassName("close")[0];
var close_footer2 = document.getElementsByClassName("close-footer")[0];
var order2 = document.getElementById("luuSP");
btn2.onclick  = function () {
  var check =document.getElementById("masanpham").value ;
  if (check!="")
  {
    modal2.style.display = "block";
  }
}
close2.onclick = function () {
  modal2.style.display = "none";
}
close_footer2.onclick = function () {
  modal2.style.display = "none";
}
order2.onclick = function () {
  var check =document.getElementById("masanpham").value ;
  var check2 =document.getElementById("giasanpham").value ;
  if (check!="" && check2!="")
  {
    alert("Lưu thay đổi thành công");
  }
}
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// check nhập trong chỉnh sửa
$(function() {
  $("form[name='fix-product']").validate({
    rules: {
      tensanpham: "required",
      giasanpham: "required"
    },
    messages: {
      tensanpham: "Hãy nhập tên sản phẩm",
      giasanpham: "Hãy nhập giá sản phẩm"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
