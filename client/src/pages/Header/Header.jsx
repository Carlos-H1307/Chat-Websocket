import styles from './Header.module.css';
import Switch from '../../components/Switch/Switch';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SwipeButton from '../../components/Buttons/SwipeButton/SwipeButton';
import {useAuth} from '../../context/AuthContext';

function Header(){
    const [isSwiped, setSwiped] = useState('true');
    const { setAuth } = useAuth();

    function toggleHeader(){
        isSwiped=='true' ? setSwiped('false') : setSwiped('true');
    }

    function logout(){
        setAuth(false);
    }

    return(
        <div id={styles.HeaderContainer} is-swiped={isSwiped}>
            <SwipeButton onClick={toggleHeader} isSwiped={isSwiped}></SwipeButton>
            
            <div id={styles.HeaderContent}>
                <div id={styles.HeaderContentSwitch}>
                    <Switch></Switch>
                </div>
                <div id={styles.HeaderContentLinks}>
                    <div id={styles.HeaderContentLinksAbove} className={styles.Link}>
                        <Link to='/home'>Home</Link>
                        <Link to='/chat'>Chat</Link>
                    </div>
                    <div id={styles.HeaderContentLinksUnder} className={styles.Link}>
                        <Link onClick={logout}>Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
