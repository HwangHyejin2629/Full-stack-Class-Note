//document 객체를 대상으로하는 이벤트리스너를 추가한다.
//이벤트 종류는 DOMContentLoaded이다
//DOMContentLoaded  :  문서의 콘텐츠 로딩이 완료되었음을 의미하는 이벤트
document.addEventListener('DOMContentLoaded',

    //html 코드가 로딩된 다음 처리할 작업
    function () {
        //input 태그를 찾아 button 변수에 저장
        let button = document.querySelector('input');
        //button 변수에 이벤트리스너 추가
        //이벤트 종류는 input
        button.addEventListener('input', //body 값을 아직 못읽어서 안나옴
            function (e) { //e : event에 대한 정보, 이벤트가 발생한 태그에
                //콘솔에 입력창의 값을 출력한다.

                console.log(e.target.value); //e ---이벤트에대한 정보가 들어있다.이벤트 발생한 태그에 대한 정보
                //target.value ---객체의 값 

            }
        )

    })

//<p>태그에서 인라인 이벤트 모델로 호출할 함수를 정의한다
//함수 이름은 hi이다.
//alert()띄워 "hi"라는 글짜 출력

function hi() {
    alert('hi')
}