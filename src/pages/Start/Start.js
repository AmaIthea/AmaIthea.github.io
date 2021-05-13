import React from 'react'
import Link from '@material-ui/core/Link';
import Snackbar from './../../components/Snackbar/Snackbar'

const Start = () => {
    const preventDefault = (event) => event.preventDefault();
    return (
        <div className='Main'>
                <h1>Добро пожаловать!</h1>
                <p>Мы рады приветствовать вас на обучающем портале English lessons.<br />
                  Здесь Вы имеете возможность <Link href="/lessons" onClick={preventDefault}>выучить новые слова</Link>, <Link>практиковать уже пройденное</Link> а также <Link>просматривать статистику  своей успеваемости</Link>.</p>
                  <Snackbar/>
        </div>
    )
}

export default Start;

