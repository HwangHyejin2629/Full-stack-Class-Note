import React from 'react'
import App from './App'
import Login from './users/login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './users/Signup'

function AppRouter(){
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter> 
    </div>
}
export default AppRouter;