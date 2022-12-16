// // Modal Model-fix-password
// var modal2 = document.getElementById("Model-fix-password");
// var btn2 = document.getElementById("fix-password");
// var close2 = document.getElementsByClassName("close2")[0];
// var close_footer2 = document.getElementsByClassName("close-footer2")[0];
// var order2 = document.getElementsByClassName("order2")[0];
// btn2.onclick  = function () {
//   modal2.style.display = "block";
// }
// close2.onclick = function () {
//   modal2.style.display = "none";
// }
// close_footer2.onclick = function () {
//   modal2.style.display = "none";
// }
// order2.onclick = function () {
//   var check =document.getElementById("matkhau").value ;
//   var check2 =document.getElementById("matkhaumoi").value ;
//   var check3 =document.getElementById("xacnhanmatkhaumoi").value ;
//   if (check!="" && check2!="" && check3!="")
//   {
//     alert("Đổi mật khẩu thành công");
//   }
  
// }
// window.onclick = function (event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }

// // check nhập
// $(function() {
//   $("form[name='fix-pass']").validate({
//     rules: {
//       matkhau: "required",
//       matkhaumoi: "required",
//       xacnhanmatkhaumoi: "required",
//       tendangnhap: "required",
//       xacnhanmatkhau: "required"
//     },
//     messages: {
//       matkhau: "Hãy mật khẩu hiện tại",
//       matkhaumoi: "Hãy mật khẩu mới",
//       xacnhanmatkhaumoi: "Hãy nhập lại mật khẩu mới",
//       tendangnhap: "Hãy nhập tên đăng nhập",
//       xacnhanmatkhau: "Nhập lại mật khẩu"
//     },
//     submitHandler: function(form) {
//       form.submit();
//     }
//   });
// });