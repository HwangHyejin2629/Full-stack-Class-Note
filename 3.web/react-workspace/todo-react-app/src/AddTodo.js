import React,{useState} from "react";
import {Button,Grid,TextField} from "@mui/material";

const AddTodo=(props)=>{
    const [item,setItem]=useState({title :''});
    
    //새로운 객제를 배열에 추가해주는 메서드
    const addItem=props.addItem;

    //onButtonClick 함수 작성
    const onButtonClick=()=>{
        addItem(item);
        setItem({title:""})
    }

    //eventKeyEventHandler 함수
    const eventKeyEventHandler =(e)=>{
        if(e.key=='Enter'){
            onButtonClick();
        }
    }
 
    //onInputChange함수 작성
    //입력이 감지될때마다 실행되는 함수
    const onInputChange=(e)=>{
        setItem({title:e.target.value});
        console.log(item);
    }
    return(
        <Grid container style={{marginTop:20}}>
            <Grid xs={11} md={11} item style={{paddingRight:16}}>
                {/* xs --가장작을때  md---중간크기일때 */}
                <TextField placeholder="Add Todo Here" fullWidth onChange={onInputChange} onKeyDown={eventKeyEventHandler} value={item.title}/>
            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth style={{heigth:'100%'}} color="secondary" variant="outlined" onClick={onButtonClick}>
                    + {/* variant= "contained" 차있는것  "outlined" 테두리 */}
                </Button>
                
            </Grid>
        </Grid>
    )
}    

export default AddTodo;