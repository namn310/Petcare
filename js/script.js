$(document).ready(function(){
    $(".button-list-phone button").click(function(){
        $(".menu-phone").toggle();  
    })
    
    // function tìm kiếm sản phẩm
    $(".product-list").filter("#name-product");
    $("#buy").click(function mua(){
        $name_sp=$("#name-product").text().toLowerCase();
        console.log($name_sp);
    })
    
})