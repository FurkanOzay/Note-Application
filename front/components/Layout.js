import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>My Hist</title>
        </Head>
            <header>
                <h1>My Hist</h1>
            </header>
            <main className={styles.main}>{children}</main> 
    </>
);


export default Layout;