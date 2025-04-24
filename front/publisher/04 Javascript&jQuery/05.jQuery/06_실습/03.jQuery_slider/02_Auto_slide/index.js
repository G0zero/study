//index.js

//window.alert('안녕~~~~~~~~~~~~~~~'); 자바스크립트가 연결되었는가를 확인 

//오른쪽 버튼 클릭과 자동실행 기능이 동일 >> 함수 구현

/*$(function(){
    var liwidth = $('#viewer').width();
    $('.btnR').click(function(){
        sideSide(); 
    });
   
});*/

/*//////////////////////////////////////////
    함수명 : sideSlide
    기능 :  슬라이드 이동 애니메이션 
///////////////////////////////////////////*/
var bseq;//블릿 순번을 담아줄 변수

var sideSlide = function(c){
    //매개변수 c - 호출구분자 (5-인터발 호출, 6-오른쪽 버튼 호출)
    $('#viewer').animate({
        left: '-100%'
    }, 600, function(){
        //1. 맨 앞에 요소를 맨뒤로 이동 
        
        //2. 변경된 요소의 순서에 따라 위치값 변경 
        
        $(this).append($('#viewer li').first()).css({
            left : 0
        });
    });
    
    //만약 오른쪽 버튼을 눌러서 호출했을때, 자동호출 지우기 
    if(c === 5) clearInterval(intcall_side);
    
    
    //블릿변경
    bseq = $('#viewer li').eq(1).attr('data-seq');
    if(c === 6) chgBul(Number(bseq));
};


/*//////////////////////////////////////////
    함수명 : chgBul
    기능 : 슬라이드 해당 순번의 블릭 변경하기 
///////////////////////////////////////////*/

var chgBul = function(n){
    $('#btnGroup li').eq(n).addClass('selB').siblings().removeClass('selB');
};


/*//////////////////////////////////////////
    함수명 : autoCallside
    기능 : 슬라이드 자동실행 함수
///////////////////////////////////////////*/
var intcall_side; //인터벌을 담을 변수

var autoCallSide = function(){
    /*setInterval(sideSlide, 2000);*/
    intcall_side = setInterval(function(){
        sideSlide(0);
    }, 2000);
};




$(function(){
    //슬라이드 함수 최초 호출
   // sideSide();
    /*$('.btnR').click(function(){
        sideSide(); 
    });*/
    
    autoCallSide();
    //이동버튼을 클릭했을떄 
    $('.btnR').click(function(){
        sideSlide(6);
        chgBul(Number(bseq));
    });
});











/*//////////////////////////////////////////
    함수명 : 
    기능 : 
///////////////////////////////////////////*/