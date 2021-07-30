function auto(inter) {
    inter ++;
    inter %= 3;
    $(".swiper-container").css("transform","translateY("+ (-240 * inter)+"px)");
    // if(inter == 3){
    //     $(".swiper-container").toggleClass("no-transition");
    //     $(".no-transition").css("transform","translateY(0px)");
    //     $(".no-transition").toggleClass("swiper-container");
    //     inter = 0;
    // }
    $(".pagination .swiper-pagination-switch").removeClass("swiper-visible-switch");
    $(".swiper-pagination-switch").eq(inter).addClass("swiper-visible-switch");
    return inter;
}

$(function () {
    var timer;
    var inter = 0;
    timer = setInterval(() => {
        inter = auto(inter);
    },3000);
    $(".pagination .swiper-pagination-switch").each(function (index) { 
        $(this).click(function () {
            $(".pagination .swiper-pagination-switch").removeClass("swiper-visible-switch");
            $(this).addClass("swiper-visible-switch");
            $(".swiper-container").css("transform","translateY("+ (-240 * index)+"px)");
            clearInterval(timer);
            inter = index;
            timer = setInterval(() => {
                inter = auto(inter);
            },3000);
        });
    });
})