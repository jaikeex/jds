import React from 'react';

interface ButtonProps {
    size?: 'small' | 'medium' | 'large' | 'wide';
    appearance?: 'subtle' | 'contained' | 'outlined';
    disabled?: boolean;
    icon?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children?: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;

export { Button, ButtonProps };
