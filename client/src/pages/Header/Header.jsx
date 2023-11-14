import styles from './Header.module.css';
import Switch from '../../components/Switch/Switch';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SwipeButton from '../../components/Buttons/SwipeButton/SwipeButton';
import {useAuth} from '../../context/AuthContext';

function Header(){
    const [isSwiped, setSwiped] = useState('true');
    const { setAuth, logout, isAuth } = useAuth();
    const navigate = useNavigate();

    function toggleHeader(){
        isSwiped=='true' ? setSwiped('false') : setSwiped('true');
    }

    async function doLogout(){
        let res = await logout();
        if( res == true ){
            navigate('/login');
        }
    }

    return(
        <div id={styles.HeaderContainer} is-swiped={isSwiped}>
            <SwipeButton onClick={toggleHeader} isSwiped={isSwiped}></SwipeButton>
            
            <div id={styles.HeaderContent}>
                <div id={styles.HeaderContentSwitch}>
                    <Switch></Switch>
                </div>
                <div id={styles.HeaderContentLinks}>
                    {
                        isAuth ? (
                            <>
                                <div id={styles.HeaderContentLinksAbove} className={styles.Link}>
                                    <Link to='/home'>Home</Link>
                                    <Link to='/chat'>Chat</Link>
                                </div>
                                <div id={styles.HeaderContentLinksUnder} className={styles.Link}>
                                    <Link onClick={doLogout}>Logout</Link>
                                </div>
                            </>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;
