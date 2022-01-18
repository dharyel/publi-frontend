import { ButtonElement } from './styles';

interface ButtonProps{
    text: string;
    onClick?: () => void;
    margin?: string;
}

export const Button = ({text, onClick, margin}: ButtonProps) => {
    return (
        <ButtonElement margin={margin} onClick={onClick}>{text}</ButtonElement>
    );
}