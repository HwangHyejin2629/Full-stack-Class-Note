import React,{useState} from "react"; //export default 안되있으면 {}를 넣어야한다.
function Example(){

    //배열의 구조분해
    const[count,setCount]=useState(0);
    //let countArray=useState(0); //배열 0번에는 값을 넣는다
    //let count = countArray[0];
    //let setCount=countArray[1];

    return(
        <div>
            <p> clicked {count} time </p>
            {/* 버튼을 누르면 count값을 변화시키고 Example컴포넌트에 넘기며 재렌더링한다 */}
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}
export default Example;