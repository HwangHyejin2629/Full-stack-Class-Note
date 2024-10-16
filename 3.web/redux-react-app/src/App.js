import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
//Redux와 React를 연결하는데 필요한 
//Provider, useDispatch, useSelector를 import
import {Provider,useDispatch,useSelector} from 'react-redux'

import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Redux 관련 훅을 불러옴
import { addToCart, removeFromCart } from './actions'; // 액션 생성 함수 불러오기
//Redux스토어를 import
//import store from './redux/store';
//액션 생성함수를 import
//아래 함수들은 상태를 변경하는 액션을 dispatch 하기 위해 사용한다.
import { increment,decrement } from './redux/action';

//todo용 import 추가
import{addTodo,removeTodo} from './todo/action';

//login용 import
import { login,logout } from './login/action';


{/*
function Counter(){
  //useSelector : Redux 에서 store에서 저장되있는 state를 읽어오는 hook
  const count=useSelector(state=>state.count)
  //useDispatch : store에 action을 보낼 수 있는 hook
  const dispatch=useDispatch();
  return (
    <div>
      현재 state인 count값을 화면에 출력한다 
      <h1>Counter:{count}</h1>
      {/*Increment 버튼을 클릭하면 increment() 액션을 디스패치한다
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      함수 겹치면 안쪽부터 실행된다
    </div>
  );
}

function App() {
  //login
  //input태그 입력되는 값을 저장하는 state
  const[usernameInput,setUserNameInput]=useState('')
  const{isLoggedIn, username}=useSelector(state =>state)
  const dispatch=useDispatch();
  //로그인 검증 
  const handleLogin=()=>{
    //input 태그에 뭐라고 적혀있을때
    if(usernameInput.trim()){
    //유저네임을 전달받은 login()액션을 반환한 객체를 리듀서에 전달
    dispatch(login(usernameInput))
    setUserNameInput('')
    }
  }

  const handleLogout=()=>{
    dispatch(logout())
  }
*/}

  /*
  //Todo
  const[input,setInput]=useState('') //입력값을 관리하는 state
  const todos = useSelector(state=>state.todos) //redux에서 todos state 가져옴
  const dispatch=useDispatch() // 액션을 dispatch하는 함수 가져오기

  //추가버튼을 눌렀을떄 input태그에 있는 내용을 배열에 추가하기
  const handleAddTodo=()=>{
    if(input.trim()){//input태그에 값이 비었는지 검사
      dispatch(addTodo(Date.now(),input)) //Date.now() 현재시간 반환 id와 내용을 액션에 전송해서 dispatch가 리듀서로 전송
      setInput('')//입력창 비우기
    }
  }
  const handleRemoveTodo=(id)=>{
    dispatch(removeTodo(id)) //Todo 삭제
  }
  */

  function ShopApp() {
    const products = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Orange' },
    ]; // 상품 목록을 미리 정의
    const cart = useSelector((state) => state.cart); // Redux에서 쇼핑카트 상태를 가져옴
    const dispatch = useDispatch(); // 액션을 디스패치하기 위한 훅
  
    const handleAddToCart = (id, name) => {
      dispatch(addToCart(id, name)); // 제품을 카트에 추가
    };
  
    const handleRemoveFromCart = (id) => {
      dispatch(removeFromCart(id)); // 제품을 카트에서 제거
    };

  return(
    <div>
    <h1>Products</h1>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          <button onClick={() => handleAddToCart(product.id, product.name)}>
            Add to Cart
          </button>
        </li>
      ))}
    </ul>

    <h2>Shopping Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} (x{item.quantity})
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
    /*
    //login
    <div>
      <h1>login Status</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={usernameInput}
            onChange={(e) => setUserNameInput(e.target.value)}
            placeholder="Enter your username"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>


    
    //todo
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e)=>setInput(e.target.value)} 
        placeholder='Add a new todo'
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo=>(
          <li key={todo.id}>
            {todo.text}
          <button onClick={()=>handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>



    //*Provider : store를 애플리케이션 전체에 제공 
    //Provider 안에 있는 모든 컴포넌트는 store에접근할 수 있다.
    //<Provider store={store}>
    //<Counter />
    //</Provider>
    */
  
  )
}

export default App;
