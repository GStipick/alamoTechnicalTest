import React, { PureComponent } from 'react';
import { getImage } from '../../assets/images';
import styles from './Main.css';


class Main extends PureComponent {
    render() {
        return (
            <div className={styles.App}>
                <header className={styles['App-header']}>
                    <img src={getImage('logo')} className={styles['App-logo']} alt="logo" />
                    <h1 className={styles['App-title']}>Welcome to React</h1>
                </header>
                <p className={styles['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export { Main };
