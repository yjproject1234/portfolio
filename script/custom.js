// 풀페이지
var myFullpage = new fullpage('#fullpage', {
    verticalCentered: true,
    anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5', 'anchor6', 'anchor7'],
    menu: '#menu',
    scrollOverflow: true,
    scrollingSpeed: 1000, //스크롤 속도
    navigation: true, // 네비게이션 사용
    navigationPosition: 'right', //네비게이션 위치
    navigationTooltips: ['1', '2', '3', '4', '5', '6', '7'], //네비게이션 호버 시 설명
    responsiveWidth: 999, //반응형 너비지정 999px일 때 스크롤 생김.
    afterResponsive: function (isResponsive) {
        
    }
});

// 팝업
$(function () {
	$('.art1').click(function () {
		$('.pop1').fadeIn();
	});
	$('.art2').click(function () {
		$('.pop2').fadeIn();
	});
	$('.art3').click(function () {
		$('.pop3').fadeIn();
	});

	$('.popup p').click(function () {
		$('.popup').fadeOut();
	});
});

// 팝업 슬라이드
$(function () {
	var swiper = new Swiper('.popup_slide ', {
		speed: 1000,//버튼을 슬라이드가 넘어가는 시간
		navigation: {//화살표 버튼
			nextEl: '.popup .swiper-button-next',
			prevEl: '.popup .swiper-button-prev',
		},
		pagination: {//블릿 버튼
			el: '.popup .swiper-pagination',
			clickable: true,
		},
	});
});
// -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------
 
    $('.skill-progress').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).unbind('inview');
        }
    });
// -------------------------------------------------------------
    // More skill
    // -------------------------------------------------------------
    $('.more-skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor:'#999999',
                trackColor:'#DBDBDB',
                scaleColor: false,
                lineWidth: 25,
                size: 140,
                animate: 2000,
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
            $(this).unbind('inview');
        }
    });
