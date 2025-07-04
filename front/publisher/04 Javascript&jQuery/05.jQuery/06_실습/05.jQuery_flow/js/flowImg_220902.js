// flowImg.js

// 상품 정보 전역변수 셋팅
var sinsang = {
    "m1": "[남성]카모전판프린트 PQ 티셔츠^DMTS7K731-MG^99,000원",
    "m2": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-BK ^89,000원",
    "m3": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-WH ^89,000원",
    "m4": "[남성]부분 스트라이프 PQ 티셔츠^DMTS77731-NY ^99,000원",
    "m5": "[남성]웰딩포인트 트레이닝 하프팬츠^DMTB61731-MD ^89,000원",
    "m6": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-GR ^99,000원",
    "m7": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-KA ^99,000원",
    "m8": "[남성]베이직 솔리드 래쉬가드^DMSW15731-BK ^49,000원",
    "m9": "[남성]남성 루즈핏 슬리브리스^DMSL6C731-MG ^59,000원"
};

var acall; //setInterval 변수
$(function () {

    //자동슬라이드 함수 호출!
    acall = setInterval(flowImg, 20);
    
    
    //마우스 오버 멈춤, 아웃시 다시 실행
    //mouseover, mouseout
    //hover() - mouseenter(), mouseleave()
    
    $('.flowImg li').hover(function(){
        //mouseenter()
        
        //인터벌 지우기
        clearInterval(acall);
        
        //상품정보 넣기
        //1) 각 li의 class값 읽어오기
        var cls = $(this).attr('class');
        console.log(cls);
        
        //2) 상품정보 가져오기
        var info = sinsang[cls]; //sinsang[m2]
        console.log(info);
        
        //3) 상품정보 들어갈 요소 만들기
        $(this).append('<div class="ibox"></div>');
        
        //4) 상품 정보 넣기
        /*$('.ibox').text(info).animate({
            top: '110%',
            opacity: 1
        }, 300, 'easeOutCirc');*/
        
        $('.ibox').html(info.replace(/\^/g,'<br>')).animate({
            top: '110%',
            opacity: 1
        }, 300, 'easeOutCirc');
        
        //정규표현식 : /바꿀문자/
        //만약에 바꿀문자가 특수문자면 역슬래쉬 사용! ex) \^
        //g >> global의미, 내용안에 대체할 문자를 모두 찾는다는 의미!
        
        
        
    }, function(){
        //mouseleave()
        
        //인터벌 재실행!
        acall = setInterval(flowImg, 20);
        
        $('.ibox').remove();
        
    });
    
    

});
/*//////////////////////////////////////////////
    함수명 : flowImg
    기능 : 이미지를 왼쪽으로 계속 이동하여 흐르게 함
/////////////////////////////////////////////*/
var fnum = 0; //이동 픽셀수
function flowImg() {

    //console.log('나는 흘러가고 있어~~~~~~');

    fnum++; //1씩 증가(left 이동하는 픽셀수 증가)
    //console.log(fnum);

    var fw = $('.flowImg li').first().width(); //첫번째 li크기
    //console.log('첫번째 li의 크기: ' + fw);

    //if else문
    //이동한 픽셀수가 li 하나의 너비보다 커졌을 때
    //.flowImg의 첫번째 li를 맨 뒤로 이동, left값 초기화

    if (fnum > fw) {
        $('.flowImg').append($('.flowImg li').first()).css({
            left: 0
        });
        
        fnum = 0;

    } else {
        $('.flowImg').css({
            left: -fnum + 'px'
        });
    }

}