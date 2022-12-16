// validate input 
$(function() {
    $("form[name='add-product']").validate({
      rules: {
        tensanpham: "required",
        soluongton: "required",
        giasanpham: "required",
        manhacungung: "required",
        madonhang: "required",
        masanpham: "required",
        ngaynhap: "required",
        doanhthungay: "required",
        doanhthuthang: "required",
        hoten: "required",
        diachi: "required",
        email: "required",
        mataikhoan: "required"
      },
      messages: {
        tensanpham: "Hãy nhập tên sản phẩm",
        soluongton: "Hãy nhập số lượng tồn",
        giasanpham: "Hãy nhập giá sản phẩm",
        manhacungung: "Hãy nhập mã nhà cung ứng",
        madonhang: "Hãy nhập mã đơn hàng",
        masanpham: "Hãy nhập mã sản phẩm",
        ngaynhap: "Hãy nhập ngày nhập",
        doanhthungay: "Hãy nhập ngày",
        doanhthuthang: "Hãy nhập tháng",
        hoten: "Hãy nhập họ tên",
        diachi: "Hãy nhập địa chỉ",
        email: "Hãy nhập email",
        mataikhoan: "Hãy nhập mã tài khoản"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

