import React from 'react';
import './styles.scss';
export interface ButtonProps {
    size?: 'small' | 'medium' | 'large' | 'wide';
    appearance?: 'subtle' | 'contained' | 'outlined';
    disabled?: boolean;
    icon?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children?: React.ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
