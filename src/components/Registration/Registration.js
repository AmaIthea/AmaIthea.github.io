import React, { useContext, useState} from 'react'
import {Context} from './../../context'
import { useSnackbar } from 'notistack';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styleComponents from './../../styleComponents.module.css';
import TextField from '@material-ui/core/TextField';

const  Registration = () => {
    
    const { enqueueSnackbar } = useSnackbar();

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userPasswordAgain, setUserPasswordAgain] = useState('');

    const [createDisabled, setCreateDisabled] = useState(true);
    const [errorName, setErrorName] = useState(false)

    const { nameSwitch,
            avatarSwitch,
            expSwitch,
            entitledSwitch,
            entitledCheck} = useContext(Context);
    
    const encryptionPassword = pass => {
        let password = 'password' + userName
        let arr = pass.split('')
        arr.reverse()
        localStorage.setItem(password, arr.join(''))
    }  

    const validationPassword = pass => {
        if (pass === '')  {return false}
        let arr = pass.split('')
        for (let i = 0; i < arr.length; i++){if (arr[i] === ' '){return false}}
        encryptionPassword(pass) 
        return true
    }

    const clearRegistration = () => {
        localStorage.clear()
        setCreateDisabled(true)
        setErrorName(false)
        setUserName('')
        setUserPassword('')
        setUserPasswordAgain('')
    }
    const nameChange = (event) => setUserName(event.target.value)
    const passwordChange = (event) => setUserPassword(event.target.value) 
    const passwordAgainChange = (event) => setUserPasswordAgain(event.target.value)

  
    
    
    const userCheck = () => {
        if (validationPassword(userPassword)) {
            let name = 'user' + userName;

            if (localStorage.getItem(name) !== userName) {
                if (!entitledCheck()) {
                    entitledSwitch()
                    userCreate()
                    enqueueSnackbar('Profile successfully created', {
                        variant: 'success'
                    })
                 } else {
                    enqueueSnackbar('Profile creation error', {
                       variant: 'error' 
                    })
                 }  
            } else {
                enqueueSnackbar('This name is taken', {
                    variant: 'error' 
                })     
            }
        } else {
            enqueueSnackbar('The password must not contain spaces', {
                variant: 'error' 
            })
        }
    }
    const randomImage = () => {
        let rand = Math.round(1 - 0.5 + Math.random() * (3 - 1 + 1)) + 180
        return 'https://place-puppy.com/' + rand + 'x' + rand
        
    }
    const userCreate = () => {
        let name = 'user' + userName;
        let avatar = 'avatar' + userName;
        let exp = 'exp' + userName;
        localStorage.setItem(name, userName)
        localStorage.setItem(avatar, randomImage())
        localStorage.setItem(exp, 0)
        nameSwitch(userName)
        avatarSwitch(localStorage.getItem(avatar))
        expSwitch(0)
    }
    
    

    if (!entitledCheck()) {
        return (
        <div className={styleComponents.registration}>
            <Paper elevation={1}  className={styleComponents.block}>
               <h2 className={styleComponents.h2}>Предлагаем Вам зарегестрироваться!</h2>
               <p className={styleComponents.p}>Авторизация упрастит Вам работу с нашем сайтом, данные хронятся на стороне клиента в зашефрованном виде.</p>
            </Paper>
            <Paper elevation={1}  className={styleComponents.block}>
                <TextField className={styleComponents.input} 
                 id="filled-basic" 
                 onChange={nameChange} 
                 value={userName} 
                 label="Name" 
                 variant="filled"
                 error={errorName}
                 onFocus={(e)=>{setErrorName(false)}}
                 onBlur={(e)=>{
                    let name = 'user' + userName;
                    if (localStorage.getItem(name) === userName) {
                        setErrorName(true)
                        setCreateDisabled(true)
                        enqueueSnackbar('This name is taken', {
                            variant: 'error' 
                        })
                    }
                }}/>
                <TextField className={styleComponents.input} id="filled-basic" onChange={passwordChange} value={userPassword} label="password" variant="filled" type="password"/>
                <TextField className={styleComponents.input} id="filled-basic" error={userPassword === userPasswordAgain ? false : true}  onChange={passwordAgainChange} value={userPasswordAgain} label="password again" variant="filled" type="password" onBlur={(e)=>{
                if (userPassword !== userPasswordAgain) {
                    setCreateDisabled(false)
                    enqueueSnackbar('Password does not match', {
                        variant: 'error' 
                    })
                } else {
                    userName && userPassword && userPasswordAgain !== '' ? setCreateDisabled(false) : setCreateDisabled(true)
                }
                }}/>
            </Paper>
            <Button variant="contained" type='button' onClick={clearRegistration} disabled={userName || userPassword || userPasswordAgain !== '' ? false : true}>clear</Button>
            <Button variant="contained" color="secondary" onClick={userCheck} disabled={createDisabled}>registration</Button>
        </div>
        ) 
    } 
    return null
}

export default Registration