$(document).ready(function(){
    $('header').load('include/header.html', function(){
        $('.fam').click(function(){
            $('.family').toggle();   
            return false
            // a태그 작동 안하게 하는거, 거짓값을 돌려준다
        })
    
        $('.family li').click(function(){
            let famChoice = $(this).text()
    
            $('.choice').text(famChoice);
        })
        /* 로고이미지 src 값 글자변경 */
        // $('header h1').mouseover(function(){
        //    let h1Img = $('header h1 img').attr('src');
        //    console.log(h1Img)
    
        //    let h1ImgOver = h1Img.replace('.png','_o.png')
        //    console.log(h1ImgOver)
    
        //    $('header h1 img').attr('src',h1ImgOver)
        // })
        $('header h1').mouseover(function(){
            $('header h1 img').attr('src','images/logo_o.png');
        })
        $('header h1').mouseout(function(){
            $('header h1 img').attr('src','images/logo.png');
        })
    
        $(window).scroll(function(){
            let scrT = $(window).scrollTop();
    
            $('#visual').css({backgroundSize:100+scrT/10+'%'});
            $('#visual .book').css({top:45-scrT/10*2+'px'});
    
            if(scrT >= 100){
                $('header nav').addClass('on');
            } else {$('header nav').removeClass('on');
    
            } 
            // if(scrT <= 100){
            //     $('header nav').removeClass('on')
            // }
        })
    
        // lnb 한칸씩
        $('.gnb li').mouseover(function(){
            $(this).find('.lnb').stop().fadeIn(200);
        })
        $('.gnb li').mouseout(function(){
            $('.lnb').stop().fadeOut(200);
        })
        // 현재페이지 표시 스크립트 돌아버리겠잖아?
        let url = window.location.href

        $('.gnb a').each(function(){
            let gnbText = $(this).text();
            $(this).html('<span>'+gnbText+'</span>');
        })


        $('.gnb a').each(function(){
            
            let gnbHref = $(this).attr('href');

        

            if(url.indexOf(gnbHref) > -1){
                $(this).css({color:'orange'});
                $(this).parent('li').addClass('on');

                let gnbHtml = $(this).parents('.lnb').html();
                let h2Text = $(this).text();
                let gnbPage = $(this).parents('.lnb').siblings('a').text();
                let gnbEng = $(this).parents('.lnb').siblings('a').attr('data-eng');

                $('#visual_sub .text strong').text(gnbPage);
                $('#visual_sub .text p').text(gnbEng);
                
                $('.snb').html(gnbHtml);  
                $('#content_box h2').text(h2Text);
            }
        })
        

        // snb 초기위치
        function snbAction(){
            let snbPosi = $('.snb .on span').position().left;
            let snbPosiW = $('.snb .on span').width();
            $('.line').css({left:snbPosi, width:snbPosiW});
        }
        
        snbAction();

        $(window).resize(function(){
                snbAction();
        })


        $('.snb').mouseleave(function(){
            snbAction();
        })

        // let snbLiOW = $('.snb li.on').find('span').width();
        // let snbLiOL = $('.snb li.on').find('span').position().left;
        //     $('.snb_box .line').width(snbLiOW);
        //     $('.snb_box .line').css({left:snbLiOL})


        
        // sub
        $('.snb li').mouseenter(function(){
            let snbLiW = $(this).find('span').width();
            let snbLiL = $(this).find('span').position().left;

            // let snbLiW = $(this).find('span').css('width')
            $('.snb_box .line').width(snbLiW);
            $('.snb_box .line').css({left:snbLiL});
        })



    })

    // notice 돌림
    // let kkk = serInterval(함수, 반복시간)
    // clearInterval(kkk)

    // setTimeout(함수, 예약시간)

    let notiRoll = setInterval(noticeRollong, 2000)

    function noticeRollong(){
        $('.notice ul').animate({top:'-100%'}, function(){
            $('.notice ul li').eq(0).appendTo($('.notice ul'));
            $('.notice ul').css({top:0});
        })
    }
    $('.notice').mouseenter(function(){
        clearInterval(notiRoll);
    })
    $('.notice').mouseleave(function(){
        notiRoll = setInterval(noticeRollong, 2000);
    })


    // mouseenter, mouseleave(본인만)/ mouseover, mouseout(자식한테도 영향 줘)
   
    

    // lnb
    // $('.gnb').mouseover(function(){
    //     $('.lnb').stop().fadeIn(200)
    // })
    // $('.gnb').mouseout(function(){
    //     $('.lnb').stop().fadeOut(200)
    // })

    // 메인section5 번호넣기 방법1
    // for(let i = 0; i<9; i++){
    //     $('#section5 li').eq(i).find('span.num').text('0'+(i+1))
    // }
    // 메인section5 번호넣기 방법2 each()
    // $('#section5 li').each(function(){
    //     let liIndex = $(this).index()
    //     $(this).find('.num').text('0'+(liIndex+1))
    // })

    // 메인section5 번호넣기 방법3 each()
    $('#section5 li').each(function(index, item){
        if(index+1 < 10){
            $(item).find('.num').text('0'+(index+1));
        } else {
            $(item).find('.num').text(index+1);
        }
    })

    // function snbAction(){
    //     let h1W = $('h1 img').width();
    //     let h1H = $('h1 img').height();
    //     let h1L = $('h1').offset().left;
    //     let h1T = $('h1').offset().top;
    //     $('.line').css({width:h1W, top:h1T+h1H, left:h1L});
    // }
    // snbAction()

    // $(window).resize(function(){
    //     snbAction()
    // })

    // 로그인 페이지 현재페이지 표시
    let url = window.location.href
    
    $('.member a').each(function(){
        let memHref = $(this).attr('href');

        if(url.indexOf(memHref) > -1){
            $(this).css({color:'orange'}).parent('li').addClass('on');
            let memH2 = $(this).text()
            $('#content_box h2').text(memH2)
        } else if(url.indexOf('join') > -1){
            $('.member a').eq(2).css({color:'orange'}).parent('li').addClass('on');
            let memH2 = $('.member a').eq(2).text()
            $('#content_box h2').text(memH2)
        }
    })
    
    // 로그인 패스워드 눈 아이콘
    // $('.eye_on').click(function(){
    //     $(this).hide()
    //     $('.eye_off').show()
    //     $('.login_box input[name=pw]').attr('type', 'text');
    // })
    // $('.eye_off').click(function(){
    //     $(this).hide()
    //     $('.eye_on').show()
    //     $('.login_box input[name=pw]').attr('type', 'password');
    // })

    $('.eye_box').click(function(){
        let $eyeInput = $(this).prev('input');
        $eyeInput.toggleClass('active');
        
        if($eyeInput.hasClass('active')){
            $('.eye_off').show()
            $('.eye_on').hide()
            $('.login_box input[name=pw]').attr('type', 'text');
        } else{
            $('.eye_off').hide()
            $('.eye_on').show()
            $('.login_box input[name=pw]').attr('type', 'password');
        }
    })

    // 회원가입
    if(url.indexOf('join_people') > -1){
        $('.join_people').show();
    }
    if(url.indexOf('join_company') > -1){
        $('.join_company').show();
    }

    // 회원가입 버튼
    $('.join_ok').click(function(){
        let joinAgree = $('#rule_agree').is(':checked');
        let ruleAgreeTop = $('.rule_box').offset().top;
        let idTop = $('#id_input').offset().top

        
        if($('#id_input').val().length < 1){
            $('html').animate({scrollTop:idTop-100});
            return false
        }




        if(!joinAgree){
            alert('이용약관에 동의해 주셔야 합니다.');
            $('html').animate({scrollTop:ruleAgreeTop});
            $('.rule_box label').css({border: '2px solid crimson'})
            return false
        }
    })

    // 게시판
    $('.board_page .title').click(function(){
        $('.title_list').slideToggle(200)
    })
    $('.board_page .title').click(function(){
        $('.selectbox').toggleClass('on')
    })

    
    $('.title_choice').click(function(){
        $('.title_list').slideToggle()
        $('.title_choice').toggleClass('on')
    })

    $('.title_list li').click(function(){
        let titText = $(this).text()
        $('.title_check').text(titText)
    })

    

    const urlSearch = new URLSearchParams(location.search);
    if(urlSearch.get('board_num') == '01'){
        $('.board_page h2').text('자유게시판')
    }

    $('#file_select').change(function(){
        // var fileName = $(this).val().split('\\').pop();
        // $('.filezone').text(fileName || '파일을 선택해주세요.')

        let fileName = $(this).val()
        let fileZzo = fileName.split('\\');
        let fileZzoLength = fileZzo.length

        $('.filezone').text(fileZzo[fileZzoLength - 1])
    })
})

// $('html').click(function(e){
//     console.log(e.target)
//     if(!$(e.target).hasClass('.title')) {
//         $('.title_list').slideUp()
    
//     }
// })


    

