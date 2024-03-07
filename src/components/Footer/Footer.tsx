import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Created by Nikolai Babkin</p>
            <a href={'https://hh.ru/resume/560898ecff0cc77e1a0039ed1f6d5572414b32'} target={'_blank'} rel="noreferrer">Link to resume</a>
        </footer>
    );
};

export default Footer;
