import Header from '../header';
import Footer from '../footer';
import styles from '../../styles/Layout.module.css';
import { ReactNode } from 'react';
import Head from 'next/head';


interface LayoutProps{
    children : ReactNode;
    pageTitle: string;
}

export default function index(props : LayoutProps) {
    const {children,pageTitle} = props;
    return (
        <>
        <Head>
            <title>
                Next Js Basic | {pageTitle}
            </title>
        </Head>
        <div className={styles.container}>
            <Header />
                <div className={styles.content}>{children}</div>
            <Footer />
            
        </div>
        </>
    )
}
