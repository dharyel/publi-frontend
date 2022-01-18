import styled from 'styled-components';
import { colors } from '../../models/theme';

interface ButtonElementProps{
    margin?: string;
}

export const ButtonElement = styled.button<ButtonElementProps>`
    padding: 10px 40px;
    margin: ${props => props.margin === ''? 0 : props.margin};

    background: ${colors.brandcolorPrimaryDefault};
    color: ${colors.bgWhite};
    
    border: 0;
    border-radius: 71px;

    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 700;

    transition: all 0.3s ease-in-out;

    border: 1px solid transparent;

    cursor: pointer;

    :hover {
        filter: brightness(0.9);
        border: 1px solid black;
    }
`;