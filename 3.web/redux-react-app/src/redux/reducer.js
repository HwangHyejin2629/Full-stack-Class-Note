//리듀서(Reducer):액션에따라 상태를 변경하는 순수함수(거의 직접 만듦)

//리듀서의 기본구조
//현재 상태(state)와 액션(action) 두가지 인자를 가지는 함수

//1. 현재상태(state)
//리듀서가 관리하는 현재상태
//리듀서가 처음 호출될때 초기상태가 설정된다.

//2. 액션(action)
//상태를 변경할 이벤트, 액션 객체는 최소한 type 속성을 가지며, 
//상태를 어떻게 변경할지 리듀서에게 알려준다.


//초기값 지정하기 위해 만든 객체
const initialState={count:0}

//state가 undefined일 경우 initialState를 기본값으로 사용해라
const counterReducer=(state=initialState,action)=>{
    //액션의 타입에따라 상태를 변경하기 위한 switch문 사용
    switch(action.type){
        case'INCREMENT':  //대문자로 쓰는게 좋다
            return{...state, count:state.count+1}// {count : 1}
        case 'DECREMENT':
            return{...state,count:state.count-1}
        default :
            //일치하는 액션이 없을경우, 현재 상태 그대로 반환
            return state;
    }
}
 export default counterReducer