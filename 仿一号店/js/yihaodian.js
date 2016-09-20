var yihaodian = {
    Init: function () {

        $(".hd_unlogin_warp").hover(function () {
            $(this).addClass("hd_unlogin_warp_hover");
        }, function () {
            $(this).removeClass("hd_unlogin_warp_hover");
        });

        $(".hd_indxProvce").hover(function () {
            $(this).addClass("hd_indxProvce_hover");
        }, function () {
            $(this).removeClass("hd_indxProvce_hover");
        });

        $(".hd_menu_tit").hover(function () {
            $(this).addClass("hd_menu_tit_hover");
        }, function () {
            $(this).removeClass("hd_menu_tit_hover");
        });

        $(".hd_weixin").hover(function () {
            $(this).addClass("hd_weixin_hover");
        }, function () {
            $(this).removeClass("hd_weixin_hover");
        });

        $(".hd_search_tab").hover(function () {
            $(this).addClass("hd_search_tab_hover");
        }, function () {
            $(this).removeClass("hd_search_tab_hover");
        });

        /*搜索切换商品或店铺*/
        $('#hdSearchTab a').click(function () {
            var seclect_tab = $(this).attr("tab");
            var tab = $("#hdSearchTab").attr("tab");
            var first = $("#hdSearchTab a").eq(0);
            var second = $("#hdSearchTab a").eq(1);
            tab = seclect_tab;
            if (tab == "2") {
                first.text("店铺");
                second.text("商品");
                first.attr("tab", "2");
                second.attr("tab", "1");
                $("#hdSearchTab").attr("tab", "2");
            }
            else {
                first.text("商品");
                second.text("店铺");
                first.attr("tab", "1");
                second.attr("tab", "2");
                $("#hdSearchTab").attr("tab", "1");
            }
            $("#hdSearchTab").removeClass("hd_search_tab_hover");
        });

        $(".hd_mini_cart").hover(function () {
            $(this).addClass("hd_mini_cart_hover");
        }, function () {
            $(this).removeClass("hd_mini_cart_hover");
        });

        $(".hd_allsort li").hover(function () {
            $(this).addClass("cur");
        }, function () {
            $(this).removeClass("cur");
        });

        $(".sg_banner").hover(function () {
            $(this).addClass("sg_banner_hover");
        }, function () {
            $(this).removeClass("sg_banner_hover");
        });

        /*大轮播*/
        var big_num = 1;//若赋值为0，自动轮播时第一张图会停止两倍的时间

        //图片切换函数
        function jumper(n) {
            //$('.mod_promo_show .promo_wrapper li').eq(n).addClass('broadcast').siblings().removeClass('broadcast');
            //方法二siblings获取所有同胞元素
            $('.mod_promo_show .promo_wrapper li').eq(n).fadeIn(300).siblings().fadeOut(300);
            $('.mod_promonum_show ol li').eq(n).addClass('cur').siblings().removeClass('cur');
        }

        //点击底部切换
        $('.mod_promonum_show ol li').hover(function () {
            var i = $(this).index();
            jumper(i);
            big_num = i + 1;//改变全局变量的值，以便自动轮播能够衔接上
        })
        //左右切换（上一页下一页）
        $('.mod_promo_show a.show_next').click(function () {
            var i = $('.mod_promonum_show ol li.cur').index();
            jumper(i + 1);
            big_num = i + 2;
        })
        $('.mod_promo_show a.show_pre').click(function () {
            var i = $('.mod_promonum_show ol li.cur').index();
            jumper(i - 1);
            big_num = i ;
        })
        var big_carousel = setInterval(auto, 3000);
        function auto() {
            if (big_num == $('.mod_promonum_show ol li').length) { big_num = 0; }
            jumper(big_num); big_num++;
        }

        $('.mod_promo_show a.show_next,.mod_promonum_show ol li,.mod_promo_show a.show_pre').mouseover(function () {
            clearInterval(big_carousel);//点击切换时，自动轮播暂停
        });
        $('.mod_promo_show a.show_next,.mod_promonum_show ol li,.mod_promo_show a.show_pre').mouseout(function () {
            big_carousel = setInterval(auto, 3000);//点击切换后，自动轮播继续
        });

        //轮播左右箭头显示
        $(".mod_promo_show").hover(function () {
            $(this).addClass("mod_promo_show_hover");
        }, function () {
            $(this).removeClass("mod_promo_show_hover");
        });




        /*小轮播*/

        var small_num_1 = 1;
        var img_pisition_1 = $('#Import_Sea_Purchase .b_con .slider_index_ad .img_box');
        var bottom_toggle_1 = $('#Import_Sea_Purchase .trig_box li a');
      
        function small_jumper_1(n) {
            switch (n) {
                case 0:
                    img_pisition_1.css("left", "0px");
                    break;
                case 1:
                    img_pisition_1.css("left", "-330px");
                    break;
                case 2:
                    img_pisition_1.css("left", "-660px");
                    break;
               
            }          
            bottom_toggle_1.eq(n).addClass('cur').siblings().removeClass('cur');
   
        }
        //点击底部切换
        bottom_toggle_1.hover(function () {
            var i = $(this).index();
              bottom_toggle_1.removeClass('cur');
            small_jumper_1(i);
            small_num_1= i + 1;//改变全局变量的值，以便自动轮播能够衔接上
        })
      
        var small_carousel_1 = setInterval(small_auto_1, 3000);
        function small_auto_1() {
            if (small_num_1 == bottom_toggle_1.length)
            { small_num_1= 0; }
            small_jumper_1(small_num_1);
            small_num_1++;
        }

       bottom_toggle_1.mouseover(function () {
           clearInterval(small_carousel_1);//点击切换时，自动轮播暂停
        });
       bottom_toggle_1.mouseout(function () {
           small_carousel_1 = setInterval(small_auto_1, 3000);//点击切换后，自动轮播继续
        });
       






        $('.main_toolbar .action').click(function () {
            var action = $(this).attr("action");
            switch (action) {
                case "showTeamMembers":
                    showTeamMembers();
                    break;
                case "showTitle":
                    showTitle();
                    break;
            }
        });

        function showTeamMembers() { }
        function showTitle() { }









    }

}