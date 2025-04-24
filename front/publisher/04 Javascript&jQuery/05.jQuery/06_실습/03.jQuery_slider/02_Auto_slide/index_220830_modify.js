// index.js

//window.alert('안녕!!!!!');

// 오른쪽 버튼클릭과 자동실행 기능이 동일 >> 함수구현

/*$(function () {

	var liWidth = $('#viewer li').width();
	console.log(liWidth); //600

	$('.btnR').click(function () {
		$('#viewer').animate({
			left: '-='+liWidth + 'px'
		}, 600);
	});

});*/



/*/////////////////////////////////////////////////
	함수명 : sideSlide
	기능 : 슬라이드 이동 애니메이션
/////////////////////////////////////////////////*/
var moveBtn = 0;
var bseq; //블릿 순번을 담아줄 변수

var sideSlide = function (c) {
	//매개변수 c - 호출구분자 (0-인터발 호출, 1-오른쪽 버튼 호출)

	$('#viewer').animate({
		left: '-100%'
	}, 1000, function(){
		//1) 맨 앞에 요소를 맨 뒤로 이동
		//2) 변경된 요소의 순서에 따라 위치값 변경
		$(this).append($('#viewer li').first()).css({
			left: 0
		});
        
        if(c === 1) moveBtn = 0;
	});
	
	
	//만약 오른쪽 버튼을 눌러서 호출했을 때, 자동호출 지우기
	//if(c === 1) clearInterval(intcall_side);
	
	if(c === 1) clearAutoSide();
	
	
	//블릿 변경
	
	bseq = $('#viewer li').eq(1).attr('data-seq');
	if(c === 0) chgBul(Number(bseq));

};

/*/////////////////////////////////////////////////
	함수명 : chgBul
	기능 : 슬라이드 해당 순번의 블릿 변경하기
/////////////////////////////////////////////////*/
var chgBul = function(n){
	$('#btnGroup li').eq(n).addClass('selB').siblings().removeClass('selB');
}

/*/////////////////////////////////////////////////
	함수명 : autoCallSide
	기능 : 슬라이드 자동실행 함수
/////////////////////////////////////////////////*/
var intcall_side; //인터벌을 담을 변수
var autoCallSide = function(){
	//setInterval(sideSlide, 2000);

	intcall_side = setInterval(function(){
		sideSlide(0);
	}, 2000);
};

/*/////////////////////////////////////////////////
	함수명 : clearAutoSide
	기능 : 자동실행 함수 지우기
/////////////////////////////////////////////////*/
var tcall_side; //타임아웃용 변수
var clearAutoSide = function(){
	
	//인터발 지우기
	clearInterval(intcall_side);
	
	//타임아웃 지우기
	clearTimeout(tcall_side);
	
	//타임아웃 세팅 - 인터발 재가동!
	tcall_side = setTimeout(function(){
		autoCallSide();
	}, 3000);
	
};



$(function(){
	
	//슬라이드 이동함수 최초호출!
	//sideSlide();
	
	autoCallSide();
	
	//이동버튼을 클릭했을 때
	/*$('.btnR').click(function(){
		sideSlide(1);
		
		chgBul(Number(bseq));
	});*/
	
	
	
	//이동버튼 클릭 여부 확인 (광클금지!!!)
	//var moveBtn = 0; //0 - 클릭 전, 1 - 클릭 후
	
	$('.abtn').click(function(){
		
		//클릭여부 확인
		if(moveBtn === 1) return false;
		moveBtn = 1;
		
		
		//클릭된 버튼의 이전/다음 구분
		//index(제한조건) : 제한조건 내의 자식요소 순번 리턴
		var idx = $(this).index('.abtn');
		//alert(idx);
		//인덱스 0 - 이전(왼쪽), 인덱스 1 - 다음(오른쪽)
		//0 - false, 1 - true
		
		var tg = $('#viewer');
		
		if(idx){
			//true, 인덱스 1, 다음버튼 클릭
			sideSlide(1);
			
			//moveBtn = 0; //클릭막기 해제
			
		}else{
			//false, 인덱스 0, 이전버튼 클릭
			
			//1. 맨 뒤 li를 맨 앞으로 이동(prepend), 동시에 left값을 -100%로 변경
			//2. left값을 0으로 애니메이션 이동
			
			tg.prepend(tg.find('li').last()).css({
				left: '-100%'
			}).animate({
				left: 0
			}, 1000, function(){
				moveBtn = 0; //클릭막기 해제 위치1
			});
			
			
			//왼쪽 버튼을 클릭해도 자동호출 지우기!
			clearAutoSide();
			
			//클릭막기 해제 위치2
			//moveBtn = 0;
			
			//왼쪽 이동 시 블릿 순번 - 항상 첫번째 li(인덱스0)가 보여짐
			bseq = tg.find('li').eq(0).attr('data-seq');
			
		}
		
		//블릿변경함수
		chgBul(Number(bseq));
		
	});
	
	
	
});










