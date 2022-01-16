import { ButtonElement } from './styles';

interface ButtonProps{
    text: string;
    onClick?: () => void;
}

export const Button = ({text, onClick}: ButtonProps) => {
    return (
        <ButtonElement onClick={onClick}>{text}</ButtonElement>
    );
}