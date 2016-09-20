$(function () {


    //导航切换

    var main_home = $('.main_home').offset().top; //获取内容区域到页面顶部距离
    var main_about = $('.main_about').offset().top;
    var main_work = $('.main_work').offset().top;
    var main_practice = $('.main_practice').offset().top;
    var main_contacts = $('.main_contacts').offset().top;

    $('.menu_home').click(function () { //鼠标点击滑到相应区域
        $('html,body').animate({ scrollTop: main_home }, 500);
    });
    $('.menu_about').click(function () {
        $('html,body').animate({ scrollTop: main_about }, 500);
    });
    $('.menu_work').click(function () {
        $('html,body').animate({ scrollTop: main_work }, 500);
    });
    $('.menu_practice').click(function () {
        $('html,body').animate({ scrollTop: main_practice }, 500);
    });
    $('.menu_contacts').click(function () {
        $('html,body').animate({ scrollTop: main_contacts }, 500);
    });

    $(".practice a").hover(function () {
        $(this).addClass("practice_hover");
    }, function () {
        $(this).removeClass("practice_hover");
    });

})