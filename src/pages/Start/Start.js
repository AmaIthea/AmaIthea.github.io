import React from 'react'
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import styleComponents from './../../styleComponents.module.css';
import TextField from '@material-ui/core/TextField';

const Start = () => {
    return (
        <div className='Main'>
                <h1>Добро пожаловать!</h1>
                {/* <p>Мы рады приветствовать вас на обучающем портале English lessons.<br />
                  Здесь Вы имеете возможность <Link component="a" href="/lessons">выучить новые слова</Link>, <Link href="/lessons">практиковать уже пройденное</Link> а также <Link>просматривать статистику  своей успеваемости</Link>.</p>
                   */}

                <Paper elevation={1}  className={styleComponents.block}>
                   <h2 className={styleComponents.h2}>Предлагаем Вам зарегестрироваться!</h2>
                   <p className={styleComponents.p}>Авторизация упрастит Вам работу с нашем сайтом, данные хронятся на стороне клиента в зашефрованном виде.</p>
                </Paper>
                <Paper elevation={1}  className={styleComponents.block}>
                    <TextField id="filled-basic" label="Name" variant="filled" />
                    <TextField id="filled-basic" label="password" variant="filled" />
                </Paper>
        </div>
    )
}

export default Start;

