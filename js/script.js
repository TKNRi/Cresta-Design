//スティッキーヘッダー
$(function(){
    const $win = $(window),
          $fv = $('.fv'),
          $header = $('.header'),
          fvHeight = $fv.outerHeight();
          fixedClass = 'fixed';

          $win.on('load scroll',function(){
              const value = $(this).scrollTop();
              if($win.width() > 768){
                  if(value > fvHeight){
                    $header.addClass(fixedClass);
                  }else{
                    $header.removeClass(fixedClass);
                   }
              }
          });
});

//スライダー
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    cssEase: 'linear'
});

//スムーススクロール
$('a[href^="#"]').click(function() {
  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = $(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップに戻る様にする
  let target = $("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = $(target).offset().top;
  // ターゲットの位置までspeedの速度で移動
  $("html, body").animate(
      {
          scrollTop: position - $('#js-header').outerHeight()
      },
      speed
  );
  return false;
});
