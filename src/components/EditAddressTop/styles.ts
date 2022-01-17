import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
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
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    margin: 0 auto;

    @media (max-width: 850px) {
        justify-content: center;
    }
`;

export const BackToAddressListButton = styled(FaChevronLeft)`
    display: inline-block;
    margin-right: 16px;

    color: ${colors.brandcolorPrimaryDefault};
    font-size: 20px;

    cursor: pointer;

    transition: all 0.3s ease-in-out;

    :hover {
        filter: brightness(0.5);
    }
`;