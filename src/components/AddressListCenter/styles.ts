import styled from 'styled-components';
import { colors } from '../../models/theme';

export const Container = styled.div `
    width: 100%;
    min-height: calc(100vh - 80px);
    background-color: ${colors.bgGray};
`;

export const Wrapper = styled.div `
    
    max-width: 1440px;
    height: 100%;
    padding: 10px 150px 50px 150px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
`;

export const AddressCardsWrapper = styled.div`
    width: 100%;
    max-width: 1140px;
   
    margin-bottom: 48px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;