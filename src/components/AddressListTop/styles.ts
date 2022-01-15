import styled from 'styled-components';
import { colors } from '../../models/theme';

export const Container = styled.div `
    width: 100%;
    min-height: 80px;
    
    background-color: ${colors.bgWhite};
`;

export const Wrapper = styled.div `
    
    max-width: 1440px;
    height: 100%;
    padding: 28px 150px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin: 0 auto;

    @media (max-width: 850px) {
        flex-direction: column;
    }
`;