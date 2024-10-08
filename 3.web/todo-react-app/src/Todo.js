import React,{useState} from "react"
import {
    ListItem,
    ListItemText,
    InputBase,
    Checkbox,
    ListItemSecondaryAction,
    IconButton
}from "@mui/material";
import DeleteOutLined from "@mui/icons-material/DeleteOutlined"

//useState --Hook의 종류
//리엑트에서 사용되는 Hook중 하나로 함수형 컴포넌트에서 상태 변수를 사용할 수 있도록한다.
//훅을 사용하면 리엑트가 제공하는 기능과 상태변수를 사용할 수 있다. ----- 체크박스 Label 종류에 따라 변경하려고 함
//상태변수 : 상호작용 하는동안 변경되는 변수

//함수생성방법
//1. function 함수명(){}
//2. let 함수명 = function(){}
// ----->  let 함수명 = () => {}
//화살표 함수 규칙
//1. 매개변수가 1개면 소괄호 생략
//2. 명령이 한줄이면서 return 있다면, 중괄호 return 같이 생략 가능



const Todo =(props)=>{
    const [readOnly,setReadOnly]=useState(true);
    const turnOffReadOnly=()=>{
        setReadOnly(false);
    }
    const turnOnReadOnly=(e)=>{
        if(e.key==='Enter'){
            setReadOnly(true);
            editItem(item);
        }
    }
    const editItem=props.editItem;

    //item : 상태를 추적할 객체 , setItem : 업데이트 할 객체
    const [item,setItem]=useState(props.item);  //setItem은 함수
    const deleteItem=props.deleteItem;
    //deleteEventHandler작성
    const deleteEventHandler=()=>{
        //삭제하려고 하는 todo 전달
        deleteItem(item);
    }
    const editEventHandler=(e)=>{
       setItem({...item,title:e.target.value})
    }

    //체크박스변경
    const checkboxEventHandler=(e)=>{
        item.done=e.target.checked;  //체크되면 true, 안되면 false 넘어감
        editItem();
    }


    return(
        <ListItem>
            <Checkbox checked={item.done}/>
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label":"naked","readOnly":readOnly}}
                    onClick={turnOffReadOnly} //turnOffReadOnly 내용을 클릭했을때 수정가능한 상태로 만들기
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={deleteEventHandler} onChange={checkboxEventHandler}>
                    <DeleteOutLined/>
                </IconButton>
            </ListItemSecondaryAction>

        </ListItem>


    // <div className="Todo">
    //     <input type="checkbox" id={item.id} name={item.id} value={item.done} checked={item.done}/>
    //     {/* for에 라벨 붙일 id값을 넣는다
    //     label태그는 input에 Todo "컴포넌트 만들기"을 뒤에 붙인다 */}
    //     <label for={item.id}>{item.title}</label>
    // </div>
    )
}
//이 파일 안에서 컨포넌트 하나만 쓰겠다.
export default Todo;