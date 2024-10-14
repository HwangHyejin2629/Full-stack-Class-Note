import React from 'react'

const Login=()=>{
    return(
        <table border="1" align="center">
            <caption>:::로그인:::</caption>
            <tr>
                <th>아이디</th>
                <td><input name="id"/></td>
            </tr>
            <tr>
                <th>비밀번호</th>
                <td><input name="pwd" type="password"/></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="button" value="로그인"/>
                </td>
            </tr>
        </table>
    )
}
export default Login;