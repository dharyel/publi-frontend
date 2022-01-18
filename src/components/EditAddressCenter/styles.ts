import styled from 'styled-components';
import { colors } from '../../models/theme';

export const Container = styled.div `
    width: 100%;
    min-height: calc(100vh - 80px);
    background-color: ${colors.bgGray};
`;

export const WrapperForm = styled.form `
    max-width: 1440px;
    height: 100%;
    padding: 48px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    @media (max-width: 850px) {
        padding: 10px 0px 50px 0px;
    }
`;

export const EditAddressWrapper = styled.div`
    width: 622px;
    padding: 32px;

    border-radius: 8px;
    background-color: ${colors.bgWhite};

    @media (max-width: 850px) {
        width: 100%;
    }
`;

export const InfosText = styled.label `
    color: ${colors.textcolorPrimary};

    font-size: 18px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
`;

export const InputWrapper = styled.div`
    width: 100%;
`;

export const AddressCategorySelect = styled.select`
    width: 100%;
    padding: 16px 0px;
    
    color: ${colors.textcolorPrimary};

    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    border: 0px;

    :focus {
        outline: 0px;
    }
`;

export const AddressCategoryOption = styled.option`
    color: ${colors.textcolorPrimary};

    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
`;

export const HorizontalRowInput = styled.hr`
    width: 100%;
    height: 2px;

    background-color: ${colors.outlineGrayDark};
`;

export const AddressInput = styled.input`
    width: 100%;
    padding: 16px 0px;

    color: ${colors.textcolorPrimary};

    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;

    appearance: none;

    border: 0px;

    :focus {
        border: 0px;
        outline: 0px;
    }

`;

export const ButtonWrapper = styled.div `
    text-align: center;
`;