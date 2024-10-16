import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import User from './User';
import UserProfile from './UserProfile';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import Login from './Login';

function App() {
  //실제로 사용자 인증 상태를 확인해야한다.
  const isAuthenticated=false;


  return (
    <div className="App">
      <Routes>
      {/**Routes:모든 Route를 그룹화하며, URL의 경로에 따라 적절한 Route를 렌더링한다.       
        <Route path="/" element={<Navbar />}/>  root경로에서 메뉴가 보이게하기 
        <Route path="/home" element={<Home />}/>  Route : URL 경로와 컴포넌트를 매핑하여, 특정 경로에 맞는 컴포넌트를 랜더링한다
        path 주소일때, element 함수 실행해라 
        <Route path="/about" element={<About />}/>
      

        <Route path="/" element={<User />}/>
        <Route path="/user/:id" element={<UserProfile />}/>
       
        중펍라우트
       <Route path="/dashboard/*" element={<Dashboard/>}/>
        
       /:root경로 
        
       * 다이렉션
       <Route path="/" element={<Home />}/>
       <Route path="*" element={<NotFound />}/>    나머지는  <NotFound />
       */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard/>} isAuthenticated={isAuthenticated}/>}/>
      </Routes>
    </div>
  );
}

export default App;
