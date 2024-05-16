$(document).ready(function(){
    
    $(".button-list-phone button").click(function(){
        $(".menu-phone").toggle();  
    })
    
    /* function tìm kiếm sản phẩm
    $(".product-list").filter("#name-product");
    $("#buy").click(function mua(){
        $name_sp=$("#name-product").text().toLowerCase();
        console.log($name_sp);
    })
    */

    //thêm sản phẩm vào giỏ
    $("#buy").click(function(){
        $(".giohang").show();
    })
    // function thanh toans
    $("#thanhtoan").click(function(){
        $("#pay-form").toggle();
    })
    document.getElementById("payment").onclick=function(){
        const listPayment=document.getElementsByName("payment");
        for (var i = 0; i < listPayment.length; i++){
            if (listPayment[i].checked === true && listPayment[i].value.indexOf('payment1') > -1 ){
                $(".payment1-detail").show();
            }
        }
    }

    
})

/*
document.addEventListener
document.getElementById("id1").onclick=function(){
    const listPayment=document.getElementsByName("payment");
    for (var i = 0; i < listPayment.length; i++){
        if (listPayment[i].checked === true){
            alert(listPayment[i].value);
        }
    }
}
   
    

  
   let ranks = ['A', 'B', 'C'];
 
ranks.forEach(function (e) {
    console.log(e); // A B C
});
    

    
