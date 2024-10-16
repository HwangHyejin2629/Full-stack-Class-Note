import logo from './logo.svg';
import './App.css';
import Todo from './Todo'; //Todo 컴포넌트를 import
import Count from './Count';
import React,{ useEffect, useState } from 'react';
import {Container,List,Paper,Grid,Button,AppBar, Toolbar,Typography} from "@mui/material"; 
//Paper: 종이질감의 컴포넌트 / List : todo 리스트 / AppBar : 상단 네비바 / Toolbar : AppBar 내의 정렬 / Typography : 텍스트표시(스타일 정하기)
import AddTodo from './AddTodo';
import axios from 'axios';
import {call,signout} from './service/ApiService';
//컴포넌트
//페이지에 렌터링할 React 엘리먼트를 반환하고 작고 재사용 가능한 코드조각
//Babel:JSX 작성된 자바스크립트를 순수한 자바스크립트로 만들어주는 라이브러리

function App() {
  //Todo를 가지고 있는 state
  const[items,setItems]=useState([]) 

  //로딩 여부를 가리는 state
  const[loading,setLoading]=useState(true);


  useEffect(()=>{     
    //백엔드에 요청하기 
    call("/todo","GET") //이제는 Todo 접근하려면 토큰 인증이 필요하다.
    .then(result=>{
      setItems(result.data);
      setLoading(false);  // 로딩 끝나면 
    
    })

    
    // axios.get("http:localhost:9090/todo",{
    //   headers:{ //주고받는 형식은 Json형식으로 해줘
    //     "Content-Type" : "application/json"
    //   }
    // })
    // .then(response => {setItems(response.data)})
    // .catch(error=>{
    //   console.error("There was an error!",error)
    // })
    // //Promise 객체로 돌려받는다 : 성공메서드, 실패 메서드 --> 처리 .then .catch
  },[])  // ---무한루프X, 한번만

  //추가
  //전체 데이터를 App.js에서 관리하기 떄문에 함수를 App.js에 작성함
  const addItem=(item)=>{ 
    call("/todo","POST",item)
    .then(resurt=>setItems(resurt.data))
  }
  
  //내용수정
  const editItem=(item)=>{
    call("/todo","PUT",item)
    .then(resurt=>setItems(resurt.data))
  }  

  //삭제
  const deleteItem=(item)=>{
    call("/todo","DELETE",item)
    .then(resurt=>setItems(resurt.data))
  }
  //App.js에서 Todo에 deleteItem 연결하기


  //반복문
  //map() -> 반복문 안에 들어있는 내용을 하나씩 꺼내서 처리한다.
  //key : 요소의 리스트를 만들때, React에서 컴포넌트를 렌더링했을때 어떤 아이템이 변경되었는지 빠르게 감지하기 위해 사용된다.
  //만약 key가 설정되있지 않았다면 가상DOM을 순차적으로 비교하면서 감지하기 떄문에 KEY가 없을때보다 속도가 느리다.
  let todoItems = items.length > 0 && (
    <Paper style={{margin:16}}>
      <List>
      {items.map((item) =>(
        <Todo item={item} key={item.id} deleteItem={deleteItem} editItem={editItem}/>
      ))}
      </List>
    </Paper> 
  );

  //navigationBar 추가
  let navigationBar=(
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container> {/*컨테이너로서의 그리드 */}
          <Grid item> {/*요소로서의 그리드 */}
            <Typography variant='h6'>오늘의 할일</Typography>
          </Grid>
          <Grid>
            {/*variant의 속성값 : contained 입체적인 버튼(배경색상포함), outlined 테두리만 있는 버튼, text 텍스트만 있는버튼 */}
            <Button color="inherit" variant="text" onClick={signout}>로그아웃</Button> {/*클릭시 signout 컴포넌트 실행 */}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )

  //로딩중이 아닐때 렌더링할 화면
  let todoListPage=(
    <div className="App">
      {navigationBar}
      <Container maxWidth="md">
      <AddTodo addItem={addItem}/>
      {/* props를 컴포넌스로 전달하기
      이름={useState값} */}
      <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  )

  //로딩중일때 렌더링할 부분
  let loadingPage=<h1>로딩중...</h1>
  let content=loadingPage;

  //loading : true -> 로딩중
  //loading : false -> 로딩중이 아닌상태
  if(!loading){
    //로딩중이 아니면 todoListPage를 렌더링
    content=todoListPage;
  }

  return(
    <div className="App">
      {content}
    </div>
  )
}
//해당 파일에서는 하나의 컴포넌트만 내보낸다
//export default 구문을 사용해 내보낸 컴포넌트 중괄호를 사용하지 않고 불러올 수 있으며, 
//이름 또한 원하는 이름으로 불러올 수 있다.
export default App; 
