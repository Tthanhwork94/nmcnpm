function setLocalAccount(tentaikhoan){
    axios.get("http://localhost:8080/api/taikhoan/"+tentaikhoan)
    .then(function(res){
        let taikhoan = res.data;
        localStorage.setItem("account",JSON.stringify(taikhoan));
    })
};

function init(){
    document.getElementById("account").innerHTML = JSON.parse(localStorage.getItem("account")).tentaikhoan;
    let cart= '{"listmon":[],"sdtkhachhang":"","diachigiaohang":"","tuychon":"","tongtien":0}';
    var object = JSON.parse(cart);
    window.localStorage.setItem("cart",JSON.stringify(object));
};

function logout(){
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("account");
    window.localStorage.removeItem("cart");
    // setTimeout(function() {
    //     window.location.href = "/index.html";
    //    }, 100);
};

function showToast(message,icon){
    $.toast({
      heading: 'Thông báo',
      text: message,
      position: 'top-right',
      icon: icon
  })
};

function renderPagination(){
    let max=localStorage.getItem("totalPage");
    let pagination = document.getElementById("pagination");
    let element1 =`
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                              <li class="page-item"><a class="page-link" href="#">Previous</a></li>`
    for(let i = 1 ; i<= max;i++){
        element1+=`<li class="page-item"><a class="page-link" href="#">${i}</a></li>`
    }                           
    let element3=`<li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>`

    pagination.innerHTML=element1+element3;
}