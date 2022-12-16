// // khoá tài khoản
// var btn = document.getElementById("khoataikhoan");
// btn.onclick  = function () {
//   var check =document.getElementById("mataikhoan").value ;
//   if (check!="")
//   {
//     alert("Khoá tài khoản thành công")
//   }
// }

// // kích hoạt tài khoản
// var btn3 = document.getElementById("kichhoattaikhoan");
// btn3.onclick  = function () {
//   var check =document.getElementById("mataikhoan").value ;
//   if (check!="")
//   {
//     alert("Kích hoạt tài khoản thành công")
//   }
// }

// // Modal Model-themtaikhoan
// var modal = document.getElementById("Model-themtaikhoan");
// var btn = document.getElementById("themtaikhoan");
// var close = document.getElementsByClassName("close")[0];
// var close_footer = document.getElementsByClassName("close-footer")[0];
// var order = document.getElementsByClassName("order")[0];
// btn.onclick  = function () {
//   modal.style.display = "block";
// }
// close.onclick = function () {
//   modal.style.display = "none";
// }
// close_footer.onclick = function () {
//   modal.style.display = "none";
// }
// order.onclick = function () {
//   var check =document.getElementById("tendangnhap").value ;
//   var check =document.getElementById("matkhau").value ;
//   var check3 =document.getElementById("xacnhanmatkhau").value ;
//   if (check!="" && check!="" && check3!="")
//   {
//     alert("Thêm tài khoản nhân viên thành công");
//   }
  
// }
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// // check nhập
// $(function() {
//     $("form[name='add-account']").validate({
//       rules: {
//         matkhau: "required",
//         tendangnhap: "required",
//         xacnhanmatkhau: "required"
//       },
//       messages: {
//         matkhau: "Hãy mật khẩu",
//         tendangnhap: "Hãy nhập tên đăng nhập",
//         xacnhanmatkhau: "Nhập lại mật khẩu"
//       },
//       submitHandler: function(form) {
//         form.submit();
//       }
//     });
//   });