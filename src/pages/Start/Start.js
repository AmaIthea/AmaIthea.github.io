import React, { useContext, useState} from 'react'
import {Context} from './../../context'
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styleComponents from './../../styleComponents.module.css';
import TextField from '@material-ui/core/TextField';

const Start = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const {  entitledSwitch, entitledCheck} = useContext(Context);

    const clearRegistration = (event) => {
        setUserName('')
        setUserPassword('')
    }
    const nameChange = (event) => {
        setUserName(event.target.value)
    }
    const passwordChange = (event) => {
        setUserPassword(event.target.value)
    }
    
    const  Registration = () => {
        if (entitledCheck) {
            return (
            <div className={styleComponents.registration}>
                {/* <Paper elevation={1}  className={styleComponents.block}>
                   <h2 className={styleComponents.h2}>Предлагаем Вам зарегестрироваться!</h2>
                   <p className={styleComponents.p}>Авторизация упрастит Вам работу с нашем сайтом, данные хронятся на стороне клиента в зашефрованном виде.</p>
                </Paper> */}
                <Paper elevation={1}  className={styleComponents.block}>
                    <TextField className={styleComponents.input} id="filled-basic" onChange={nameChange} value={userName} label="Name" variant="filled" />
                    <TextField className={styleComponents.input} id="filled-basic" onChange={passwordChange} value={userPassword} label="password" variant="filled" />
                </Paper>
                <Button variant="contained" type='button' onClick={clearRegistration} disabled={userName || userPassword !== '' ? false : true}>clear</Button>
                <Button variant="contained" color="secondary">registration</Button>
            </div>
            ) 
        } 
        return null
    }
    return (
        <div className='Main'>
                {/* <h1>Добро пожаловать!</h1>
                <p>Мы рады приветствовать вас на обучающем портале English lessons.<br />
                  Здесь Вы имеете возможность <Link component="a" href="/lessons">выучить новые слова</Link>, <Link href="/lessons">практиковать уже пройденное</Link> а также <Link>просматривать статистику  своей успеваемости</Link>.</p>
                */}

                
                {Registration()}
                
        </div>
    )
}

export default Start;

