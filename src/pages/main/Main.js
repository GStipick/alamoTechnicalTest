import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import { getImage } from '../../assets/images';
import styles from './Main.css';


class MainPageComponent extends PureComponent {
    render() {
        return (
            <div className={styles.App}>
                <header className={styles['App-header']}>
                    <img src={getImage('logo')} className={styles['App-logo']} alt="logo" />
                    <h1 className={styles['App-title']}>Welcome to React</h1>
                </header>
                <div className="columns">
                    <div className="column">
                        <div className="button">Test 1</div>
                    </div>
                    <div className="column">
                        <div className="button">Test 2</div>
                    </div>
                </div>
                <p className={styles['App-intro']}>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    This is a hot reload test!
                </p>
            </div>
        );
    }
}

const Main = hot(module)(MainPageComponent);

export { Main };
