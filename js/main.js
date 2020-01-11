// top下までスクロールするとヘッダーの色が切り替わる

$(function() {
  // PCサイズのみ
  if( $(window).width() > 768 ){
  var _window = $(window),
  _header = $('#header'),
  heroBottom;

_window.on('scroll',function(){
  heroBottom = $('#top').height();
  if(_window.scrollTop() > heroBottom){
      _header.addClass('header--transform');   
  }
  else{
      _header.removeClass('header--transform');   
  }
});

_window.trigger('scroll');
  }
});




// 下にスクロールするとヘッダーが消え、上にスクロールすると現れる
// 768px以下
if (window.matchMedia( '(max-width: 768px)' ).matches) {

  // ----sp版でもハンバーガーメニューをスクロールで消す時-------------

  // $(function() {

  // var startPos = 0,winScrollTop = 0;
  // $(window).on('scroll',function(){
  //     winScrollTop = $(this).scrollTop();
  //     if (winScrollTop >= startPos) {
  //       if(winScrollTop >= 50){
  //         $('.btn__trigger').addClass('hide');
  //     }
  //     } else {
  //         $('.btn__trigger').removeClass('hide');
  //     }
  //     startPos = winScrollTop;
  // });
  // });

// 768px以上

// ---------PC版でスクロールでヘッダーを消す--------------------
} else{
  $(function() {
    var startPos = 0,winScrollTop = 0;
    $(window).on('scroll',function(){
        winScrollTop = $(this).scrollTop();
        if (winScrollTop >= startPos) {
          if(winScrollTop >= 50){
            $('#header').addClass('hide');
        }
        } else {
            $('#header').removeClass('hide');
        }
        startPos = winScrollTop;
    });
    
  });
}


// #のついたaタグへスムーズスクロール

$(function(){
  $('a[href^="#"]').click(function(){
    var time = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var distance = target.offset().top;
    $("html, body").animate({scrollTop:distance}, time, "swing");
    return false;
  });
});



// FAQタブ切り替え

$(function() {
  $('.faq__btn').on('click',function(){
          $('.faq__btn').removeClass('faq__btn--active')
          $(this).addClass('faq__btn--active')
  
          var index = $('.faq__btn').index(this);
          $('.faq__text').removeClass('faq__text--show'); 
          $('.faq__text').eq(index).addClass('faq__text--show'); 
      });

      
  });


// ハンバーガーメニュー
  $(function () {
    $('.btn__trigger').on('click',function(){
      $('.btn__trigger').toggleClass('close');//ボタンのアニメーション
      $('.gnav').fadeToggle(300);//メニューのフェードイン・フェードアウト
      $('body').toggleClass('noscroll');//スクロールを固定
    });

    if( $(window).width() <= 768 ){
    $('.gnav__menu__item>a').on('click',function(){
      $('.gnav').fadeOut(300);
      $('.btn__trigger').removeClass('close');
      $('body').removeClass('noscroll');
    });
    }

  });