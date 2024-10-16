//DOMContentLoaded 돼면 function 해라
document.addEventListener('DOMContentLoaded',function(e){
    //태그정보 변수에 저장
    let keydown=document.querySelector('#keydown');
    //태그가 keydown 되면 실행해라
    keydown.addEventListener('keydown',function(e){
        //e.key --key라는 키는 누른 버튼에 대한 정보 가진다
        console.log(e.key);
        //q를 눌렀을때 'this is Q' 문구 가진 경고창 띄우기
        if('q'===e.key){ alert('This is Q')}
    })

    //change 이벤트 만들고 e.target.value콘솔에 출력하기
    let change=this.document.querySelector('#change');
    change.addEventListener('change',function(e){
        console.log(e.target.value);
    })
    //change의 경우 내용이 변경되고 포커스가 벗어나면 적용

    //input
    let input=document.querySelector('#input')
    input.addEventListener('input',function(e){
        console.log(e.target.value);
    })
})


