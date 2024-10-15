import React, { useEffect, useState } from "react";
import { call } from "../service/ApiService";


function MyInfo(){

    const [user,setUser]=useState({
        userId:'',
        pwd:'',
        name:'',
        email:''
    });

    //기존 정보 가져오기
    useEffect(()=>{
        call("/users/name","GET")
            .then(result=>{setUser(result.data[0])})

    },[])

    const handleChange=(e)=>{
        const{name,value}= e.target;  //타겟의 속성을 불러올 수 있다.
        setUser(prevState =>({...prevState,[name]:value}))

    }
    // const updateEvent=(e)=>{
    //     const data = new FormData(e.target)
    //     let userId=user.userId;
    //     let pwd=data.pwd;
    //     let name=data.name;
    //     let email=data.email;

    //     call()
    // }

    if(!user.userId){
        return<div>Loading...</div>
    } //동기화
    
    return(
        <form noValidate > 
            <table border="1" align="center">
                <caption>:::내정보:::</caption>
                
                <tr>
                    <td>아이디</td>
                    <td>{user.userId}</td>
                </tr>
                <tr>
                    <td>비밀번호</td>
                    <td><input type="password" name="pwd" value={user.pwd} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td><input type="text" name="name" value={user.name} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td><input type="text" name="email" value={user.email} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td colSpan="2" align="center"><input type="submit" value='수정'/><input type="button" value='취소' onClick={()=>{window.location.href="/"}}/></td>                    
                </tr>
                   
            </table>

        </form>
    )
}
export default MyInfo;