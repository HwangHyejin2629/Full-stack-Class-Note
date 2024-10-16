import React from 'react';
import {Container,Grid,Typography,TextField,Button} from "@mui/material"
import {signup}from './service/ApiService';
//Link컴포넌트
//a태그와 비슷한 역할을 한다.
//리다이렉트 할때 쓴다.
import {Link} from 'react-router-dom';
import { TextFieldsRounded } from '@mui/icons-material';

function Signup(){
    const handleSubmit=(event)=>{
        event.preventDefault();
        //오브젝트에서 form에 저장된 데이터를 맴의 형태로 바꿔줌
        const data = new Form(event.target);
        const username = data.get("username");
        const password = data.get("password");
        signup({username:username, password:password})
        .then(response=>{
            //계정생성 성공시 login 페이지로 리다이렉트
            window.location.href="/login";
        })
    }

    return(
        //Container는 기본적으로 div로 렌더링된다
        //component 속성을 이용해서 다른 태그로 바꿀수 있다.
        <Container component="main" maxWidth="xs" style={{marginTop:"8%"}}>
            <form noValidate onSubmit={handleSubmit}>
                {/*spacing : 간격 1당 8px */}
                <Grid container spacing={2}>  
                    <Grid item xs={12}>
                        {/*화면에 보이는 크기는 h5이지만 실제 크기는 h1임 */}
                        <Typography component="h1" variant="h5">
                            계정 생성
                        </Typography>
                    </Grid>
                    {/*아이디*/}
                    <Grid item xs={12}>
                        <TextField autoComplete="fname"
                                    name="username"
                                    variant='outlined'                                    
                                    required //required 필수로 입력해야함                                    
                                    fullWidth //부모의 넓이를 퍼센트로 사용
                                    id="username"
                                    label="아이디"
                                    autoFocus
                        />
                    </Grid> 
                        
                    {/*비밀번호*/}
                    <Grid item xs={12}>
                        <TextField autoComplete="current-password"
                                    name="password"
                                    variant='outlined'                                    
                                    required //required 필수로 입력해야함                                    
                                    fullWidth //부모의 넓이를 퍼센트로 사용
                                    id="password"
                                    label="패스워드"
                        />
                    </Grid>
                    {/*가입버튼*/}
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant='contained'
                            color='primary'
                        >계정생성</Button>
                    </Grid> 
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link to="/login" variant="body2">계정이 이미 있습니까? 로그인하세요</Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Signup;