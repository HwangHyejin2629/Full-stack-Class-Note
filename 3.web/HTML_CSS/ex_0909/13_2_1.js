document.addEventListener('DOMContentLoaded',function(e){
    let button=document.querySelector('input');
    let p=document.querySelector('p');
    //버튼 클릭시 
    button.addEventListener('click',function(e){
        //p태그 들어있는 내용 수정
        //.textContent 는 태그에 들어있는 Content의 내용을 반환
        p.textContent ='js로 입력함';

    })
})