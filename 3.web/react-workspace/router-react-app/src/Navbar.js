import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            {/**html의 <a>태그와 비슷한 열할을 한다  to에 이동할 경로 ->누르면 브라우저에 붙음*/}
            <Link to="/home">홈</Link><br/>
            <Link to="/about">소개</Link><br/>
        </nav>

    )
}
export default Navbar;