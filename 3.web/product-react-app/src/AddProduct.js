import { formToJSON } from "axios";
import React,{useState} from "react";
import P_info from './p_info';
import { call } from "./service/ApiService";

function AddProduct(){
    const[name,setName]=useState("");
    const[inven,setInven]=useState(null);
    const[price,setPrice]=useState(null);

    const nameChange=(e)=>{
        setName(e.target.value)
    }

    const invenChange=(e)=>{
        setInven(e.target.value)
    }

    const priceChange=(e)=>{
        setPrice(e.target.value)
    }

    const list = null;
    const click=()=>{
        call("/product","POST",{"name" : name, "inventory" : inven, "price":price})
        .then(
            
        )
    }

    return(
        <div>
            <input onChange={nameChange} placeholder="상품이름"/><br/>
            <input onChange={invenChange} placeholder="상품재고"/><br/>
            <input onChange={priceChange} placeholder="상품가격"/><br/>
            <button onClick={click}>등록</button>
            <P_info/>
        </div>

    )
}

export default AddProduct;