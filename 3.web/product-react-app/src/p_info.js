
import React, { useEffect,useState } from 'react';
import {call} from "./service/ApiService"

import './css/style.css'

function P_info (list){

    //상품정보를 가지고 있는 state
    const[items,setItems]=useState([]);


    useEffect (()=>{
        //백엔드에 요청해서 조회
        call('/product','GET')
            .then(result=>{setItems(result.data)})
    },[]);
    
    let productItems = items.length > 0 && (
        <table border="1">
            <tr>
                <th>상품 번호</th>
                <th>상품 이름</th>
                <th>상품 재고</th>
                <th>상품 가격</th>
                <th>등록 날짜</th>
                <th>수정 날짜</th>
            </tr>
            {/* db에서 넘어온 상품들을 출력 */}
            {items.map(item => (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.inventory}</td>
                    <td>{item.price}</td>
                    <td>{item.insertDate}</td>
                    <td>{item.updateDate}</td>
                </tr>
            ))}
            {/* db에서 넘어온 상품들을 출력 */}
        </table>
    )


    return (
        <div className='container'> 
            <button type="button">상품추가</button>
            {productItems}
        </div>
    )
}
export default P_info;