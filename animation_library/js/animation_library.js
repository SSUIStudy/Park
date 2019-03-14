
         $(document).ready(function(){
             
             function intro(){
                var bgLR = $('.bgL,.bgR');
                var intro = $('.intro');
                var wrap =  $('.wrap');
                intro.click(function(){        
                wrap.removeClass('fadeout')       
                bgLR.addClass('bg_ani_open');
                bgLR.removeClass('bg_ani_close');
                    setTimeout(function(){
                        intro.removeClass('on')
                        wrap.addClass('fadein')
                    },1000);
                });
                $('.home').click(function(){
                   intro.addClass('on')
                    wrap.removeClass('fadein')
                    wrap.addClass('fadeout')
                    bgLR.addClass('bg_ani_close');
                    bgLR.removeClass('bg_ani_open');
                });
             };

             function nav_click(e){
                 var navList = $('nav ul li');
                 navList.click(function(){
                    var bgDepth = $('.bg__depth')
                    var num = $(this).index() ;
                    var num_1 = num - 1;
                    var menuList_wrap =  $('.menu ul');
                    var menuList_eq = $('.menu ul:eq('+ num_1 +')');

                    bgDepth.removeClass('on');
                    if(num > 0 && num < 4){
                        navList.removeClass(e);
                        menuList_wrap.removeClass(e);
                        $(this).addClass(e);
                        menuList_eq.addClass(e);
                        $('.bg_box').removeClass('on');  
                        $('.sample_box div').removeClass('on');                                           
                    }else if(num == 4){
                        navList.removeClass(e);
                        menuList_wrap.removeClass(e);
                        $(this).addClass(e);
                        menuList_eq.addClass(e);
                        $('.sample_box div').removeClass('on');
                        $('.bg_box').addClass('on');
                    }
                    
                 });
             };

             function menuList_click(list_class,sampleBox_class){
                var menuList =  $('.menu ul li');
                menuList.click(function(){
                    var menuList_class = $(this).attr('class');
                    var sample = $('.sample_box div');
                    var bgDepth = $('.bg__depth')
                    if(menuList_class == list_class){
                        sample.removeClass('on'); 
                        bgDepth.removeClass('on');                           
                        menuList.removeClass('active');
                        $('.'+ sampleBox_class +'').addClass('on');
                        $(this).addClass('active');
                    }
                });

             };

             function bg_depth_click(a,b){
                 var bgDepthList = $('.bg__depth ul li');
                 var bgBox = $('.bg_box');                

                 bgDepthList.click(function(){ 
                     var num = $(this).index() + 1;
                     var ken_burns = $(this).parents('div').hasClass(a);
                     var img_change = $(this).parents('div').hasClass(b);
                     var thisTxt = $(this).text();

                     bgDepthList.removeClass('active');
                     $(this).addClass('active');

                     if(ken_burns){
                        bgBox.removeClass();
                        bgBox.addClass('bg_box');
                        bgBox.addClass('on');
                        bgBox.addClass(thisTxt);
                     }else if(img_change){
                        bgBox.removeClass();
                        bgBox.addClass('bg_box');
                        bgBox.addClass('on');
                        bgBox.addClass(thisTxt);
                     }
                 });
             };                          
             intro('ken_burns','img_change');
             nav_click('active');
             menuList_click('fadeIn_li','basic');
             menuList_click('fadeIn_li_2','fadeIn2');
             menuList_click('fadeIn_li_4','fadeIn4');
             menuList_click('popIn_li','popIn');
             menuList_click('flip-img_li','flip-img');
             menuList_click('unfold_bounce_li','unfold_bounce');
             menuList_click('zoom_li','zoom');
             menuList_click('vanish_li','vanish');
             menuList_click('textfade_li','text_fadeIn');
             menuList_click('text_li','trackingIn');
             menuList_click('flip-txt_li','flip-txt');
             menuList_click('effect_hover_li','effect_hover');
             menuList_click('effect_infinite_li','effect_infinite');
             menuList_click('ken_burns','ken_burns__li');
             menuList_click('img_change','img_change__li');
             bg_depth_click('ken_burns__li','img_change__li');
         });