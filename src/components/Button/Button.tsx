import React from 'react';
import styles from './Button.module.css'
interface ButtonProps {
    title: string;
    onClick?: () => void;
}

const Button = ({title, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick} className={styles.btn}>{title}</button>
    );
};

export default Button;
