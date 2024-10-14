import React from 'react'

function Signup(){
    return(
        <table border="1" align="center">
            <caption>:::회원가입:::</caption>
            <tr>
                <td>아이디</td>
                <td><input name="userId" type="text" /><input type="button" value="중복확인"/></td>
                
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input name="pwd" type="text"/></td>
            </tr>
            <tr>
                <td>이름</td>
                <td><input name="name" type="text"/></td>
            </tr>
            <tr>
                <td>이메일</td>
                <td><input name="email" type="text"/></td>
            </tr>
            <tr>
                <td colspan="2" align='center'><input type="button" value="가입"/><input type="button" value="취소"/></td>
            </tr>
        </table>
    )
}

export default Signup;