/*index.js*/
/*node는 요소임 요소 하나가 각각의 노드임 */
$(function(){
   //goSlide();
    
    document.querySelector('.prev').onclick = function(){
        goSlide(0);
    };
    document.querySelector('.next').onclick = function(){
        goSlide(1);
    };
    
});


/*////////////////////////////////////////////
    함수명 ; goSlide
    기능 : 맨 앞의 이미지를 맨 뒤로 또는 맨 뒤의 이미지를 맨 앞으로 이동후, class 를 다시 순서대로 주어서 트랜지션 효과를 이용하여 슬라이드가 이동되게 한다.

/////////////////////////////////////////////*/

var prot = 0; /*광클 금지 상태값(0-허용, 1-막기)*/
function goSlide(bang){
    
    //광클 금지 설정!
    if(prot === 1) return false;
    prot = 1;
    
    
    //1. 대상선정: .gbox
    var tg = document.querySelector('.gbox');
    /*querySelector는 클래스중에 그하나만 고를수 있는거임 근데 getElementByClass는 클래스 전체를 고르는 거라서 다름 */
    var tg2 = tg.querySelectorAll('img');
    /*이거는 내가 ()안에 넣어놓은 것을 모두 찾아와라는 뜻임 내가이미지의 집합을 가지고 와 라는 뜻임 */
    console.log('이미지 갯수 : '+tg2.length);
    
    if(bang === 0){
        //이전, 왼쪽버튼을 눌렀구나
        
        //맨뒤의 이미지를 맨 앞으로 이동함
        //insertBefore (넣을요소, 넣을 요소 전요소)
        tg.insertBefore(tg2.item(tg2.length - 1), tg2.item(0));
    }else if(bang === 1){
        //다음, 오른쪽 버튼을 눌렀구나
        
        //맨 앞의 이미지를 맨 뒤로 이동함
        tg.appendChild(tg2.item(0));
    }
    
    
    //변경된 순서의 이미지를 다시 읽어와!
    tg2 = tg.querySelectorAll('img');
    
    //변경된 이미지의 class를 다시 설정해줘!
    for(var i = 0; i < tg2.length; i++){
        tg2[i].setAttribute('class','i'+(i+1));
    }
    
    //광클금지 상태값 변경
    setTimeout(function(){
        prot = 0;
    }, 400);
    
    
}






