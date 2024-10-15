import React from 'react';
import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { call, signout } from './service/ApiService';
import MyInfo from './users/Myinfo';

function App() {

  const[user,setUser] = useState([]);
  const[modify,setModify]=useState(false);

  useEffect(() => {
    //토큰을 같이 보냄
    call("/users/name","GET")
      .then(result => setUser(result.data))
  },[])

  const logout =()=>{
    signout();
  }

  

  return (
    <div className="App">
      {user.length > 0 &&(<p>{user[0].name}님환영합니다 메인화면입니다.</p>)}
      <input type="button" value="로그아웃" onClick={()=>signout()}/>
      <input type="button" value="정보수정" onClick={()=>setModify(!modify)}/>      
      {modify && <MyInfo/>} 
    </div>
  ); //{modify && <MyInfo/>}  : modify가 참이면 <MyInfo/> 실행
}

export default App;
