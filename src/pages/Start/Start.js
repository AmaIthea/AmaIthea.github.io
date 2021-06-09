import React from 'react'
import Registration from './../../components/Registration/Registration'
import Link from '@material-ui/core/Link';

const Start = () => {
    


    

    return (
        <div className='Main'>
                {/* <h1>Добро пожаловать!</h1>
                <p>Мы рады приветствовать вас на обучающем портале English lessons.<br />
                  Здесь Вы имеете возможность <Link component="a" href="/lessons">выучить новые слова</Link>, <Link component="a" href="/lessons">практиковать уже пройденное</Link> а также <Link component="a" href="/lessons">просматривать статистику  своей успеваемости</Link>.</p>
                */}
                <Registration/>
                
        </div>
    )
}

export default Start;

