import styles from './Header.module.css';
import Switch from '../../components/Switch/Switch';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SwipeButton from '../../components/Buttons/SwipeButton/SwipeButton';

function Header(){
    const [isSwiped, setSwiped] = useState('true');

    function toggleHeader(){
        isSwiped=='true' ? setSwiped('false') : setSwiped('true');
    }

    return(
        <div id={styles.HeaderContainer} is-swiped={isSwiped}>
            <SwipeButton onClick={toggleHeader} isSwiped={isSwiped}></SwipeButton>
            
            <div id={styles.HeaderContent}>
                <div id={styles.HeaderContentSwitch}>
                    <Switch></Switch>
                </div>
                <div id={styles.HeaderContentLinks}>
                    <Link to='/home'>Home</Link>
                    <Link to='/chat'>Chat</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
